@file:Suppress("SuspiciousCollectionReassignment")

import org.jetbrains.kotlin.gradle.dsl.KotlinCommonOptions
import org.jetbrains.kotlin.gradle.tasks.Kotlin2JsCompile
import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
    kotlin("js") version "1.5.31"
    kotlin("plugin.serialization") version "1.5.31"
}

group = "me.matthewherod"
version = "1.0-SNAPSHOT"

repositories {
    jcenter()
    mavenLocal()
    mavenCentral()
    maven { url = uri("https://maven.pkg.jetbrains.space/public/p/kotlinx-html/maven") }
    maven { url = uri("https://maven.pkg.jetbrains.space/kotlin/p/kotlin/kotlin-js-wrappers") }
}

dependencies {
    testImplementation("org.jetbrains.kotlin:kotlin-test:1.5.31")
    implementation("org.jetbrains.kotlinx:kotlinx-nodejs:0.0.7")
    implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:1.3.0")
    implementation("io.ktor:ktor-client-core:1.6.4")
    implementation("io.ktor:ktor-client-json:1.6.4")
    implementation("io.ktor:ktor-client-serialization:1.6.4")
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.5.1")
    implementation(npm("node-fetch", "^3.0.0", generateExternals = false))
}

kotlin {
    js(IR) {
        binaries.executable()
        nodejs()
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
        "-Xopt-in=kotlin.experimental.ExperimentalTypeInference",
        "-Xir-property-lazy-initialization",
        "-Xerror-tolerance-policy=SYNTAX"
    ).filter { newArg ->
        newArg !in freeCompilerArgs
    }.forEach { newArg ->
        freeCompilerArgs += newArg
    }
}
