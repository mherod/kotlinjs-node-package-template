import kotlinx.coroutines.SupervisorJob
import kotlinx.coroutines.flow.*
import kotlinx.coroutines.flow.flow
import kotlin.coroutines.Continuation
import kotlin.coroutines.CoroutineContext
import kotlin.coroutines.startCoroutine
import kotlin.js.Promise

fun launch(block: suspend () -> Unit) {
    block.startCoroutine(object : Continuation<Unit> {
        override val context: CoroutineContext get() = SupervisorJob()
        override fun resumeWith(result: Result<Unit>) {}
    })
}

inline fun <reified T> Flow<T>.asPromise(): Promise<T> = Promise { resolve, reject ->
    launch {
        runCatching { first() }
            .onSuccess { resolve(it) }
            .onFailure { reject(it) }
    }
}

inline fun <reified T> flowPromise(@BuilderInference noinline block: suspend FlowCollector<T>.() -> Unit): Promise<T> {
    return flow(block).asPromise()
}
