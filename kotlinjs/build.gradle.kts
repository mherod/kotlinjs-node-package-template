@file:Suppress("SuspiciousCollectionReassignment")

import org.jetbrains.kotlin.gradle.dsl.KotlinCommonOptions
import org.jetbrains.kotlin.gradle.tasks.Kotlin2JsCompile
import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
    kotlin("js") version "1.5.31"
}

group = "me.matthewherod"
version = "1.0-SNAPSHOT"

repositories {
    jcenter()
    mavenCentral()
}

dependencies {
    testImplementation(kotlin("test"))
    implementation("org.jetbrains.kotlinx:kotlinx-nodejs:0.0.7")
}

kotlin {
    js(IR) {
        binaries.executable()
        nodejs {
        }
    }
}

val repositoryRootDir: File by lazy {
    try {
        val gitRepoDir = ProcessBuilder()
            .command("git rev-parse --show-toplevel".split(" "))
            .start()
            .inputStream
            .bufferedReader()
            .readLine()
        file(path = gitRepoDir)
    } catch (e: Throwable) {
        file(path = ".")
    }
}

val build = tasks.getByName("build")

val copyBuildToRoot = task<Copy>("copyBuildToRoot") {
    dependsOn(build)
    from("$buildDir/js/packages/${rootProject.name}/")
    into("$repositoryRootDir")
}

build.finalizedBy(copyBuildToRoot)

tasks.withType<KotlinCompile>() {
    kotlinOptions { applyKotlinCompilerOptions() }
}

tasks.withType<Kotlin2JsCompile> {
    kotlinOptions { applyKotlinCompilerOptions() }
}

fun KotlinCommonOptions.applyKotlinCompilerOptions() {
    languageVersion = "1.5"
    listOf(
        "-Xopt-in=kotlin.RequiresOptIn",
        "-Xopt-in=kotlin.js.ExperimentalJsExport",
        "-Xir-property-lazy-initialization"
    ).filter { newArg ->
        newArg !in freeCompilerArgs
    }.forEach { newArg ->
        freeCompilerArgs += newArg
    }
}
