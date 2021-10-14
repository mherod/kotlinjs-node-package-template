import kotlinx.coroutines.delay
import kotlin.js.Promise

@JsExport
object Example {
    fun anAsyncFunction(): Promise<String> = flowPromise {
        delay(1000)
        emit("Hello world")
    }
}
