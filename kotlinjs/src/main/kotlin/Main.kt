fun main() {
    println(greeting("kotlinjs-node-package-template"))
}

@JsExport
fun greeting(name: String) = "Hello, $name"
