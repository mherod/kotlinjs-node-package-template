(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['kotlinjs-node-package-template'] = factory(typeof this['kotlinjs-node-package-template'] === 'undefined' ? {} : this['kotlinjs-node-package-template']);
}(this, function (_) {
  'use strict';
  CoroutineSingletons.prototype = Object.create(Enum.prototype);
  CoroutineSingletons.prototype.constructor = CoroutineSingletons;
  AbstractMutableCollection.prototype = Object.create(AbstractCollection.prototype);
  AbstractMutableCollection.prototype.constructor = AbstractMutableCollection;
  AbstractMutableList.prototype = Object.create(AbstractMutableCollection.prototype);
  AbstractMutableList.prototype.constructor = AbstractMutableList;
  AbstractMutableSet.prototype = Object.create(AbstractMutableCollection.prototype);
  AbstractMutableSet.prototype.constructor = AbstractMutableSet;
  AbstractEntrySet.prototype = Object.create(AbstractMutableSet.prototype);
  AbstractEntrySet.prototype.constructor = AbstractEntrySet;
  _no_name_provided__2.prototype = Object.create(AbstractMutableSet.prototype);
  _no_name_provided__2.prototype.constructor = _no_name_provided__2;
  AbstractMutableMap.prototype = Object.create(AbstractMap.prototype);
  AbstractMutableMap.prototype.constructor = AbstractMutableMap;
  ArrayList.prototype = Object.create(AbstractMutableList.prototype);
  ArrayList.prototype.constructor = ArrayList;
  EntrySet.prototype = Object.create(AbstractEntrySet.prototype);
  EntrySet.prototype.constructor = EntrySet;
  HashMap.prototype = Object.create(AbstractMutableMap.prototype);
  HashMap.prototype.constructor = HashMap;
  HashSet.prototype = Object.create(AbstractMutableSet.prototype);
  HashSet.prototype.constructor = HashSet;
  ChainEntry.prototype = Object.create(SimpleEntry.prototype);
  ChainEntry.prototype.constructor = ChainEntry;
  EntrySet_0.prototype = Object.create(AbstractEntrySet.prototype);
  EntrySet_0.prototype.constructor = EntrySet_0;
  LinkedHashMap.prototype = Object.create(HashMap.prototype);
  LinkedHashMap.prototype.constructor = LinkedHashMap;
  NodeJsOutput_0.prototype = Object.create(BaseOutput.prototype);
  NodeJsOutput_0.prototype.constructor = NodeJsOutput_0;
  BufferedOutput_0.prototype = Object.create(BaseOutput.prototype);
  BufferedOutput_0.prototype.constructor = BufferedOutput_0;
  BufferedOutputToConsoleLog_0.prototype = Object.create(BufferedOutput_0.prototype);
  BufferedOutputToConsoleLog_0.prototype.constructor = BufferedOutputToConsoleLog_0;
  Exception.prototype = Object.create(Error.prototype);
  Exception.prototype.constructor = Exception;
  RuntimeException.prototype = Object.create(Exception.prototype);
  RuntimeException.prototype.constructor = RuntimeException;
  IllegalStateException.prototype = Object.create(RuntimeException.prototype);
  IllegalStateException.prototype.constructor = IllegalStateException;
  CancellationException.prototype = Object.create(IllegalStateException.prototype);
  CancellationException.prototype.constructor = CancellationException;
  PrimitiveKClassImpl.prototype = Object.create(KClassImpl.prototype);
  PrimitiveKClassImpl.prototype.constructor = PrimitiveKClassImpl;
  NothingKClassImpl.prototype = Object.create(KClassImpl.prototype);
  NothingKClassImpl.prototype.constructor = NothingKClassImpl;
  SimpleKClassImpl.prototype = Object.create(KClassImpl.prototype);
  SimpleKClassImpl.prototype.constructor = SimpleKClassImpl;
  Long.prototype = Object.create(Number_0.prototype);
  Long.prototype.constructor = Long;
  _no_name_provided__1_0.prototype = Object.create(CoroutineImpl_0.prototype);
  _no_name_provided__1_0.prototype.constructor = _no_name_provided__1_0;
  Error_0.prototype = Object.create(Error.prototype);
  Error_0.prototype.constructor = Error_0;
  IllegalArgumentException.prototype = Object.create(RuntimeException.prototype);
  IllegalArgumentException.prototype.constructor = IllegalArgumentException;
  NoSuchElementException.prototype = Object.create(RuntimeException.prototype);
  NoSuchElementException.prototype.constructor = NoSuchElementException;
  UnsupportedOperationException.prototype = Object.create(RuntimeException.prototype);
  UnsupportedOperationException.prototype.constructor = UnsupportedOperationException;
  IndexOutOfBoundsException.prototype = Object.create(RuntimeException.prototype);
  IndexOutOfBoundsException.prototype.constructor = IndexOutOfBoundsException;
  NullPointerException.prototype = Object.create(RuntimeException.prototype);
  NullPointerException.prototype.constructor = NullPointerException;
  ClassCastException.prototype = Object.create(RuntimeException.prototype);
  ClassCastException.prototype.constructor = ClassCastException;
  UninitializedPropertyAccessException.prototype = Object.create(RuntimeException.prototype);
  UninitializedPropertyAccessException.prototype.constructor = UninitializedPropertyAccessException;
  None.prototype = Object.create(TraceBase.prototype);
  None.prototype.constructor = None;
  AbstractCoroutine.prototype = Object.create(JobSupport.prototype);
  AbstractCoroutine.prototype.constructor = AbstractCoroutine;
  DispatchedTask.prototype = Object.create(SchedulerTask.prototype);
  DispatchedTask.prototype.constructor = DispatchedTask;
  CancellableContinuationImpl.prototype = Object.create(DispatchedTask.prototype);
  CancellableContinuationImpl.prototype.constructor = CancellableContinuationImpl;
  CancelHandler.prototype = Object.create(CancelHandlerBase.prototype);
  CancelHandler.prototype.constructor = CancelHandler;
  BeforeResumeCancelHandler.prototype = Object.create(CancelHandler.prototype);
  BeforeResumeCancelHandler.prototype.constructor = BeforeResumeCancelHandler;
  InvokeOnCancel.prototype = Object.create(CancelHandler.prototype);
  InvokeOnCancel.prototype.constructor = InvokeOnCancel;
  CancelledContinuation.prototype = Object.create(CompletedExceptionally.prototype);
  CancelledContinuation.prototype.constructor = CancelledContinuation;
  Key_1.prototype = Object.create(AbstractCoroutineContextKey.prototype);
  Key_1.prototype.constructor = Key_1;
  CoroutineDispatcher.prototype = Object.create(AbstractCoroutineContextElement.prototype);
  CoroutineDispatcher.prototype.constructor = CoroutineDispatcher;
  EventLoop.prototype = Object.create(CoroutineDispatcher.prototype);
  EventLoop.prototype.constructor = EventLoop;
  CompletionHandlerException.prototype = Object.create(RuntimeException.prototype);
  CompletionHandlerException.prototype.constructor = CompletionHandlerException;
  CoroutinesInternalError.prototype = Object.create(Error_0.prototype);
  CoroutinesInternalError.prototype.constructor = CoroutinesInternalError;
  LinkedListHead.prototype = Object.create(LinkedListNode.prototype);
  LinkedListHead.prototype.constructor = LinkedListHead;
  NodeList_0.prototype = Object.create(LinkedListHead.prototype);
  NodeList_0.prototype.constructor = NodeList_0;
  CompletionHandlerBase.prototype = Object.create(LinkedListNode.prototype);
  CompletionHandlerBase.prototype.constructor = CompletionHandlerBase;
  JobNode.prototype = Object.create(CompletionHandlerBase.prototype);
  JobNode.prototype.constructor = JobNode;
  ChildCompletion.prototype = Object.create(JobNode.prototype);
  ChildCompletion.prototype.constructor = ChildCompletion;
  JobCancellingNode.prototype = Object.create(JobNode.prototype);
  JobCancellingNode.prototype.constructor = JobCancellingNode;
  ChildHandleNode.prototype = Object.create(JobCancellingNode.prototype);
  ChildHandleNode.prototype.constructor = ChildHandleNode;
  InvokeOnCancelling.prototype = Object.create(JobCancellingNode.prototype);
  InvokeOnCancelling.prototype.constructor = InvokeOnCancelling;
  InvokeOnCompletion.prototype = Object.create(JobNode.prototype);
  InvokeOnCompletion.prototype.constructor = InvokeOnCompletion;
  ChildContinuation.prototype = Object.create(JobCancellingNode.prototype);
  ChildContinuation.prototype.constructor = ChildContinuation;
  JobImpl.prototype = Object.create(JobSupport.prototype);
  JobImpl.prototype.constructor = JobImpl;
  MainCoroutineDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  MainCoroutineDispatcher.prototype.constructor = MainCoroutineDispatcher;
  SupervisorJobImpl.prototype = Object.create(JobImpl.prototype);
  SupervisorJobImpl.prototype.constructor = SupervisorJobImpl;
  TimeoutCancellationException.prototype = Object.create(CancellationException.prototype);
  TimeoutCancellationException.prototype.constructor = TimeoutCancellationException;
  Unconfined.prototype = Object.create(CoroutineDispatcher.prototype);
  Unconfined.prototype.constructor = Unconfined;
  SafeFlow.prototype = Object.create(AbstractFlow.prototype);
  SafeFlow.prototype.constructor = SafeFlow;
  $collectCOROUTINE$1.prototype = Object.create(CoroutineImpl_0.prototype);
  $collectCOROUTINE$1.prototype.constructor = $collectCOROUTINE$1;
  $firstCOROUTINE$4.prototype = Object.create(CoroutineImpl_0.prototype);
  $firstCOROUTINE$4.prototype.constructor = $firstCOROUTINE$4;
  DispatchedContinuation.prototype = Object.create(DispatchedTask.prototype);
  DispatchedContinuation.prototype.constructor = DispatchedContinuation;
  ScopeCoroutine.prototype = Object.create(AbstractCoroutine.prototype);
  ScopeCoroutine.prototype.constructor = ScopeCoroutine;
  JsMainDispatcher.prototype = Object.create(MainCoroutineDispatcher.prototype);
  JsMainDispatcher.prototype.constructor = JsMainDispatcher;
  UnconfinedEventLoop.prototype = Object.create(EventLoop.prototype);
  UnconfinedEventLoop.prototype.constructor = UnconfinedEventLoop;
  JobCancellationException.prototype = Object.create(CancellationException.prototype);
  JobCancellationException.prototype.constructor = JobCancellationException;
  SetTimeoutBasedDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  SetTimeoutBasedDispatcher.prototype.constructor = SetTimeoutBasedDispatcher;
  NodeDispatcher.prototype = Object.create(SetTimeoutBasedDispatcher.prototype);
  NodeDispatcher.prototype.constructor = NodeDispatcher;
  SetTimeoutDispatcher.prototype = Object.create(SetTimeoutBasedDispatcher.prototype);
  SetTimeoutDispatcher.prototype.constructor = SetTimeoutDispatcher;
  MessageQueue.prototype = Object.create(ArrayQueue.prototype);
  MessageQueue.prototype.constructor = MessageQueue;
  ScheduledMessageQueue.prototype = Object.create(MessageQueue.prototype);
  ScheduledMessageQueue.prototype.constructor = ScheduledMessageQueue;
  ClearTimeout.prototype = Object.create(CancelHandler.prototype);
  ClearTimeout.prototype.constructor = ClearTimeout;
  WindowDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  WindowDispatcher.prototype.constructor = WindowDispatcher;
  WindowMessageQueue.prototype = Object.create(MessageQueue.prototype);
  WindowMessageQueue.prototype.constructor = WindowMessageQueue;
  AbortFlowException.prototype = Object.create(CancellationException.prototype);
  AbortFlowException.prototype.constructor = AbortFlowException;
  _no_name_provided__34.prototype = Object.create(CoroutineImpl_0.prototype);
  _no_name_provided__34.prototype.constructor = _no_name_provided__34;
  _no_name_provided__35.prototype = Object.create(CoroutineImpl_0.prototype);
  _no_name_provided__35.prototype.constructor = _no_name_provided__35;
  function indexOf(_this_, element) {
    if (element == null) {
      var inductionVariable = 0;
      var last = _this_.length - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (_this_[index] == null) {
            return index;
          }}
         while (inductionVariable <= last);
    } else {
      var inductionVariable_0 = 0;
      var last_0 = _this_.length - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          if (equals(element, _this_[index_0])) {
            return index_0;
          }}
         while (inductionVariable_0 <= last_0);
    }
    return -1;
  }
  function joinToString(_this_, separator, prefix, postfix, limit, truncated, transform) {
    return joinTo(_this_, StringBuilder_init_$Create$(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function joinToString$default(_this_, separator, prefix, postfix, limit, truncated, transform, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      separator = ', ';
    if (!(($mask0 & 2) === 0))
      prefix = '';
    if (!(($mask0 & 4) === 0))
      postfix = '';
    if (!(($mask0 & 8) === 0))
      limit = -1;
    if (!(($mask0 & 16) === 0))
      truncated = '...';
    if (!(($mask0 & 32) === 0))
      transform = null;
    var tmp = (!(separator == null) ? isCharSequence(separator) : false) ? separator : THROW_CCE();
    var tmp_0 = (!(prefix == null) ? isCharSequence(prefix) : false) ? prefix : THROW_CCE();
    var tmp_1 = (!(postfix == null) ? isCharSequence(postfix) : false) ? postfix : THROW_CCE();
    return joinToString(_this_, tmp, tmp_0, tmp_1, limit, (!(truncated == null) ? isCharSequence(truncated) : false) ? truncated : THROW_CCE(), transform);
  }
  function joinTo(_this_, buffer, separator, prefix, postfix, limit, truncated, transform) {
    buffer.append_v1o70a_k$(prefix);
    Unit_getInstance();
    var count = 0;
    var indexedObject = _this_;
    var inductionVariable = 0;
    var last = indexedObject.length;
    $l$break: while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      count = count + 1 | 0;
      if (count > 1) {
        buffer.append_v1o70a_k$(separator);
        Unit_getInstance();
      } else {
      }
      if (limit < 0 ? true : count <= limit) {
        appendElement(buffer, element, transform);
      } else
        break $l$break;
    }
    if (limit >= 0 ? count > limit : false) {
      buffer.append_v1o70a_k$(truncated);
      Unit_getInstance();
    }buffer.append_v1o70a_k$(postfix);
    Unit_getInstance();
    return buffer;
  }
  function joinToString_0(_this_, separator, prefix, postfix, limit, truncated, transform) {
    return joinTo_0(_this_, StringBuilder_init_$Create$(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function joinToString$default_0(_this_, separator, prefix, postfix, limit, truncated, transform, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      separator = ', ';
    if (!(($mask0 & 2) === 0))
      prefix = '';
    if (!(($mask0 & 4) === 0))
      postfix = '';
    if (!(($mask0 & 8) === 0))
      limit = -1;
    if (!(($mask0 & 16) === 0))
      truncated = '...';
    if (!(($mask0 & 32) === 0))
      transform = null;
    var tmp = (!(separator == null) ? isCharSequence(separator) : false) ? separator : THROW_CCE();
    var tmp_0 = (!(prefix == null) ? isCharSequence(prefix) : false) ? prefix : THROW_CCE();
    var tmp_1 = (!(postfix == null) ? isCharSequence(postfix) : false) ? postfix : THROW_CCE();
    return joinToString_0(_this_, tmp, tmp_0, tmp_1, limit, (!(truncated == null) ? isCharSequence(truncated) : false) ? truncated : THROW_CCE(), transform);
  }
  function joinTo_0(_this_, buffer, separator, prefix, postfix, limit, truncated, transform) {
    buffer.append_v1o70a_k$(prefix);
    Unit_getInstance();
    var count = 0;
    var tmp0_iterator = _this_.iterator_0_k$();
    $l$break: while (tmp0_iterator.hasNext_0_k$()) {
      var element = tmp0_iterator.next_0_k$();
      count = count + 1 | 0;
      if (count > 1) {
        buffer.append_v1o70a_k$(separator);
        Unit_getInstance();
      } else {
      }
      if (limit < 0 ? true : count <= limit) {
        appendElement(buffer, element, transform);
      } else
        break $l$break;
    }
    if (limit >= 0 ? count > limit : false) {
      buffer.append_v1o70a_k$(truncated);
      Unit_getInstance();
    }buffer.append_v1o70a_k$(postfix);
    Unit_getInstance();
    return buffer;
  }
  function coerceIn(_this_, minimumValue, maximumValue) {
    if (minimumValue.compareTo_wiekkq_k$(maximumValue) > 0)
      throw IllegalArgumentException_init_$Create$('' + 'Cannot coerce value to an empty range: maximum ' + maximumValue + ' is less than minimum ' + minimumValue + '.');
    if (_this_.compareTo_wiekkq_k$(minimumValue) < 0)
      return minimumValue;
    if (_this_.compareTo_wiekkq_k$(maximumValue) > 0)
      return maximumValue;
    return _this_;
  }
  function _no_name_provided_(this$0) {
    this._this$0 = this$0;
  }
  _no_name_provided_.prototype.invoke_2bq_k$ = function (it) {
    return it === this._this$0 ? '(this Collection)' : toString_0(it);
  };
  _no_name_provided_.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_2bq_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided_.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function AbstractCollection() {
  }
  AbstractCollection.prototype.contains_2bq_k$ = function (element) {
    var tmp$ret$0;
    $l$block_2: {
      var tmp;
      if (isInterface(this, Collection)) {
        tmp = (isInterface(this, Collection) ? this : THROW_CCE()).isEmpty_0_k$();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = false;
        break $l$block_2;
      } else {
      }
      var tmp0_iterator_1 = this.iterator_0_k$();
      while (tmp0_iterator_1.hasNext_0_k$()) {
        var element_2 = tmp0_iterator_1.next_0_k$();
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = equals(element_2, element);
          break $l$block_0;
        }
        if (tmp$ret$1) {
          tmp$ret$0 = true;
          break $l$block_2;
        } else {
        }
      }
      tmp$ret$0 = false;
      break $l$block_2;
    }
    return tmp$ret$0;
  };
  AbstractCollection.prototype.containsAll_dxd4eo_k$ = function (elements) {
    var tmp$ret$0;
    $l$block_2: {
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = (isInterface(elements, Collection) ? elements : THROW_CCE()).isEmpty_0_k$();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_2;
      } else {
      }
      var tmp0_iterator_1 = elements.iterator_0_k$();
      while (tmp0_iterator_1.hasNext_0_k$()) {
        var element_2 = tmp0_iterator_1.next_0_k$();
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = this.contains_2bq_k$(element_2);
          break $l$block_0;
        }
        if (!tmp$ret$1) {
          tmp$ret$0 = false;
          break $l$block_2;
        } else {
        }
      }
      tmp$ret$0 = true;
      break $l$block_2;
    }
    return tmp$ret$0;
  };
  AbstractCollection.prototype.isEmpty_0_k$ = function () {
    return this._get_size__0_k$() === 0;
  };
  AbstractCollection.prototype.toString = function () {
    return joinToString$default_0(this, ', ', '[', ']', 0, null, _no_name_provided_$factory(this), 24, null);
  };
  AbstractCollection.prototype.toArray = function () {
    return copyToArrayImpl_0(this);
  };
  AbstractCollection.$metadata$ = {
    simpleName: 'AbstractCollection',
    kind: 'class',
    interfaces: [Collection]
  };
  function _no_name_provided_$factory(this$0) {
    var i = new _no_name_provided_(this$0);
    return function (p1) {
      return i.invoke_2bq_k$(p1);
    };
  }
  function Companion_0() {
    Companion_instance = this;
  }
  Companion_0.prototype.checkElementIndex_rvwcgf_k$ = function (index, size) {
    if (index < 0 ? true : index >= size) {
      throw IndexOutOfBoundsException_init_$Create$('' + 'index: ' + index + ', size: ' + size);
    }};
  Companion_0.prototype.checkPositionIndex_rvwcgf_k$ = function (index, size) {
    if (index < 0 ? true : index > size) {
      throw IndexOutOfBoundsException_init_$Create$('' + 'index: ' + index + ', size: ' + size);
    }};
  Companion_0.prototype.checkRangeIndexes_zd700_k$ = function (fromIndex, toIndex, size) {
    if (fromIndex < 0 ? true : toIndex > size) {
      throw IndexOutOfBoundsException_init_$Create$('' + 'fromIndex: ' + fromIndex + ', toIndex: ' + toIndex + ', size: ' + size);
    }if (fromIndex > toIndex) {
      throw IllegalArgumentException_init_$Create$('' + 'fromIndex: ' + fromIndex + ' > toIndex: ' + toIndex);
    }};
  Companion_0.prototype.orderedHashCode_dxd51x_k$ = function (c) {
    var hashCode_1 = 1;
    var tmp0_iterator = c.iterator_0_k$();
    while (tmp0_iterator.hasNext_0_k$()) {
      var e = tmp0_iterator.next_0_k$();
      var tmp = imul(31, hashCode_1);
      var tmp1_safe_receiver = e;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : hashCode(tmp1_safe_receiver);
      hashCode_1 = tmp + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) | 0;
    }
    return hashCode_1;
  };
  Companion_0.prototype.orderedEquals_tuq55s_k$ = function (c, other) {
    if (!(c._get_size__0_k$() === other._get_size__0_k$()))
      return false;
    var otherIterator = other.iterator_0_k$();
    var tmp0_iterator = c.iterator_0_k$();
    while (tmp0_iterator.hasNext_0_k$()) {
      var elem = tmp0_iterator.next_0_k$();
      var elemOther = otherIterator.next_0_k$();
      if (!equals(elem, elemOther)) {
        return false;
      }}
    return true;
  };
  Companion_0.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion_0();
    return Companion_instance;
  }
  function toString($this, o) {
    return o === $this ? '(this Map)' : toString_0(o);
  }
  function implFindEntry($this, key) {
    var tmp$ret$1;
    $l$block_1: {
      var tmp0_firstOrNull_0 = $this._get_entries__0_k$();
      var tmp0_iterator_1 = tmp0_firstOrNull_0.iterator_0_k$();
      while (tmp0_iterator_1.hasNext_0_k$()) {
        var element_2 = tmp0_iterator_1.next_0_k$();
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = equals(element_2._get_key__0_k$(), key);
          break $l$block;
        }
        if (tmp$ret$0) {
          tmp$ret$1 = element_2;
          break $l$block_1;
        } else {
        }
      }
      tmp$ret$1 = null;
      break $l$block_1;
    }
    return tmp$ret$1;
  }
  function Companion_1() {
    Companion_instance_0 = this;
  }
  Companion_1.prototype.entryHashCode_4vm2wp_k$ = function (e) {
    var tmp$ret$1;
    $l$block_0: {
      {
      }
      var tmp$ret$0;
      $l$block: {
        var tmp2_safe_receiver_4 = e._get_key__0_k$();
        var tmp3_elvis_lhs_3 = tmp2_safe_receiver_4 == null ? null : hashCode(tmp2_safe_receiver_4);
        var tmp = tmp3_elvis_lhs_3 == null ? 0 : tmp3_elvis_lhs_3;
        var tmp0_safe_receiver_6 = e._get_value__0_k$();
        var tmp1_elvis_lhs_5 = tmp0_safe_receiver_6 == null ? null : hashCode(tmp0_safe_receiver_6);
        tmp$ret$0 = tmp ^ (tmp1_elvis_lhs_5 == null ? 0 : tmp1_elvis_lhs_5);
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  Companion_1.prototype.entryToString_4vm2wp_k$ = function (e) {
    var tmp$ret$1;
    $l$block_0: {
      {
      }
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = '' + e._get_key__0_k$() + '=' + e._get_value__0_k$();
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  Companion_1.prototype.entryEquals_caydzc_k$ = function (e, other) {
    if (!(!(other == null) ? isInterface(other, Entry) : false))
      return false;
    else {
    }
    var tmp;
    var tmp_0 = e._get_key__0_k$();
    if (equals(tmp_0, ((!(other == null) ? isInterface(other, Entry) : false) ? other : THROW_CCE())._get_key__0_k$())) {
      var tmp_1 = e._get_value__0_k$();
      tmp = equals(tmp_1, ((!(other == null) ? isInterface(other, Entry) : false) ? other : THROW_CCE())._get_value__0_k$());
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  Companion_1.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_1();
    return Companion_instance_0;
  }
  function _no_name_provided__0(this$0) {
    this._this$0_0 = this$0;
  }
  _no_name_provided__0.prototype.invoke_4v0zae_k$ = function (it) {
    return this._this$0_0.toString_4v0zae_k$(it);
  };
  _no_name_provided__0.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_4v0zae_k$((!(p1 == null) ? isInterface(p1, Entry) : false) ? p1 : THROW_CCE());
  };
  _no_name_provided__0.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function AbstractMap() {
    Companion_getInstance_0();
    this.__keys = null;
    this.__values = null;
  }
  AbstractMap.prototype.containsKey_2bw_k$ = function (key) {
    return !(implFindEntry(this, key) == null);
  };
  AbstractMap.prototype.containsEntry_7gsh9e_k$ = function (entry) {
    if (!(!(entry == null) ? isInterface(entry, Entry) : false))
      return false;
    else {
    }
    var key = entry._get_key__0_k$();
    var value = entry._get_value__0_k$();
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = (isInterface(this, Map_0) ? this : THROW_CCE()).get_2bw_k$(key);
      break $l$block;
    }
    var ourValue = tmp$ret$0;
    if (!equals(value, ourValue)) {
      return false;
    }var tmp;
    if (ourValue == null) {
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = (isInterface(this, Map_0) ? this : THROW_CCE()).containsKey_2bw_k$(key);
        break $l$block_0;
      }
      tmp = !tmp$ret$1;
    } else {
      tmp = false;
    }
    if (tmp) {
      return false;
    } else {
    }
    return true;
  };
  AbstractMap.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, Map_0) : false))
      return false;
    else {
    }
    var tmp = this._get_size__0_k$();
    if (!(tmp === ((!(other == null) ? isInterface(other, Map_0) : false) ? other : THROW_CCE())._get_size__0_k$()))
      return false;
    else {
    }
    var tmp$ret$0;
    $l$block_2: {
      var tmp0_all_0 = ((!(other == null) ? isInterface(other, Map_0) : false) ? other : THROW_CCE())._get_entries__0_k$();
      var tmp_0;
      if (isInterface(tmp0_all_0, Collection)) {
        tmp_0 = (isInterface(tmp0_all_0, Collection) ? tmp0_all_0 : THROW_CCE()).isEmpty_0_k$();
      } else {
        {
          tmp_0 = false;
        }
      }
      if (tmp_0) {
        tmp$ret$0 = true;
        break $l$block_2;
      } else {
      }
      var tmp0_iterator_1 = tmp0_all_0.iterator_0_k$();
      while (tmp0_iterator_1.hasNext_0_k$()) {
        var element_2 = tmp0_iterator_1.next_0_k$();
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = this.containsEntry_7gsh9e_k$(element_2);
          break $l$block_0;
        }
        if (!tmp$ret$1) {
          tmp$ret$0 = false;
          break $l$block_2;
        } else {
        }
      }
      tmp$ret$0 = true;
      break $l$block_2;
    }
    return tmp$ret$0;
  };
  AbstractMap.prototype.get_2bw_k$ = function (key) {
    var tmp0_safe_receiver = implFindEntry(this, key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_value__0_k$();
  };
  AbstractMap.prototype.hashCode = function () {
    return hashCode(this._get_entries__0_k$());
  };
  AbstractMap.prototype.isEmpty_0_k$ = function () {
    return this._get_size__0_k$() === 0;
  };
  AbstractMap.prototype._get_size__0_k$ = function () {
    return this._get_entries__0_k$()._get_size__0_k$();
  };
  AbstractMap.prototype.toString = function () {
    var tmp = this._get_entries__0_k$();
    return joinToString$default_0(tmp, ', ', '{', '}', 0, null, _no_name_provided_$factory_0(this), 24, null);
  };
  AbstractMap.prototype.toString_4v0zae_k$ = function (entry) {
    return toString(this, entry._get_key__0_k$()) + '=' + toString(this, entry._get_value__0_k$());
  };
  AbstractMap.$metadata$ = {
    simpleName: 'AbstractMap',
    kind: 'class',
    interfaces: [Map_0]
  };
  function _no_name_provided_$factory_0(this$0) {
    var i = new _no_name_provided__0(this$0);
    return function (p1) {
      return i.invoke_4v0zae_k$(p1);
    };
  }
  function Companion_2() {
    Companion_instance_1 = this;
  }
  Companion_2.prototype.unorderedHashCode_dxd51x_k$ = function (c) {
    var hashCode_1 = 0;
    var tmp0_iterator = c.iterator_0_k$();
    while (tmp0_iterator.hasNext_0_k$()) {
      var element = tmp0_iterator.next_0_k$();
      var tmp = hashCode_1;
      var tmp1_safe_receiver = element;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : hashCode(tmp1_safe_receiver);
      hashCode_1 = tmp + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) | 0;
    }
    return hashCode_1;
  };
  Companion_2.prototype.setEquals_qlktm2_k$ = function (c, other) {
    if (!(c._get_size__0_k$() === other._get_size__0_k$()))
      return false;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = c.containsAll_dxd4eo_k$(other);
      break $l$block;
    }
    return tmp$ret$0;
  };
  Companion_2.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_2();
    return Companion_instance_1;
  }
  function _get_lastIndex_(_this_) {
    return _this_._get_size__0_k$() - 1 | 0;
  }
  function Continuation() {
  }
  Continuation.$metadata$ = {
    simpleName: 'Continuation',
    kind: 'interface',
    interfaces: []
  };
  function startCoroutine(_this_, completion) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_resume_0 = intercepted(createCoroutineUnintercepted(_this_, completion));
      var tmp$ret$0;
      $l$block: {
        var tmp0_success_0_1 = Companion_getInstance_2();
        tmp$ret$0 = _Result___init__impl_(Unit_getInstance());
        break $l$block;
      }
      tmp$ret$1 = tmp0_resume_0.resumeWith_bnunh2_k$(tmp$ret$0);
      break $l$block_0;
    }
  }
  function Key() {
    Key_instance = this;
  }
  Key.$metadata$ = {
    simpleName: 'Key',
    kind: 'object',
    interfaces: [Key_0]
  };
  var Key_instance;
  function Key_getInstance() {
    if (Key_instance == null)
      new Key();
    return Key_instance;
  }
  function ContinuationInterceptor() {
  }
  ContinuationInterceptor.prototype.releaseInterceptedContinuation_h7c6yl_k$ = function (continuation) {
  };
  ContinuationInterceptor.prototype.get_9uvjra_k$ = function (key) {
    if (key instanceof AbstractCoroutineContextKey) {
      var tmp;
      if ((key instanceof AbstractCoroutineContextKey ? key : THROW_CCE()).isSubKey_djuxjq_k$(this._get_key__0_k$())) {
        var tmp_0 = (key instanceof AbstractCoroutineContextKey ? key : THROW_CCE()).tryCast_k332zt_k$(this);
        tmp = (!(tmp_0 == null) ? isInterface(tmp_0, Element_0) : false) ? tmp_0 : null;
      } else {
        {
          tmp = null;
        }
      }
      return tmp;
    } else {
    }
    var tmp_1;
    if (Key_getInstance() === key) {
      tmp_1 = isInterface(this, Element_0) ? this : THROW_CCE();
    } else {
      tmp_1 = null;
    }
    return tmp_1;
  };
  ContinuationInterceptor.$metadata$ = {
    simpleName: 'ContinuationInterceptor',
    kind: 'interface',
    interfaces: [Element_0]
  };
  function Key_0() {
  }
  Key_0.$metadata$ = {
    simpleName: 'Key',
    kind: 'interface',
    interfaces: []
  };
  function Element_0() {
  }
  Element_0.prototype.get_9uvjra_k$ = function (key) {
    var tmp;
    if (equals(this._get_key__0_k$(), key)) {
      tmp = isInterface(this, Element_0) ? this : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  };
  Element_0.prototype.fold_cq605b_k$ = function (initial, operation) {
    return operation(initial, this);
  };
  Element_0.$metadata$ = {
    simpleName: 'Element',
    kind: 'interface',
    interfaces: [CoroutineContext]
  };
  function CoroutineContext() {
  }
  CoroutineContext.$metadata$ = {
    simpleName: 'CoroutineContext',
    kind: 'interface',
    interfaces: []
  };
  function AbstractCoroutineContextKey(baseKey, safeCast) {
    this._safeCast = safeCast;
    var tmp = this;
    var tmp_0;
    if (baseKey instanceof AbstractCoroutineContextKey) {
      tmp_0 = (baseKey instanceof AbstractCoroutineContextKey ? baseKey : THROW_CCE())._topmostKey;
    } else {
      {
        tmp_0 = baseKey;
      }
    }
    tmp._topmostKey = tmp_0;
  }
  AbstractCoroutineContextKey.prototype.tryCast_k332zt_k$ = function (element) {
    return this._safeCast(element);
  };
  AbstractCoroutineContextKey.prototype.isSubKey_djuxjq_k$ = function (key) {
    return key === this ? true : this._topmostKey === key;
  };
  AbstractCoroutineContextKey.$metadata$ = {
    simpleName: 'AbstractCoroutineContextKey',
    kind: 'class',
    interfaces: [Key_0]
  };
  function AbstractCoroutineContextElement(key) {
    this._key = key;
  }
  AbstractCoroutineContextElement.prototype._get_key__0_k$ = function () {
    return this._key;
  };
  AbstractCoroutineContextElement.$metadata$ = {
    simpleName: 'AbstractCoroutineContextElement',
    kind: 'class',
    interfaces: [Element_0]
  };
  function _get_COROUTINE_SUSPENDED_() {
    return CoroutineSingletons_COROUTINE_SUSPENDED_getInstance();
  }
  var CoroutineSingletons_COROUTINE_SUSPENDED_instance;
  var CoroutineSingletons_UNDECIDED_instance;
  var CoroutineSingletons_RESUMED_instance;
  var CoroutineSingletons_entriesInitialized;
  function CoroutineSingletons_initEntries() {
    if (CoroutineSingletons_entriesInitialized)
      return Unit_getInstance();
    CoroutineSingletons_entriesInitialized = true;
    CoroutineSingletons_COROUTINE_SUSPENDED_instance = new CoroutineSingletons('COROUTINE_SUSPENDED', 0);
    CoroutineSingletons_UNDECIDED_instance = new CoroutineSingletons('UNDECIDED', 1);
    CoroutineSingletons_RESUMED_instance = new CoroutineSingletons('RESUMED', 2);
  }
  function CoroutineSingletons(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  CoroutineSingletons.$metadata$ = {
    simpleName: 'CoroutineSingletons',
    kind: 'class',
    interfaces: []
  };
  function CoroutineSingletons_COROUTINE_SUSPENDED_getInstance() {
    CoroutineSingletons_initEntries();
    return CoroutineSingletons_COROUTINE_SUSPENDED_instance;
  }
  function KClassifier() {
  }
  KClassifier.$metadata$ = {
    simpleName: 'KClassifier',
    kind: 'interface',
    interfaces: []
  };
  function appendElement(_this_, element, transform) {
    if (!(transform == null)) {
      _this_.append_v1o70a_k$(transform(element));
      Unit_getInstance();
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this_.append_v1o70a_k$((element == null ? true : isCharSequence(element)) ? element : THROW_CCE());
        Unit_getInstance();
      } else {
        if (element instanceof Char) {
          _this_.append_wi8o78_k$(element instanceof Char ? element : THROW_CCE());
          Unit_getInstance();
        } else {
          {
            _this_.append_v1o70a_k$(toString_0(element));
            Unit_getInstance();
          }
        }
      }
    }
  }
  function _Result___init__impl_(value) {
    return value;
  }
  function _Result___get_value__impl_(this_0) {
    return this_0;
  }
  function _Result___get_isSuccess__impl_(this_0) {
    var tmp = _Result___get_value__impl_(this_0);
    return !(tmp instanceof Failure);
  }
  function _Result___get_isFailure__impl_(this_0) {
    var tmp = _Result___get_value__impl_(this_0);
    return tmp instanceof Failure;
  }
  function Result__exceptionOrNull_impl(this_0) {
    var tmp0_subject = _Result___get_value__impl_(this_0);
    var tmp;
    if (tmp0_subject instanceof Failure) {
      var tmp_0 = _Result___get_value__impl_(this_0);
      tmp = (tmp_0 instanceof Failure ? tmp_0 : THROW_CCE())._exception;
    } else {
      {
        tmp = null;
      }
    }
    return tmp;
  }
  function Companion_3() {
    Companion_instance_2 = this;
  }
  Companion_3.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_3();
    return Companion_instance_2;
  }
  function Failure(exception) {
    this._exception = exception;
  }
  Failure.prototype.equals = function (other) {
    var tmp;
    if (other instanceof Failure) {
      tmp = equals(this._exception, (other instanceof Failure ? other : THROW_CCE())._exception);
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  Failure.prototype.hashCode = function () {
    return hashCode(this._exception);
  };
  Failure.prototype.toString = function () {
    return '' + 'Failure(' + this._exception + ')';
  };
  Failure.$metadata$ = {
    simpleName: 'Failure',
    kind: 'class',
    interfaces: [Serializable]
  };
  function createFailure(exception) {
    return new Failure(exception);
  }
  function CharSequence() {
  }
  CharSequence.$metadata$ = {
    simpleName: 'CharSequence',
    kind: 'interface',
    interfaces: []
  };
  function Comparable() {
  }
  Comparable.$metadata$ = {
    simpleName: 'Comparable',
    kind: 'interface',
    interfaces: []
  };
  function Iterator() {
  }
  Iterator.$metadata$ = {
    simpleName: 'Iterator',
    kind: 'interface',
    interfaces: []
  };
  function MutableIterator() {
  }
  MutableIterator.$metadata$ = {
    simpleName: 'MutableIterator',
    kind: 'interface',
    interfaces: [Iterator]
  };
  function Number_0() {
  }
  Number_0.$metadata$ = {
    simpleName: 'Number',
    kind: 'class',
    interfaces: []
  };
  function Unit() {
    Unit_instance = this;
  }
  Unit.prototype.toString = function () {
    return 'kotlin.Unit';
  };
  Unit.$metadata$ = {
    simpleName: 'Unit',
    kind: 'object',
    interfaces: []
  };
  var Unit_instance;
  function Unit_getInstance() {
    if (Unit_instance == null)
      new Unit();
    return Unit_instance;
  }
  function IntCompanionObject_0() {
    IntCompanionObject_instance = this;
    this._MIN_VALUE = -2147483648;
    this._MAX_VALUE = 2147483647;
    this._SIZE_BYTES = 4;
    this._SIZE_BITS = 32;
  }
  IntCompanionObject_0.prototype._get_MIN_VALUE__0_k$ = function () {
    return this._MIN_VALUE;
  };
  IntCompanionObject_0.prototype._get_MAX_VALUE__0_k$ = function () {
    return this._MAX_VALUE;
  };
  IntCompanionObject_0.prototype._get_SIZE_BYTES__0_k$ = function () {
    return this._SIZE_BYTES;
  };
  IntCompanionObject_0.prototype._get_SIZE_BITS__0_k$ = function () {
    return this._SIZE_BITS;
  };
  IntCompanionObject_0.$metadata$ = {
    simpleName: 'IntCompanionObject',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(IntCompanionObject_0.prototype, 'MIN_VALUE', {
    configurable: true,
    get: IntCompanionObject_0.prototype._get_MIN_VALUE__0_k$
  });
  Object.defineProperty(IntCompanionObject_0.prototype, 'MAX_VALUE', {
    configurable: true,
    get: IntCompanionObject_0.prototype._get_MAX_VALUE__0_k$
  });
  Object.defineProperty(IntCompanionObject_0.prototype, 'SIZE_BYTES', {
    configurable: true,
    get: IntCompanionObject_0.prototype._get_SIZE_BYTES__0_k$
  });
  Object.defineProperty(IntCompanionObject_0.prototype, 'SIZE_BITS', {
    configurable: true,
    get: IntCompanionObject_0.prototype._get_SIZE_BITS__0_k$
  });
  var IntCompanionObject_instance;
  function IntCompanionObject_getInstance() {
    if (IntCompanionObject_instance == null)
      new IntCompanionObject_0();
    return IntCompanionObject_instance;
  }
  function arrayCopy_0(source, destination, destinationOffset, startIndex, endIndex) {
    Companion_getInstance().checkRangeIndexes_zd700_k$(startIndex, endIndex, source.length);
    var rangeSize = endIndex - startIndex | 0;
    Companion_getInstance().checkRangeIndexes_zd700_k$(destinationOffset, destinationOffset + rangeSize | 0, destination.length);
    if (ArrayBuffer.isView(destination) && ArrayBuffer.isView(source)) {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = source;
        break $l$block;
      }
      var subrange = tmp$ret$0.subarray(startIndex, endIndex);
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = destination;
        break $l$block_0;
      }
      tmp$ret$1.set(subrange, destinationOffset);
    } else {
      if (!(source === destination) ? true : destinationOffset <= startIndex) {
        var inductionVariable = 0;
        if (inductionVariable < rangeSize)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            destination[destinationOffset + index | 0] = source[startIndex + index | 0];
          }
           while (inductionVariable < rangeSize);
      } else {
        var inductionVariable_0 = rangeSize - 1 | 0;
        if (0 <= inductionVariable_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + -1 | 0;
            destination[destinationOffset + index_0 | 0] = source[startIndex + index_0 | 0];
          }
           while (0 <= inductionVariable_0);
      }
    }
  }
  function copyToArrayImpl_0(collection) {
    var tmp$ret$0;
    $l$block: {
      var tmp = [];
      tmp$ret$0 = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
      break $l$block;
    }
    var array = tmp$ret$0;
    var iterator = collection.iterator_0_k$();
    while (iterator.hasNext_0_k$()) {
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = array;
        break $l$block_0;
      }
      tmp$ret$1.push(iterator.next_0_k$());
    }
    return array;
  }
  function AbstractMutableCollection() {
    AbstractCollection.call(this);
  }
  AbstractMutableCollection.prototype.toJSON = function () {
    return this.toArray();
  };
  AbstractMutableCollection.$metadata$ = {
    simpleName: 'AbstractMutableCollection',
    kind: 'class',
    interfaces: [MutableCollection]
  };
  function IteratorImpl($outer) {
    this._$this = $outer;
    this._index = 0;
    this._last = -1;
  }
  IteratorImpl.prototype.hasNext_0_k$ = function () {
    return this._index < this._$this._get_size__0_k$();
  };
  IteratorImpl.prototype.next_0_k$ = function () {
    if (!this.hasNext_0_k$())
      throw NoSuchElementException_init_$Create$();
    var tmp = this;
    var tmp0_this = this;
    var tmp1 = tmp0_this._index;
    tmp0_this._index = tmp1 + 1 | 0;
    tmp._last = tmp1;
    return this._$this.get_ha5a7z_k$(this._last);
  };
  IteratorImpl.$metadata$ = {
    simpleName: 'IteratorImpl',
    kind: 'class',
    interfaces: [MutableIterator]
  };
  function AbstractMutableList() {
    AbstractMutableCollection.call(this);
    this._modCount = 0;
  }
  AbstractMutableList.prototype._set_modCount__majfzk_k$ = function (_set___) {
    this._modCount = _set___;
  };
  AbstractMutableList.prototype._get_modCount__0_k$ = function () {
    return this._modCount;
  };
  AbstractMutableList.prototype.iterator_0_k$ = function () {
    return new IteratorImpl(this);
  };
  AbstractMutableList.prototype.contains_2bq_k$ = function (element) {
    return this.indexOf_2bq_k$(element) >= 0;
  };
  AbstractMutableList.prototype.indexOf_2bq_k$ = function (element) {
    var inductionVariable = 0;
    var last = _get_lastIndex_(this);
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals(this.get_ha5a7z_k$(index), element)) {
          return index;
        }}
       while (!(index === last));
    return -1;
  };
  AbstractMutableList.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, List) : false))
      return false;
    else {
    }
    var tmp = Companion_getInstance();
    return tmp.orderedEquals_tuq55s_k$(this, (!(other == null) ? isInterface(other, Collection) : false) ? other : THROW_CCE());
  };
  AbstractMutableList.prototype.hashCode = function () {
    return Companion_getInstance().orderedHashCode_dxd51x_k$(this);
  };
  AbstractMutableList.$metadata$ = {
    simpleName: 'AbstractMutableList',
    kind: 'class',
    interfaces: [MutableList]
  };
  function _no_name_provided__1($entryIterator) {
    this._$entryIterator = $entryIterator;
  }
  _no_name_provided__1.prototype.hasNext_0_k$ = function () {
    return this._$entryIterator.hasNext_0_k$();
  };
  _no_name_provided__1.prototype.next_0_k$ = function () {
    return this._$entryIterator.next_0_k$()._get_key__0_k$();
  };
  _no_name_provided__1.$metadata$ = {
    kind: 'class',
    interfaces: [MutableIterator]
  };
  function SimpleEntry(key, value) {
    this._key_0 = key;
    this.__value = value;
  }
  SimpleEntry.prototype._get_key__0_k$ = function () {
    return this._key_0;
  };
  SimpleEntry.prototype._get_value__0_k$ = function () {
    return this.__value;
  };
  SimpleEntry.prototype.setValue_2c7_k$ = function (newValue) {
    var oldValue = this.__value;
    this.__value = newValue;
    return oldValue;
  };
  SimpleEntry.prototype.hashCode = function () {
    return Companion_getInstance_0().entryHashCode_4vm2wp_k$(this);
  };
  SimpleEntry.prototype.toString = function () {
    return Companion_getInstance_0().entryToString_4vm2wp_k$(this);
  };
  SimpleEntry.prototype.equals = function (other) {
    return Companion_getInstance_0().entryEquals_caydzc_k$(this, other);
  };
  SimpleEntry.$metadata$ = {
    simpleName: 'SimpleEntry',
    kind: 'class',
    interfaces: [MutableEntry]
  };
  function AbstractEntrySet() {
    AbstractMutableSet.call(this);
  }
  AbstractEntrySet.prototype.contains_2bq_k$ = function (element) {
    return this.containsEntry_4v0zae_k$(element);
  };
  AbstractEntrySet.$metadata$ = {
    simpleName: 'AbstractEntrySet',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__2(this$0) {
    this._this$0_1 = this$0;
    AbstractMutableSet.call(this);
  }
  _no_name_provided__2.prototype.add_2bw_k$ = function (element) {
    throw UnsupportedOperationException_init_$Create$_0('Add is not supported on keys');
  };
  _no_name_provided__2.prototype.add_2bq_k$ = function (element) {
    return this.add_2bw_k$((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  _no_name_provided__2.prototype.contains_2bw_k$ = function (element) {
    return this._this$0_1.containsKey_2bw_k$(element);
  };
  _no_name_provided__2.prototype.contains_2bq_k$ = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    else {
    }
    return this.contains_2bw_k$((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  _no_name_provided__2.prototype.iterator_0_k$ = function () {
    var entryIterator = this._this$0_1._get_entries__0_k$().iterator_0_k$();
    return new _no_name_provided__1(entryIterator);
  };
  _no_name_provided__2.prototype._get_size__0_k$ = function () {
    return this._this$0_1._get_size__0_k$();
  };
  _no_name_provided__2.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function AbstractMutableMap() {
    AbstractMap.call(this);
    this.__keys_0 = null;
    this.__values_0 = null;
  }
  AbstractMutableMap.prototype._get_keys__0_k$ = function () {
    if (this.__keys_0 == null) {
      var tmp = this;
      tmp.__keys_0 = new _no_name_provided__2(this);
    }return ensureNotNull(this.__keys_0);
  };
  AbstractMutableMap.$metadata$ = {
    simpleName: 'AbstractMutableMap',
    kind: 'class',
    interfaces: [MutableMap]
  };
  function AbstractMutableSet() {
    AbstractMutableCollection.call(this);
  }
  AbstractMutableSet.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, Set) : false))
      return false;
    else {
    }
    var tmp = Companion_getInstance_1();
    return tmp.setEquals_qlktm2_k$(this, (!(other == null) ? isInterface(other, Set) : false) ? other : THROW_CCE());
  };
  AbstractMutableSet.prototype.hashCode = function () {
    return Companion_getInstance_1().unorderedHashCode_dxd51x_k$(this);
  };
  AbstractMutableSet.$metadata$ = {
    simpleName: 'AbstractMutableSet',
    kind: 'class',
    interfaces: [MutableSet]
  };
  function ArrayList_init_$Init$(initialCapacity, $this) {
    var tmp$ret$0;
    $l$block: {
      var tmp = [];
      tmp$ret$0 = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
      break $l$block;
    }
    ArrayList.call($this, tmp$ret$0);
    return $this;
  }
  function ArrayList_init_$Create$(initialCapacity) {
    return ArrayList_init_$Init$(initialCapacity, Object.create(ArrayList.prototype));
  }
  function rangeCheck($this, index) {
    var tmp$ret$0;
    $l$block: {
      {
      }
      {
        Companion_getInstance().checkElementIndex_rvwcgf_k$(index, $this._get_size__0_k$());
      }
      tmp$ret$0 = index;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function insertionRangeCheck($this, index) {
    var tmp$ret$0;
    $l$block: {
      {
      }
      {
        Companion_getInstance().checkPositionIndex_rvwcgf_k$(index, $this._get_size__0_k$());
      }
      tmp$ret$0 = index;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function ArrayList(array) {
    AbstractMutableList.call(this);
    this._array = array;
    this._isReadOnly = false;
  }
  ArrayList.prototype._get_size__0_k$ = function () {
    return this._array.length;
  };
  ArrayList.prototype.get_ha5a7z_k$ = function (index) {
    var tmp = this._array[rangeCheck(this, index)];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  ArrayList.prototype.add_2bq_k$ = function (element) {
    this.checkIsMutable_sv8swh_k$();
    var tmp$ret$0;
    $l$block: {
      var tmp0_asDynamic_0 = this._array;
      tmp$ret$0 = tmp0_asDynamic_0;
      break $l$block;
    }
    tmp$ret$0.push(element);
    var tmp0_this = this;
    var tmp1 = tmp0_this._get_modCount__0_k$();
    tmp0_this._set_modCount__majfzk_k$(tmp1 + 1 | 0);
    Unit_getInstance();
    return true;
  };
  ArrayList.prototype.add_vz2mgm_k$ = function (index, element) {
    this.checkIsMutable_sv8swh_k$();
    var tmp$ret$0;
    $l$block: {
      var tmp0_asDynamic_0 = this._array;
      tmp$ret$0 = tmp0_asDynamic_0;
      break $l$block;
    }
    tmp$ret$0.splice(insertionRangeCheck(this, index), 0, element);
    var tmp0_this = this;
    var tmp1 = tmp0_this._get_modCount__0_k$();
    tmp0_this._set_modCount__majfzk_k$(tmp1 + 1 | 0);
    Unit_getInstance();
  };
  ArrayList.prototype.indexOf_2bq_k$ = function (element) {
    return indexOf(this._array, element);
  };
  ArrayList.prototype.toString = function () {
    return arrayToString(this._array);
  };
  ArrayList.prototype.toArray_0_k$ = function () {
    var tmp = [].slice.call(this._array);
    return (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
  };
  ArrayList.prototype.toArray = function () {
    return this.toArray_0_k$();
  };
  ArrayList.prototype.checkIsMutable_sv8swh_k$ = function () {
    if (this._isReadOnly)
      throw UnsupportedOperationException_init_$Create$();
  };
  ArrayList.$metadata$ = {
    simpleName: 'ArrayList',
    kind: 'class',
    interfaces: [MutableList, RandomAccess]
  };
  function HashCode() {
    HashCode_instance = this;
  }
  HashCode.prototype.equals_rvz98i_k$ = function (value1, value2) {
    return equals(value1, value2);
  };
  HashCode.prototype.getHashCode_wi7j7l_k$ = function (value) {
    var tmp0_safe_receiver = value;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  HashCode.$metadata$ = {
    simpleName: 'HashCode',
    kind: 'object',
    interfaces: [EqualityComparator]
  };
  var HashCode_instance;
  function HashCode_getInstance() {
    if (HashCode_instance == null)
      new HashCode();
    return HashCode_instance;
  }
  function EqualityComparator() {
  }
  EqualityComparator.$metadata$ = {
    simpleName: 'EqualityComparator',
    kind: 'interface',
    interfaces: []
  };
  function EntrySet($outer) {
    this._$this_0 = $outer;
    AbstractEntrySet.call(this);
  }
  EntrySet.prototype.add_qbahou_k$ = function (element) {
    throw UnsupportedOperationException_init_$Create$_0('Add is not supported on entries');
  };
  EntrySet.prototype.add_2bq_k$ = function (element) {
    return this.add_qbahou_k$((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  EntrySet.prototype.containsEntry_4v0zae_k$ = function (element) {
    return this._$this_0.containsEntry_7gsh9e_k$(element);
  };
  EntrySet.prototype.iterator_0_k$ = function () {
    return this._$this_0._internalMap.iterator_0_k$();
  };
  EntrySet.prototype._get_size__0_k$ = function () {
    return this._$this_0._get_size__0_k$();
  };
  EntrySet.$metadata$ = {
    simpleName: 'EntrySet',
    kind: 'class',
    interfaces: []
  };
  function HashMap_init_$Init$(internalMap, $this) {
    AbstractMutableMap.call($this);
    HashMap.call($this);
    $this._internalMap = internalMap;
    $this._equality = internalMap._get_equality__0_k$();
    return $this;
  }
  function HashMap_init_$Init$_0($this) {
    HashMap_init_$Init$(new InternalHashCodeMap(HashCode_getInstance()), $this);
    return $this;
  }
  function HashMap_init_$Create$() {
    return HashMap_init_$Init$_0(Object.create(HashMap.prototype));
  }
  function HashMap_init_$Init$_1(initialCapacity, loadFactor, $this) {
    HashMap_init_$Init$_0($this);
    {
      var tmp0_require_0 = initialCapacity >= 0;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = '' + 'Negative initial capacity: ' + initialCapacity;
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString_1(message_1));
      }}
    {
      var tmp1_require_0 = loadFactor >= 0;
      {
      }
      if (!tmp1_require_0) {
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = '' + 'Non-positive load factor: ' + loadFactor;
          break $l$block_0;
        }
        var message_1_0 = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString_1(message_1_0));
      }}
    return $this;
  }
  function HashMap_init_$Create$_0(initialCapacity, loadFactor) {
    return HashMap_init_$Init$_1(initialCapacity, loadFactor, Object.create(HashMap.prototype));
  }
  HashMap.prototype.containsKey_2bw_k$ = function (key) {
    return this._internalMap.contains_2bw_k$(key);
  };
  HashMap.prototype._get_entries__0_k$ = function () {
    if (this.__entries == null) {
      this.__entries = this.createEntrySet_0_k$();
    }return ensureNotNull(this.__entries);
  };
  HashMap.prototype.createEntrySet_0_k$ = function () {
    return new EntrySet(this);
  };
  HashMap.prototype.get_2bw_k$ = function (key) {
    return this._internalMap.get_2bw_k$(key);
  };
  HashMap.prototype.put_1q9pf_k$ = function (key, value) {
    return this._internalMap.put_1q9pf_k$(key, value);
  };
  HashMap.prototype._get_size__0_k$ = function () {
    return this._internalMap._get_size__0_k$();
  };
  function HashMap() {
    this.__entries = null;
  }
  HashMap.$metadata$ = {
    simpleName: 'HashMap',
    kind: 'class',
    interfaces: [MutableMap]
  };
  function HashSet_init_$Init$(initialCapacity, loadFactor, $this) {
    AbstractMutableSet.call($this);
    HashSet.call($this);
    $this._map = HashMap_init_$Create$_0(initialCapacity, loadFactor);
    return $this;
  }
  function HashSet_init_$Init$_0(initialCapacity, $this) {
    HashSet_init_$Init$(initialCapacity, 0.0, $this);
    return $this;
  }
  function HashSet_init_$Create$(initialCapacity) {
    return HashSet_init_$Init$_0(initialCapacity, Object.create(HashSet.prototype));
  }
  HashSet.prototype.add_2bq_k$ = function (element) {
    var old = this._map.put_1q9pf_k$(element, this);
    return old == null;
  };
  HashSet.prototype.contains_2bq_k$ = function (element) {
    return this._map.containsKey_2bw_k$(element);
  };
  HashSet.prototype.isEmpty_0_k$ = function () {
    return this._map.isEmpty_0_k$();
  };
  HashSet.prototype.iterator_0_k$ = function () {
    return this._map._get_keys__0_k$().iterator_0_k$();
  };
  HashSet.prototype._get_size__0_k$ = function () {
    return this._map._get_size__0_k$();
  };
  function HashSet() {
  }
  HashSet.$metadata$ = {
    simpleName: 'HashSet',
    kind: 'class',
    interfaces: [MutableSet]
  };
  function computeNext($this) {
    if ($this._chainOrEntry != null ? $this._isChain : false) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_unsafeCast_0 = $this._chainOrEntry;
        tmp$ret$0 = (tmp0_unsafeCast_0 == null ? true : isObject(tmp0_unsafeCast_0)) ? tmp0_unsafeCast_0 : THROW_CCE();
        break $l$block;
      }
      var chainSize = tmp$ret$0.length;
      var tmp0_this = $this;
      tmp0_this._itemIndex = tmp0_this._itemIndex + 1 | 0;
      if (tmp0_this._itemIndex < chainSize)
        return 0;
      else {
      }
    }var tmp1_this = $this;
    tmp1_this._keyIndex = tmp1_this._keyIndex + 1 | 0;
    if (tmp1_this._keyIndex < $this._keys.length) {
      $this._chainOrEntry = $this._this$0_2._backingMap[$this._keys[$this._keyIndex]];
      var tmp = $this;
      var tmp_0 = $this._chainOrEntry;
      tmp._isChain = !(tmp_0 == null) ? isArray(tmp_0) : false;
      $this._itemIndex = 0;
      return 0;
    } else {
      {
        $this._chainOrEntry = null;
        return 1;
      }
    }
  }
  function getEntry($this, key) {
    var tmp0_elvis_lhs = getChainOrEntryOrNull($this, $this._equality_0.getHashCode_wi7j7l_k$(key));
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var chainOrEntry = tmp;
    if (!(!(chainOrEntry == null) ? isArray(chainOrEntry) : false)) {
      var entry = (!(chainOrEntry == null) ? isInterface(chainOrEntry, MutableEntry) : false) ? chainOrEntry : THROW_CCE();
      if ($this._equality_0.equals_rvz98i_k$(entry._get_key__0_k$(), key)) {
        return entry;
      } else {
        return null;
      }
    } else {
      {
        var chain = (!(chainOrEntry == null) ? isArray(chainOrEntry) : false) ? chainOrEntry : THROW_CCE();
        return findEntryInChain(chain, $this, key);
      }
    }
  }
  function findEntryInChain(_this_, $this, key) {
    var tmp$ret$1;
    $l$block_1: {
      var indexedObject = _this_;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element_2 = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = $this._equality_0.equals_rvz98i_k$(element_2._get_key__0_k$(), key);
          break $l$block;
        }
        if (tmp$ret$0) {
          tmp$ret$1 = element_2;
          break $l$block_1;
        } else {
        }
      }
      tmp$ret$1 = null;
      break $l$block_1;
    }
    return tmp$ret$1;
  }
  function getChainOrEntryOrNull($this, hashCode_1) {
    var chainOrEntry = $this._backingMap[hashCode_1];
    return chainOrEntry === undefined ? null : chainOrEntry;
  }
  function _no_name_provided__3(this$0) {
    this._this$0_2 = this$0;
    this._state = -1;
    var tmp = this;
    var tmp_0 = Object.keys(this._this$0_2._backingMap);
    tmp._keys = (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE();
    this._keyIndex = -1;
    this._chainOrEntry = null;
    this._isChain = false;
    this._itemIndex = -1;
    this._lastEntry = null;
  }
  _no_name_provided__3.prototype.hasNext_0_k$ = function () {
    if (this._state === -1)
      this._state = computeNext(this);
    return this._state === 0;
  };
  _no_name_provided__3.prototype.next_0_k$ = function () {
    if (!this.hasNext_0_k$())
      throw NoSuchElementException_init_$Create$();
    var tmp;
    if (this._isChain) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_unsafeCast_0 = this._chainOrEntry;
        tmp$ret$0 = (tmp0_unsafeCast_0 == null ? true : isObject(tmp0_unsafeCast_0)) ? tmp0_unsafeCast_0 : THROW_CCE();
        break $l$block;
      }
      tmp = tmp$ret$0[this._itemIndex];
    } else {
      var tmp$ret$1;
      $l$block_0: {
        var tmp1_unsafeCast_0 = this._chainOrEntry;
        tmp$ret$1 = (tmp1_unsafeCast_0 == null ? true : isObject(tmp1_unsafeCast_0)) ? tmp1_unsafeCast_0 : THROW_CCE();
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    }
    var lastEntry = tmp;
    this._lastEntry = lastEntry;
    this._state = -1;
    return lastEntry;
  };
  _no_name_provided__3.$metadata$ = {
    kind: 'class',
    interfaces: [MutableIterator]
  };
  function InternalHashCodeMap(equality) {
    this._equality_0 = equality;
    this._backingMap = this.createJsMap_0_k$();
    this._size = 0;
  }
  InternalHashCodeMap.prototype._get_equality__0_k$ = function () {
    return this._equality_0;
  };
  InternalHashCodeMap.prototype._get_size__0_k$ = function () {
    return this._size;
  };
  InternalHashCodeMap.prototype.put_1q9pf_k$ = function (key, value) {
    var hashCode_1 = this._equality_0.getHashCode_wi7j7l_k$(key);
    var chainOrEntry = getChainOrEntryOrNull(this, hashCode_1);
    if (chainOrEntry == null) {
      this._backingMap[hashCode_1] = new SimpleEntry(key, value);
    } else {
      if (!(!(chainOrEntry == null) ? isArray(chainOrEntry) : false)) {
        var entry = chainOrEntry instanceof SimpleEntry ? chainOrEntry : THROW_CCE();
        if (this._equality_0.equals_rvz98i_k$(entry._get_key__0_k$(), key)) {
          return entry.setValue_2c7_k$(value);
        } else {
          var tmp$ret$2;
          $l$block_1: {
            var tmp0_arrayOf_0 = [entry, new SimpleEntry(key, value)];
            var tmp$ret$1;
            $l$block_0: {
              var tmp$ret$0;
              $l$block: {
                tmp$ret$0 = tmp0_arrayOf_0;
                break $l$block;
              }
              var tmp = tmp$ret$0;
              tmp$ret$1 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
              break $l$block_0;
            }
            tmp$ret$2 = tmp$ret$1;
            break $l$block_1;
          }
          this._backingMap[hashCode_1] = tmp$ret$2;
          var tmp0_this = this;
          var tmp1 = tmp0_this._size;
          tmp0_this._size = tmp1 + 1 | 0;
          Unit_getInstance();
          return null;
        }
      } else {
        {
          var chain = (!(chainOrEntry == null) ? isArray(chainOrEntry) : false) ? chainOrEntry : THROW_CCE();
          var entry_0 = findEntryInChain(chain, this, key);
          if (!(entry_0 == null)) {
            return entry_0.setValue_2c7_k$(value);
          }var tmp$ret$3;
          $l$block_2: {
            tmp$ret$3 = chain;
            break $l$block_2;
          }
          tmp$ret$3.push(new SimpleEntry(key, value));
        }
      }
    }
    var tmp2_this = this;
    var tmp3 = tmp2_this._size;
    tmp2_this._size = tmp3 + 1 | 0;
    Unit_getInstance();
    return null;
  };
  InternalHashCodeMap.prototype.contains_2bw_k$ = function (key) {
    return !(getEntry(this, key) == null);
  };
  InternalHashCodeMap.prototype.get_2bw_k$ = function (key) {
    var tmp0_safe_receiver = getEntry(this, key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_value__0_k$();
  };
  InternalHashCodeMap.prototype.iterator_0_k$ = function () {
    return new _no_name_provided__3(this);
  };
  InternalHashCodeMap.$metadata$ = {
    simpleName: 'InternalHashCodeMap',
    kind: 'class',
    interfaces: [InternalMap]
  };
  function InternalMap() {
  }
  InternalMap.prototype.createJsMap_0_k$ = function () {
    var result = Object.create(null);
    result['foo'] = 1;
    jsDeleteProperty(isObject(result) ? result : THROW_CCE(), 'foo');
    return result;
  };
  InternalMap.$metadata$ = {
    simpleName: 'InternalMap',
    kind: 'interface',
    interfaces: [MutableIterable]
  };
  function EntryIterator($outer) {
    this._$this_1 = $outer;
    this._last_0 = null;
    this._next_0 = null;
    this._next_0 = this._$this_1._$this_3._head;
  }
  EntryIterator.prototype.hasNext_0_k$ = function () {
    return !(this._next_0 === null);
  };
  EntryIterator.prototype.next_0_k$ = function () {
    if (!this.hasNext_0_k$())
      throw NoSuchElementException_init_$Create$();
    var current = ensureNotNull(this._next_0);
    this._last_0 = current;
    var tmp = this;
    var tmp$ret$1;
    $l$block_0: {
      var tmp_0 = current._next_1;
      var tmp0_takeIf_0 = (tmp_0 == null ? true : tmp_0 instanceof ChainEntry) ? tmp_0 : THROW_CCE();
      {
      }
      var tmp_1;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = !(tmp0_takeIf_0 === this._$this_1._$this_3._head);
        break $l$block;
      }
      if (tmp$ret$0) {
        tmp_1 = tmp0_takeIf_0;
      } else {
        {
          tmp_1 = null;
        }
      }
      tmp$ret$1 = tmp_1;
      break $l$block_0;
    }
    tmp._next_0 = tmp$ret$1;
    return current;
  };
  EntryIterator.$metadata$ = {
    simpleName: 'EntryIterator',
    kind: 'class',
    interfaces: [MutableIterator]
  };
  function ChainEntry($outer, key, value) {
    this._$this_2 = $outer;
    SimpleEntry.call(this, key, value);
    this._next_1 = null;
    this._prev = null;
  }
  ChainEntry.prototype.setValue_2c7_k$ = function (newValue) {
    this._$this_2.checkIsMutable_sv8swh_k$();
    return SimpleEntry.prototype.setValue_2c7_k$.call(this, newValue);
  };
  ChainEntry.$metadata$ = {
    simpleName: 'ChainEntry',
    kind: 'class',
    interfaces: []
  };
  function EntrySet_0($outer) {
    this._$this_3 = $outer;
    AbstractEntrySet.call(this);
  }
  EntrySet_0.prototype.add_qbahou_k$ = function (element) {
    throw UnsupportedOperationException_init_$Create$_0('Add is not supported on entries');
  };
  EntrySet_0.prototype.add_2bq_k$ = function (element) {
    return this.add_qbahou_k$((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  EntrySet_0.prototype.containsEntry_4v0zae_k$ = function (element) {
    return this._$this_3.containsEntry_7gsh9e_k$(element);
  };
  EntrySet_0.prototype.iterator_0_k$ = function () {
    return new EntryIterator(this);
  };
  EntrySet_0.prototype._get_size__0_k$ = function () {
    return this._$this_3._get_size__0_k$();
  };
  EntrySet_0.$metadata$ = {
    simpleName: 'EntrySet',
    kind: 'class',
    interfaces: []
  };
  function addToEnd(_this_, $this) {
    {
      var tmp;
      var tmp_0 = _this_._next_1;
      if (((tmp_0 == null ? true : tmp_0 instanceof ChainEntry) ? tmp_0 : THROW_CCE()) == null) {
        var tmp_1 = _this_._prev;
        tmp = ((tmp_1 == null ? true : tmp_1 instanceof ChainEntry) ? tmp_1 : THROW_CCE()) == null;
      } else {
        {
          tmp = false;
        }
      }
      var tmp0_check_0 = tmp;
      {
      }
      {
        {
        }
        if (!tmp0_check_0) {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = 'Check failed.';
            break $l$block;
          }
          var message_2_1 = tmp$ret$0;
          throw IllegalStateException_init_$Create$(toString_1(message_2_1));
        }}
    }
    var _head = $this._head;
    if (_head == null) {
      $this._head = _this_;
      _this_._next_1 = _this_;
      _this_._prev = _this_;
    } else {
      var tmp$ret$3;
      $l$block_2: {
        var tmp_2 = _head._prev;
        var tmp1_checkNotNull_0 = (tmp_2 == null ? true : tmp_2 instanceof ChainEntry) ? tmp_2 : THROW_CCE();
        {
        }
        var tmp$ret$2;
        $l$block_1: {
          {
          }
          if (tmp1_checkNotNull_0 == null) {
            var tmp$ret$1;
            $l$block_0: {
              tmp$ret$1 = 'Required value was null.';
              break $l$block_0;
            }
            var message_2_1_0 = tmp$ret$1;
            throw IllegalStateException_init_$Create$(toString_1(message_2_1_0));
          } else {
            tmp$ret$2 = tmp1_checkNotNull_0;
            break $l$block_1;
          }
        }
        tmp$ret$3 = tmp$ret$2;
        break $l$block_2;
      }
      var _tail = tmp$ret$3;
      _this_._prev = _tail;
      _this_._next_1 = _head;
      _head._prev = _this_;
      _tail._next_1 = _this_;
    }
  }
  function LinkedHashMap_init_$Init$($this) {
    HashMap_init_$Init$_0($this);
    LinkedHashMap.call($this);
    $this._map_0 = HashMap_init_$Create$();
    return $this;
  }
  function LinkedHashMap_init_$Create$() {
    return LinkedHashMap_init_$Init$(Object.create(LinkedHashMap.prototype));
  }
  LinkedHashMap.prototype.containsKey_2bw_k$ = function (key) {
    return this._map_0.containsKey_2bw_k$(key);
  };
  LinkedHashMap.prototype.createEntrySet_0_k$ = function () {
    return new EntrySet_0(this);
  };
  LinkedHashMap.prototype.get_2bw_k$ = function (key) {
    var tmp0_safe_receiver = this._map_0.get_2bw_k$(key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_value__0_k$();
  };
  LinkedHashMap.prototype.put_1q9pf_k$ = function (key, value) {
    this.checkIsMutable_sv8swh_k$();
    var old = this._map_0.get_2bw_k$(key);
    if (old == null) {
      var newEntry = new ChainEntry(this, key, value);
      this._map_0.put_1q9pf_k$(key, newEntry);
      Unit_getInstance();
      addToEnd(newEntry, this);
      return null;
    } else {
      return old.setValue_2c7_k$(value);
    }
  };
  LinkedHashMap.prototype._get_size__0_k$ = function () {
    return this._map_0._get_size__0_k$();
  };
  LinkedHashMap.prototype.checkIsMutable_sv8swh_k$ = function () {
    if (this._isReadOnly_0)
      throw UnsupportedOperationException_init_$Create$();
  };
  function LinkedHashMap() {
    this._head = null;
    this._isReadOnly_0 = false;
  }
  LinkedHashMap.$metadata$ = {
    simpleName: 'LinkedHashMap',
    kind: 'class',
    interfaces: [MutableMap]
  };
  function RandomAccess() {
  }
  RandomAccess.$metadata$ = {
    simpleName: 'RandomAccess',
    kind: 'interface',
    interfaces: []
  };
  function _get_output_() {
    init_properties_console_kt();
    return output;
  }
  var output;
  function BaseOutput() {
  }
  BaseOutput.prototype.println_sv8swh_k$ = function () {
    this.print_qi8yb4_k$('\n');
  };
  BaseOutput.prototype.println_qi8yb4_k$ = function (message) {
    this.print_qi8yb4_k$(message);
    this.println_sv8swh_k$();
  };
  BaseOutput.$metadata$ = {
    simpleName: 'BaseOutput',
    kind: 'class',
    interfaces: []
  };
  function NodeJsOutput_0(outputStream) {
    BaseOutput.call(this);
    this._outputStream = outputStream;
  }
  NodeJsOutput_0.prototype.print_qi8yb4_k$ = function (message) {
    var tmp$ret$0;
    $l$block: {
      var tmp = String(message);
      tmp$ret$0 = (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
      break $l$block;
    }
    var messageString = tmp$ret$0;
    this._outputStream.write(messageString);
  };
  NodeJsOutput_0.$metadata$ = {
    simpleName: 'NodeJsOutput',
    kind: 'class',
    interfaces: []
  };
  function BufferedOutputToConsoleLog_0() {
    BufferedOutput_0.call(this);
  }
  BufferedOutputToConsoleLog_0.prototype.print_qi8yb4_k$ = function (message) {
    var tmp$ret$0;
    $l$block: {
      var tmp = String(message);
      tmp$ret$0 = (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
      break $l$block;
    }
    var s = tmp$ret$0;
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_nativeLastIndexOf_0 = s;
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = tmp0_nativeLastIndexOf_0;
        break $l$block_0;
      }
      var tmp_0 = tmp$ret$1.lastIndexOf('\n', 0);
      tmp$ret$2 = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
      break $l$block_1;
    }
    var i = tmp$ret$2;
    if (i >= 0) {
      var tmp0_this = this;
      var tmp_1 = tmp0_this._get_buffer__0_k$();
      var tmp$ret$4;
      $l$block_3: {
        var tmp1_substring_0 = s;
        var tmp$ret$3;
        $l$block_2: {
          tmp$ret$3 = tmp1_substring_0;
          break $l$block_2;
        }
        var tmp_2 = tmp$ret$3.substring(0, i);
        tmp$ret$4 = (!(tmp_2 == null) ? typeof tmp_2 === 'string' : false) ? tmp_2 : THROW_CCE();
        break $l$block_3;
      }
      tmp0_this._set_buffer__a4enbm_k$(tmp_1 + tmp$ret$4);
      this.flush_sv8swh_k$();
      var tmp$ret$6;
      $l$block_5: {
        var tmp2_substring_0 = s;
        var tmp3_substring_0 = i + 1 | 0;
        var tmp$ret$5;
        $l$block_4: {
          tmp$ret$5 = tmp2_substring_0;
          break $l$block_4;
        }
        var tmp_3 = tmp$ret$5.substring(tmp3_substring_0);
        tmp$ret$6 = (!(tmp_3 == null) ? typeof tmp_3 === 'string' : false) ? tmp_3 : THROW_CCE();
        break $l$block_5;
      }
      s = tmp$ret$6;
    }var tmp1_this = this;
    tmp1_this._set_buffer__a4enbm_k$(tmp1_this._get_buffer__0_k$() + s);
  };
  BufferedOutputToConsoleLog_0.prototype.flush_sv8swh_k$ = function () {
    console.log(this._get_buffer__0_k$());
    this._set_buffer__a4enbm_k$('');
  };
  BufferedOutputToConsoleLog_0.$metadata$ = {
    simpleName: 'BufferedOutputToConsoleLog',
    kind: 'class',
    interfaces: []
  };
  function BufferedOutput_0() {
    BaseOutput.call(this);
    this._buffer = '';
  }
  BufferedOutput_0.prototype._set_buffer__a4enbm_k$ = function (_set___) {
    this._buffer = _set___;
  };
  BufferedOutput_0.prototype._get_buffer__0_k$ = function () {
    return this._buffer;
  };
  BufferedOutput_0.prototype.print_qi8yb4_k$ = function (message) {
    var tmp0_this = this;
    var tmp = tmp0_this;
    var tmp_0 = tmp0_this._buffer;
    var tmp$ret$0;
    $l$block: {
      var tmp_1 = String(message);
      tmp$ret$0 = (!(tmp_1 == null) ? typeof tmp_1 === 'string' : false) ? tmp_1 : THROW_CCE();
      break $l$block;
    }
    tmp._buffer = tmp_0 + tmp$ret$0;
  };
  BufferedOutput_0.$metadata$ = {
    simpleName: 'BufferedOutput',
    kind: 'class',
    interfaces: []
  };
  function println(message) {
    init_properties_console_kt();
    _get_output_().println_qi8yb4_k$(message);
  }
  var properties_initialized_console_kt;
  function init_properties_console_kt() {
    if (!properties_initialized_console_kt) {
      properties_initialized_console_kt = true;
      var tmp$ret$1;
      $l$block_0: {
        {
        }
        var tmp$ret$0;
        $l$block: {
          var tmp = typeof process !== 'undefined' && process.versions && !!process.versions.node;
          var isNode_2 = (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE();
          tmp$ret$0 = isNode_2 ? new NodeJsOutput_0(process.stdout) : new BufferedOutputToConsoleLog_0();
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      output = tmp$ret$1;
    }}
  function CancellationException_init_$Init$(message, $this) {
    IllegalStateException_init_$Init$(message, $this);
    CancellationException.call($this);
    return $this;
  }
  function CancellationException_init_$Create$(message) {
    var tmp = CancellationException_init_$Init$(message, Object.create(CancellationException.prototype));
    captureStack(tmp, CancellationException_init_$Create$);
    return tmp;
  }
  function CancellationException_init_$Init$_0(message, cause, $this) {
    IllegalStateException_init_$Init$_0(message, cause, $this);
    CancellationException.call($this);
    return $this;
  }
  function CancellationException() {
    captureStack(this, CancellationException);
  }
  CancellationException.$metadata$ = {
    simpleName: 'CancellationException',
    kind: 'class',
    interfaces: []
  };
  function Serializable() {
  }
  Serializable.$metadata$ = {
    simpleName: 'Serializable',
    kind: 'interface',
    interfaces: []
  };
  function isNaN_0(_this_) {
    return !(_this_ === _this_);
  }
  function _get_js_(_this_) {
    return (_this_ instanceof KClassImpl ? _this_ : THROW_CCE())._get_jClass__0_k$();
  }
  function KClass() {
  }
  KClass.$metadata$ = {
    simpleName: 'KClass',
    kind: 'interface',
    interfaces: [KClassifier]
  };
  function KClassImpl(jClass) {
    this._jClass = jClass;
  }
  KClassImpl.prototype._get_jClass__0_k$ = function () {
    return this._jClass;
  };
  KClassImpl.prototype.equals = function (other) {
    var tmp;
    if (other instanceof KClassImpl) {
      var tmp_0 = this._get_jClass__0_k$();
      tmp = equals(tmp_0, (other instanceof KClassImpl ? other : THROW_CCE())._get_jClass__0_k$());
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  KClassImpl.prototype.hashCode = function () {
    var tmp0_safe_receiver = this._get_simpleName__0_k$();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : getStringHashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  KClassImpl.prototype.toString = function () {
    return '' + 'class ' + this._get_simpleName__0_k$();
  };
  KClassImpl.$metadata$ = {
    simpleName: 'KClassImpl',
    kind: 'class',
    interfaces: [KClass]
  };
  function PrimitiveKClassImpl(jClass, givenSimpleName, isInstanceFunction) {
    KClassImpl.call(this, jClass);
    this._givenSimpleName = givenSimpleName;
    this._isInstanceFunction = isInstanceFunction;
  }
  PrimitiveKClassImpl.prototype.equals = function (other) {
    if (!(other instanceof PrimitiveKClassImpl))
      return false;
    else {
    }
    var tmp;
    if (KClassImpl.prototype.equals.call(this, other)) {
      tmp = this._givenSimpleName === (other instanceof PrimitiveKClassImpl ? other : THROW_CCE())._givenSimpleName;
    } else {
      tmp = false;
    }
    return tmp;
  };
  PrimitiveKClassImpl.prototype._get_simpleName__0_k$ = function () {
    return this._givenSimpleName;
  };
  PrimitiveKClassImpl.$metadata$ = {
    simpleName: 'PrimitiveKClassImpl',
    kind: 'class',
    interfaces: []
  };
  function NothingKClassImpl() {
    NothingKClassImpl_instance = this;
    var tmp = Object;
    KClassImpl.call(this, (!(tmp == null) ? isObject(tmp) : false) ? tmp : THROW_CCE());
    this._simpleName = 'Nothing';
  }
  NothingKClassImpl.prototype._get_simpleName__0_k$ = function () {
    return this._simpleName;
  };
  NothingKClassImpl.prototype._get_jClass__0_k$ = function () {
    throw UnsupportedOperationException_init_$Create$_0("There's no native JS class for Nothing type");
  };
  NothingKClassImpl.prototype.equals = function (other) {
    return other === this;
  };
  NothingKClassImpl.prototype.hashCode = function () {
    return 0;
  };
  NothingKClassImpl.$metadata$ = {
    simpleName: 'NothingKClassImpl',
    kind: 'object',
    interfaces: []
  };
  var NothingKClassImpl_instance;
  function NothingKClassImpl_getInstance() {
    if (NothingKClassImpl_instance == null)
      new NothingKClassImpl();
    return NothingKClassImpl_instance;
  }
  function ErrorKClass() {
  }
  ErrorKClass.prototype._get_simpleName__0_k$ = function () {
    {
      throw IllegalStateException_init_$Create$('Unknown simpleName for ErrorKClass');
    }
  };
  ErrorKClass.prototype.equals = function (other) {
    return other === this;
  };
  ErrorKClass.prototype.hashCode = function () {
    return 0;
  };
  ErrorKClass.$metadata$ = {
    simpleName: 'ErrorKClass',
    kind: 'class',
    interfaces: [KClass]
  };
  function SimpleKClassImpl(jClass) {
    KClassImpl.call(this, jClass);
    var tmp = this;
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = jClass;
        break $l$block;
      }
      var tmp0_safe_receiver = tmp$ret$0.$metadata$;
      var tmp0_unsafeCast_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.simpleName;
      tmp$ret$1 = (tmp0_unsafeCast_0 == null ? true : isObject(tmp0_unsafeCast_0)) ? tmp0_unsafeCast_0 : THROW_CCE();
      break $l$block_0;
    }
    tmp._simpleName_0 = tmp$ret$1;
  }
  SimpleKClassImpl.prototype._get_simpleName__0_k$ = function () {
    return this._simpleName_0;
  };
  SimpleKClassImpl.$metadata$ = {
    simpleName: 'SimpleKClassImpl',
    kind: 'class',
    interfaces: []
  };
  function _get_functionClasses_() {
    init_properties_primitives_kt();
    return functionClasses;
  }
  var functionClasses;
  function _no_name_provided__4() {
  }
  _no_name_provided__4.prototype.invoke_wi7j7l_k$ = function (it) {
    return isObject(it);
  };
  _no_name_provided__4.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__4.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__5() {
  }
  _no_name_provided__5.prototype.invoke_wi7j7l_k$ = function (it) {
    return isNumber(it);
  };
  _no_name_provided__5.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__5.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__6() {
  }
  _no_name_provided__6.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? typeof it === 'boolean' : false;
  };
  _no_name_provided__6.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__6.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__7() {
  }
  _no_name_provided__7.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__7.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__7.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__8() {
  }
  _no_name_provided__8.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__8.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__8.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__9() {
  }
  _no_name_provided__9.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__9.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__9.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__10() {
  }
  _no_name_provided__10.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__10.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__10.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__11() {
  }
  _no_name_provided__11.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__11.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__11.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__12() {
  }
  _no_name_provided__12.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isArray(it) : false;
  };
  _no_name_provided__12.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__12.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__13() {
  }
  _no_name_provided__13.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? typeof it === 'string' : false;
  };
  _no_name_provided__13.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__13.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__14() {
  }
  _no_name_provided__14.prototype.invoke_wi7j7l_k$ = function (it) {
    return it instanceof Error;
  };
  _no_name_provided__14.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__14.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__15() {
  }
  _no_name_provided__15.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isBooleanArray(it) : false;
  };
  _no_name_provided__15.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__15.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__16() {
  }
  _no_name_provided__16.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isCharArray(it) : false;
  };
  _no_name_provided__16.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__16.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__17() {
  }
  _no_name_provided__17.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isByteArray(it) : false;
  };
  _no_name_provided__17.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__17.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__18() {
  }
  _no_name_provided__18.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isShortArray(it) : false;
  };
  _no_name_provided__18.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__18.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__19() {
  }
  _no_name_provided__19.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isIntArray(it) : false;
  };
  _no_name_provided__19.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__19.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__20() {
  }
  _no_name_provided__20.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isLongArray(it) : false;
  };
  _no_name_provided__20.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__20.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__21() {
  }
  _no_name_provided__21.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isFloatArray(it) : false;
  };
  _no_name_provided__21.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__21.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__22() {
  }
  _no_name_provided__22.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isDoubleArray(it) : false;
  };
  _no_name_provided__22.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__22.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__23($arity) {
    this._$arity = $arity;
  }
  _no_name_provided__23.prototype.invoke_wi7j7l_k$ = function (it) {
    var tmp;
    if (typeof it === 'function') {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = it;
        break $l$block;
      }
      tmp = tmp$ret$0.length === this._$arity;
    } else {
      tmp = false;
    }
    return tmp;
  };
  _no_name_provided__23.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__23.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function PrimitiveClasses_0() {
    PrimitiveClasses_instance = this;
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = Object;
      tmp$ret$0 = (tmp0_unsafeCast_0 == null ? true : isObject(tmp0_unsafeCast_0)) ? tmp0_unsafeCast_0 : THROW_CCE();
      break $l$block;
    }
    var tmp_0 = tmp$ret$0;
    tmp._anyClass = new PrimitiveKClassImpl(tmp_0, 'Any', _no_name_provided_$factory_1());
    var tmp_1 = this;
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_unsafeCast_0_0 = Number;
      tmp$ret$1 = (tmp0_unsafeCast_0_0 == null ? true : isObject(tmp0_unsafeCast_0_0)) ? tmp0_unsafeCast_0_0 : THROW_CCE();
      break $l$block_0;
    }
    var tmp_2 = tmp$ret$1;
    tmp_1._numberClass = new PrimitiveKClassImpl(tmp_2, 'Number', _no_name_provided_$factory_2());
    this._nothingClass = NothingKClassImpl_getInstance();
    var tmp_3 = this;
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_unsafeCast_0_1 = Boolean;
      tmp$ret$2 = (tmp0_unsafeCast_0_1 == null ? true : isObject(tmp0_unsafeCast_0_1)) ? tmp0_unsafeCast_0_1 : THROW_CCE();
      break $l$block_1;
    }
    var tmp_4 = tmp$ret$2;
    tmp_3._booleanClass = new PrimitiveKClassImpl(tmp_4, 'Boolean', _no_name_provided_$factory_3());
    var tmp_5 = this;
    var tmp$ret$3;
    $l$block_2: {
      var tmp0_unsafeCast_0_2 = Number;
      tmp$ret$3 = (tmp0_unsafeCast_0_2 == null ? true : isObject(tmp0_unsafeCast_0_2)) ? tmp0_unsafeCast_0_2 : THROW_CCE();
      break $l$block_2;
    }
    var tmp_6 = tmp$ret$3;
    tmp_5._byteClass = new PrimitiveKClassImpl(tmp_6, 'Byte', _no_name_provided_$factory_4());
    var tmp_7 = this;
    var tmp$ret$4;
    $l$block_3: {
      var tmp0_unsafeCast_0_3 = Number;
      tmp$ret$4 = (tmp0_unsafeCast_0_3 == null ? true : isObject(tmp0_unsafeCast_0_3)) ? tmp0_unsafeCast_0_3 : THROW_CCE();
      break $l$block_3;
    }
    var tmp_8 = tmp$ret$4;
    tmp_7._shortClass = new PrimitiveKClassImpl(tmp_8, 'Short', _no_name_provided_$factory_5());
    var tmp_9 = this;
    var tmp$ret$5;
    $l$block_4: {
      var tmp0_unsafeCast_0_4 = Number;
      tmp$ret$5 = (tmp0_unsafeCast_0_4 == null ? true : isObject(tmp0_unsafeCast_0_4)) ? tmp0_unsafeCast_0_4 : THROW_CCE();
      break $l$block_4;
    }
    var tmp_10 = tmp$ret$5;
    tmp_9._intClass = new PrimitiveKClassImpl(tmp_10, 'Int', _no_name_provided_$factory_6());
    var tmp_11 = this;
    var tmp$ret$6;
    $l$block_5: {
      var tmp0_unsafeCast_0_5 = Number;
      tmp$ret$6 = (tmp0_unsafeCast_0_5 == null ? true : isObject(tmp0_unsafeCast_0_5)) ? tmp0_unsafeCast_0_5 : THROW_CCE();
      break $l$block_5;
    }
    var tmp_12 = tmp$ret$6;
    tmp_11._floatClass = new PrimitiveKClassImpl(tmp_12, 'Float', _no_name_provided_$factory_7());
    var tmp_13 = this;
    var tmp$ret$7;
    $l$block_6: {
      var tmp0_unsafeCast_0_6 = Number;
      tmp$ret$7 = (tmp0_unsafeCast_0_6 == null ? true : isObject(tmp0_unsafeCast_0_6)) ? tmp0_unsafeCast_0_6 : THROW_CCE();
      break $l$block_6;
    }
    var tmp_14 = tmp$ret$7;
    tmp_13._doubleClass = new PrimitiveKClassImpl(tmp_14, 'Double', _no_name_provided_$factory_8());
    var tmp_15 = this;
    var tmp$ret$8;
    $l$block_7: {
      var tmp0_unsafeCast_0_7 = Array;
      tmp$ret$8 = (tmp0_unsafeCast_0_7 == null ? true : isObject(tmp0_unsafeCast_0_7)) ? tmp0_unsafeCast_0_7 : THROW_CCE();
      break $l$block_7;
    }
    var tmp_16 = tmp$ret$8;
    tmp_15._arrayClass = new PrimitiveKClassImpl(tmp_16, 'Array', _no_name_provided_$factory_9());
    var tmp_17 = this;
    var tmp$ret$9;
    $l$block_8: {
      var tmp0_unsafeCast_0_8 = String;
      tmp$ret$9 = (tmp0_unsafeCast_0_8 == null ? true : isObject(tmp0_unsafeCast_0_8)) ? tmp0_unsafeCast_0_8 : THROW_CCE();
      break $l$block_8;
    }
    var tmp_18 = tmp$ret$9;
    tmp_17._stringClass = new PrimitiveKClassImpl(tmp_18, 'String', _no_name_provided_$factory_10());
    var tmp_19 = this;
    var tmp$ret$10;
    $l$block_9: {
      var tmp0_unsafeCast_0_9 = Error;
      tmp$ret$10 = (tmp0_unsafeCast_0_9 == null ? true : isObject(tmp0_unsafeCast_0_9)) ? tmp0_unsafeCast_0_9 : THROW_CCE();
      break $l$block_9;
    }
    var tmp_20 = tmp$ret$10;
    tmp_19._throwableClass = new PrimitiveKClassImpl(tmp_20, 'Throwable', _no_name_provided_$factory_11());
    var tmp_21 = this;
    var tmp$ret$11;
    $l$block_10: {
      var tmp0_unsafeCast_0_10 = Array;
      tmp$ret$11 = (tmp0_unsafeCast_0_10 == null ? true : isObject(tmp0_unsafeCast_0_10)) ? tmp0_unsafeCast_0_10 : THROW_CCE();
      break $l$block_10;
    }
    var tmp_22 = tmp$ret$11;
    tmp_21._booleanArrayClass = new PrimitiveKClassImpl(tmp_22, 'BooleanArray', _no_name_provided_$factory_12());
    var tmp_23 = this;
    var tmp$ret$12;
    $l$block_11: {
      var tmp0_unsafeCast_0_11 = Uint16Array;
      tmp$ret$12 = (tmp0_unsafeCast_0_11 == null ? true : isObject(tmp0_unsafeCast_0_11)) ? tmp0_unsafeCast_0_11 : THROW_CCE();
      break $l$block_11;
    }
    var tmp_24 = tmp$ret$12;
    tmp_23._charArrayClass = new PrimitiveKClassImpl(tmp_24, 'CharArray', _no_name_provided_$factory_13());
    var tmp_25 = this;
    var tmp$ret$13;
    $l$block_12: {
      var tmp0_unsafeCast_0_12 = Int8Array;
      tmp$ret$13 = (tmp0_unsafeCast_0_12 == null ? true : isObject(tmp0_unsafeCast_0_12)) ? tmp0_unsafeCast_0_12 : THROW_CCE();
      break $l$block_12;
    }
    var tmp_26 = tmp$ret$13;
    tmp_25._byteArrayClass = new PrimitiveKClassImpl(tmp_26, 'ByteArray', _no_name_provided_$factory_14());
    var tmp_27 = this;
    var tmp$ret$14;
    $l$block_13: {
      var tmp0_unsafeCast_0_13 = Int16Array;
      tmp$ret$14 = (tmp0_unsafeCast_0_13 == null ? true : isObject(tmp0_unsafeCast_0_13)) ? tmp0_unsafeCast_0_13 : THROW_CCE();
      break $l$block_13;
    }
    var tmp_28 = tmp$ret$14;
    tmp_27._shortArrayClass = new PrimitiveKClassImpl(tmp_28, 'ShortArray', _no_name_provided_$factory_15());
    var tmp_29 = this;
    var tmp$ret$15;
    $l$block_14: {
      var tmp0_unsafeCast_0_14 = Int32Array;
      tmp$ret$15 = (tmp0_unsafeCast_0_14 == null ? true : isObject(tmp0_unsafeCast_0_14)) ? tmp0_unsafeCast_0_14 : THROW_CCE();
      break $l$block_14;
    }
    var tmp_30 = tmp$ret$15;
    tmp_29._intArrayClass = new PrimitiveKClassImpl(tmp_30, 'IntArray', _no_name_provided_$factory_16());
    var tmp_31 = this;
    var tmp$ret$16;
    $l$block_15: {
      var tmp0_unsafeCast_0_15 = Array;
      tmp$ret$16 = (tmp0_unsafeCast_0_15 == null ? true : isObject(tmp0_unsafeCast_0_15)) ? tmp0_unsafeCast_0_15 : THROW_CCE();
      break $l$block_15;
    }
    var tmp_32 = tmp$ret$16;
    tmp_31._longArrayClass = new PrimitiveKClassImpl(tmp_32, 'LongArray', _no_name_provided_$factory_17());
    var tmp_33 = this;
    var tmp$ret$17;
    $l$block_16: {
      var tmp0_unsafeCast_0_16 = Float32Array;
      tmp$ret$17 = (tmp0_unsafeCast_0_16 == null ? true : isObject(tmp0_unsafeCast_0_16)) ? tmp0_unsafeCast_0_16 : THROW_CCE();
      break $l$block_16;
    }
    var tmp_34 = tmp$ret$17;
    tmp_33._floatArrayClass = new PrimitiveKClassImpl(tmp_34, 'FloatArray', _no_name_provided_$factory_18());
    var tmp_35 = this;
    var tmp$ret$18;
    $l$block_17: {
      var tmp0_unsafeCast_0_17 = Float64Array;
      tmp$ret$18 = (tmp0_unsafeCast_0_17 == null ? true : isObject(tmp0_unsafeCast_0_17)) ? tmp0_unsafeCast_0_17 : THROW_CCE();
      break $l$block_17;
    }
    var tmp_36 = tmp$ret$18;
    tmp_35._doubleArrayClass = new PrimitiveKClassImpl(tmp_36, 'DoubleArray', _no_name_provided_$factory_19());
  }
  PrimitiveClasses_0.prototype._get_anyClass__0_k$ = function () {
    return this._anyClass;
  };
  PrimitiveClasses_0.prototype._get_numberClass__0_k$ = function () {
    return this._numberClass;
  };
  PrimitiveClasses_0.prototype._get_nothingClass__0_k$ = function () {
    return this._nothingClass;
  };
  PrimitiveClasses_0.prototype._get_booleanClass__0_k$ = function () {
    return this._booleanClass;
  };
  PrimitiveClasses_0.prototype._get_byteClass__0_k$ = function () {
    return this._byteClass;
  };
  PrimitiveClasses_0.prototype._get_shortClass__0_k$ = function () {
    return this._shortClass;
  };
  PrimitiveClasses_0.prototype._get_intClass__0_k$ = function () {
    return this._intClass;
  };
  PrimitiveClasses_0.prototype._get_floatClass__0_k$ = function () {
    return this._floatClass;
  };
  PrimitiveClasses_0.prototype._get_doubleClass__0_k$ = function () {
    return this._doubleClass;
  };
  PrimitiveClasses_0.prototype._get_arrayClass__0_k$ = function () {
    return this._arrayClass;
  };
  PrimitiveClasses_0.prototype._get_stringClass__0_k$ = function () {
    return this._stringClass;
  };
  PrimitiveClasses_0.prototype._get_throwableClass__0_k$ = function () {
    return this._throwableClass;
  };
  PrimitiveClasses_0.prototype._get_booleanArrayClass__0_k$ = function () {
    return this._booleanArrayClass;
  };
  PrimitiveClasses_0.prototype._get_charArrayClass__0_k$ = function () {
    return this._charArrayClass;
  };
  PrimitiveClasses_0.prototype._get_byteArrayClass__0_k$ = function () {
    return this._byteArrayClass;
  };
  PrimitiveClasses_0.prototype._get_shortArrayClass__0_k$ = function () {
    return this._shortArrayClass;
  };
  PrimitiveClasses_0.prototype._get_intArrayClass__0_k$ = function () {
    return this._intArrayClass;
  };
  PrimitiveClasses_0.prototype._get_longArrayClass__0_k$ = function () {
    return this._longArrayClass;
  };
  PrimitiveClasses_0.prototype._get_floatArrayClass__0_k$ = function () {
    return this._floatArrayClass;
  };
  PrimitiveClasses_0.prototype._get_doubleArrayClass__0_k$ = function () {
    return this._doubleArrayClass;
  };
  PrimitiveClasses_0.prototype.functionClass = function (arity) {
    var tmp0_elvis_lhs = _get_functionClasses_()[arity];
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$3;
      $l$block_2: {
        {
        }
        var tmp$ret$2;
        $l$block_1: {
          var tmp$ret$0;
          $l$block: {
            var tmp0_unsafeCast_0_3 = Function;
            tmp$ret$0 = (tmp0_unsafeCast_0_3 == null ? true : isObject(tmp0_unsafeCast_0_3)) ? tmp0_unsafeCast_0_3 : THROW_CCE();
            break $l$block;
          }
          var tmp_0 = tmp$ret$0;
          var tmp_1 = '' + 'Function' + arity;
          var result_2 = new PrimitiveKClassImpl(tmp_0, tmp_1, _no_name_provided_$factory_20(arity));
          var tmp$ret$1;
          $l$block_0: {
            var tmp1_asDynamic_0_5 = _get_functionClasses_();
            tmp$ret$1 = tmp1_asDynamic_0_5;
            break $l$block_0;
          }
          tmp$ret$1[arity] = result_2;
          tmp$ret$2 = result_2;
          break $l$block_1;
        }
        tmp$ret$3 = tmp$ret$2;
        break $l$block_2;
      }
      tmp = tmp$ret$3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  PrimitiveClasses_0.$metadata$ = {
    simpleName: 'PrimitiveClasses',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(PrimitiveClasses_0.prototype, 'anyClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_anyClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'numberClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_numberClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'nothingClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_nothingClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'booleanClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_booleanClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'byteClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_byteClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'shortClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_shortClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'intClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_intClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'floatClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_floatClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'doubleClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_doubleClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'arrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_arrayClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'stringClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_stringClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'throwableClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_throwableClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'booleanArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_booleanArrayClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'charArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_charArrayClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'byteArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_byteArrayClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'shortArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_shortArrayClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'intArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_intArrayClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'longArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_longArrayClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'floatArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_floatArrayClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'doubleArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_doubleArrayClass__0_k$
  });
  var PrimitiveClasses_instance;
  function PrimitiveClasses_getInstance() {
    if (PrimitiveClasses_instance == null)
      new PrimitiveClasses_0();
    return PrimitiveClasses_instance;
  }
  function _no_name_provided_$factory_1() {
    var i = new _no_name_provided__4();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_2() {
    var i = new _no_name_provided__5();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_3() {
    var i = new _no_name_provided__6();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_4() {
    var i = new _no_name_provided__7();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_5() {
    var i = new _no_name_provided__8();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_6() {
    var i = new _no_name_provided__9();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_7() {
    var i = new _no_name_provided__10();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_8() {
    var i = new _no_name_provided__11();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_9() {
    var i = new _no_name_provided__12();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_10() {
    var i = new _no_name_provided__13();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_11() {
    var i = new _no_name_provided__14();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_12() {
    var i = new _no_name_provided__15();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_13() {
    var i = new _no_name_provided__16();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_14() {
    var i = new _no_name_provided__17();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_15() {
    var i = new _no_name_provided__18();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_16() {
    var i = new _no_name_provided__19();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_17() {
    var i = new _no_name_provided__20();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_18() {
    var i = new _no_name_provided__21();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_19() {
    var i = new _no_name_provided__22();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_20($arity) {
    var i = new _no_name_provided__23($arity);
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  var properties_initialized_primitives_kt;
  function init_properties_primitives_kt() {
    if (!properties_initialized_primitives_kt) {
      properties_initialized_primitives_kt = true;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = fillArrayVal(Array(0), null);
        break $l$block;
      }
      functionClasses = tmp$ret$0;
    }}
  function getKClass_0(jClass) {
    var tmp;
    var tmp_0 = Array.isArray(jClass);
    if ((!(tmp_0 == null) ? typeof tmp_0 === 'boolean' : false) ? tmp_0 : THROW_CCE()) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = jClass;
          break $l$block;
        }
        var tmp_1 = tmp$ret$0;
        tmp$ret$1 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
        break $l$block_0;
      }
      tmp = getKClassM_0(tmp$ret$1);
    } else {
      {
        var tmp$ret$3;
        $l$block_2: {
          var tmp$ret$2;
          $l$block_1: {
            tmp$ret$2 = jClass;
            break $l$block_1;
          }
          var tmp_2 = tmp$ret$2;
          tmp$ret$3 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
          break $l$block_2;
        }
        tmp = getKClass1_0(tmp$ret$3);
      }
    }
    return tmp;
  }
  function getKClassM_0(jClasses) {
    var tmp0_subject = jClasses.length;
    var tmp;
    switch (tmp0_subject) {
      case 1:
        tmp = getKClass1_0(jClasses[0]);
        break;
      case 0:
        var tmp$ret$1;
        $l$block_0: {
          var tmp0_unsafeCast_0 = NothingKClassImpl_getInstance();
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = tmp0_unsafeCast_0;
            break $l$block;
          }
          var tmp_0 = tmp$ret$0;
          tmp$ret$1 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
          break $l$block_0;
        }

        tmp = tmp$ret$1;
        break;
      default:var tmp$ret$3;
        $l$block_2: {
          var tmp1_unsafeCast_0 = new ErrorKClass();
          var tmp$ret$2;
          $l$block_1: {
            tmp$ret$2 = tmp1_unsafeCast_0;
            break $l$block_1;
          }
          var tmp_1 = tmp$ret$2;
          tmp$ret$3 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
          break $l$block_2;
        }

        tmp = tmp$ret$3;
        break;
    }
    return tmp;
  }
  function getKClass1_0(jClass) {
    if (jClass === String) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_unsafeCast_0 = PrimitiveClasses_getInstance()._stringClass;
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = tmp0_unsafeCast_0;
          break $l$block;
        }
        var tmp = tmp$ret$0;
        tmp$ret$1 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
        break $l$block_0;
      }
      return tmp$ret$1;
    }var tmp$ret$2;
    $l$block_1: {
      tmp$ret$2 = jClass;
      break $l$block_1;
    }
    var metadata = tmp$ret$2.$metadata$;
    var tmp_0;
    if (metadata != null) {
      var tmp_1;
      if (metadata.$kClass$ == null) {
        var kClass = new SimpleKClassImpl(jClass);
        metadata.$kClass$ = kClass;
        tmp_1 = kClass;
      } else {
        tmp_1 = metadata.$kClass$;
      }
      var tmp_2 = tmp_1;
      tmp_0 = (!(tmp_2 == null) ? isInterface(tmp_2, KClass) : false) ? tmp_2 : THROW_CCE();
    } else {
      tmp_0 = new SimpleKClassImpl(jClass);
    }
    return tmp_0;
  }
  function getKClassFromExpression_0(e) {
    var tmp$ret$3;
    $l$block_2: {
      var tmp0_subject = typeof e;
      var tmp;
      switch (tmp0_subject) {
        case 'string':
          tmp = PrimitiveClasses_getInstance()._stringClass;
          break;
        case 'number':
          var tmp_0;
          var tmp$ret$0;
          $l$block: {
            var tmp0_asDynamic_0 = jsBitwiseOr(e, 0);
            tmp$ret$0 = tmp0_asDynamic_0;
            break $l$block;
          }

          if (tmp$ret$0 === e) {
            tmp_0 = PrimitiveClasses_getInstance()._intClass;
          } else {
            {
              tmp_0 = PrimitiveClasses_getInstance()._doubleClass;
            }
          }

          tmp = tmp_0;
          break;
        case 'boolean':
          tmp = PrimitiveClasses_getInstance()._booleanClass;
          break;
        case 'function':
          var tmp_1 = PrimitiveClasses_getInstance();
          var tmp$ret$1;
          $l$block_0: {
            tmp$ret$1 = e;
            break $l$block_0;
          }

          var tmp_2 = tmp$ret$1.length;
          tmp = tmp_1.functionClass((!(tmp_2 == null) ? typeof tmp_2 === 'number' : false) ? tmp_2 : THROW_CCE());
          break;
        default:var tmp_3;
          if (isBooleanArray(e)) {
            tmp_3 = PrimitiveClasses_getInstance()._booleanArrayClass;
          } else {
            if (isCharArray(e)) {
              tmp_3 = PrimitiveClasses_getInstance()._charArrayClass;
            } else {
              if (isByteArray(e)) {
                tmp_3 = PrimitiveClasses_getInstance()._byteArrayClass;
              } else {
                if (isShortArray(e)) {
                  tmp_3 = PrimitiveClasses_getInstance()._shortArrayClass;
                } else {
                  if (isIntArray(e)) {
                    tmp_3 = PrimitiveClasses_getInstance()._intArrayClass;
                  } else {
                    if (isLongArray(e)) {
                      tmp_3 = PrimitiveClasses_getInstance()._longArrayClass;
                    } else {
                      if (isFloatArray(e)) {
                        tmp_3 = PrimitiveClasses_getInstance()._floatArrayClass;
                      } else {
                        if (isDoubleArray(e)) {
                          tmp_3 = PrimitiveClasses_getInstance()._doubleArrayClass;
                        } else {
                          if (isInterface(e, KClass)) {
                            tmp_3 = getKClass_0(KClass);
                          } else {
                            if (isArray(e)) {
                              tmp_3 = PrimitiveClasses_getInstance()._arrayClass;
                            } else {
                              {
                                var constructor = Object.getPrototypeOf(e).constructor;
                                var tmp_4;
                                if (constructor === Object) {
                                  tmp_4 = PrimitiveClasses_getInstance()._anyClass;
                                } else if (constructor === Error) {
                                  tmp_4 = PrimitiveClasses_getInstance()._throwableClass;
                                } else {
                                  var jsClass = (!(constructor == null) ? isObject(constructor) : false) ? constructor : THROW_CCE();
                                  tmp_4 = getKClass1_0(jsClass);
                                }
                                tmp_3 = tmp_4;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }

          tmp = tmp_3;
          break;
      }
      var tmp1_unsafeCast_0 = tmp;
      var tmp$ret$2;
      $l$block_1: {
        tmp$ret$2 = tmp1_unsafeCast_0;
        break $l$block_1;
      }
      var tmp_5 = tmp$ret$2;
      tmp$ret$3 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
      break $l$block_2;
    }
    return tmp$ret$3;
  }
  function Appendable() {
  }
  Appendable.$metadata$ = {
    simpleName: 'Appendable',
    kind: 'interface',
    interfaces: []
  };
  function StringBuilder_init_$Init$($this) {
    StringBuilder.call($this, '');
    return $this;
  }
  function StringBuilder_init_$Create$() {
    return StringBuilder_init_$Init$(Object.create(StringBuilder.prototype));
  }
  function StringBuilder(content) {
    this._string = !(content === undefined) ? content : '';
  }
  StringBuilder.prototype.append_wi8o78_k$ = function (value) {
    var tmp0_this = this;
    tmp0_this._string = tmp0_this._string + value;
    return this;
  };
  StringBuilder.prototype.append_v1o70a_k$ = function (value) {
    var tmp0_this = this;
    tmp0_this._string = tmp0_this._string + toString_0(value);
    return this;
  };
  StringBuilder.prototype.append_wi7j7l_k$ = function (value) {
    var tmp0_this = this;
    tmp0_this._string = tmp0_this._string + toString_0(value);
    return this;
  };
  StringBuilder.prototype.append_uch40_k$ = function (value) {
    var tmp0_this = this;
    var tmp = tmp0_this;
    var tmp_0 = tmp0_this._string;
    var tmp1_elvis_lhs = value;
    tmp._string = tmp_0 + (tmp1_elvis_lhs == null ? 'null' : tmp1_elvis_lhs);
    return this;
  };
  StringBuilder.prototype.toString = function () {
    return this._string;
  };
  StringBuilder.$metadata$ = {
    simpleName: 'StringBuilder',
    kind: 'class',
    interfaces: [Appendable, CharSequence]
  };
  function Char() {
  }
  Char.$metadata$ = {
    simpleName: 'Char',
    kind: 'class',
    interfaces: [Comparable]
  };
  function Iterable() {
  }
  Iterable.$metadata$ = {
    simpleName: 'Iterable',
    kind: 'interface',
    interfaces: []
  };
  function List() {
  }
  List.$metadata$ = {
    simpleName: 'List',
    kind: 'interface',
    interfaces: [Collection]
  };
  function MutableSet() {
  }
  MutableSet.$metadata$ = {
    simpleName: 'MutableSet',
    kind: 'interface',
    interfaces: [Set, MutableCollection]
  };
  function Set() {
  }
  Set.$metadata$ = {
    simpleName: 'Set',
    kind: 'interface',
    interfaces: [Collection]
  };
  function Entry() {
  }
  Entry.$metadata$ = {
    simpleName: 'Entry',
    kind: 'interface',
    interfaces: []
  };
  function Map_0() {
  }
  Map_0.$metadata$ = {
    simpleName: 'Map',
    kind: 'interface',
    interfaces: []
  };
  function MutableEntry() {
  }
  MutableEntry.$metadata$ = {
    simpleName: 'MutableEntry',
    kind: 'interface',
    interfaces: [Entry]
  };
  function MutableMap() {
  }
  MutableMap.$metadata$ = {
    simpleName: 'MutableMap',
    kind: 'interface',
    interfaces: [Map_0]
  };
  function MutableList() {
  }
  MutableList.$metadata$ = {
    simpleName: 'MutableList',
    kind: 'interface',
    interfaces: [List, MutableCollection]
  };
  function MutableCollection() {
  }
  MutableCollection.$metadata$ = {
    simpleName: 'MutableCollection',
    kind: 'interface',
    interfaces: [Collection, MutableIterable]
  };
  function Collection() {
  }
  Collection.$metadata$ = {
    simpleName: 'Collection',
    kind: 'interface',
    interfaces: [Iterable]
  };
  function MutableIterable() {
  }
  MutableIterable.$metadata$ = {
    simpleName: 'MutableIterable',
    kind: 'interface',
    interfaces: [Iterable]
  };
  function Companion_4() {
    Companion_instance_3 = this;
  }
  Companion_4.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_4();
    return Companion_instance_3;
  }
  function Enum(name, ordinal) {
    Companion_getInstance_3();
    this._name = name;
    this._ordinal = ordinal;
  }
  Enum.prototype.equals = function (other) {
    return this === other;
  };
  Enum.prototype.hashCode = function () {
    return identityHashCode(this);
  };
  Enum.prototype.toString = function () {
    return this._name;
  };
  Enum.$metadata$ = {
    simpleName: 'Enum',
    kind: 'class',
    interfaces: [Comparable]
  };
  function toString_0(_this_) {
    var tmp0_safe_receiver = _this_;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toString_1(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 'null' : tmp1_elvis_lhs;
  }
  function fillArrayVal(array, initValue) {
    var inductionVariable = 0;
    var last = array.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        array[i] = initValue;
      }
       while (!(i === last));
    return array;
  }
  function _get_buf_() {
    init_properties_bitUtils_kt();
    return buf;
  }
  var buf;
  function _get_bufFloat64_() {
    init_properties_bitUtils_kt();
    return bufFloat64;
  }
  var bufFloat64;
  var bufFloat32;
  function _get_bufInt32_() {
    init_properties_bitUtils_kt();
    return bufInt32;
  }
  var bufInt32;
  function _get_lowIndex_() {
    init_properties_bitUtils_kt();
    return lowIndex;
  }
  var lowIndex;
  function _get_highIndex_() {
    init_properties_bitUtils_kt();
    return highIndex;
  }
  var highIndex;
  function getNumberHashCode(obj) {
    init_properties_bitUtils_kt();
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_unsafeCast_0 = jsBitwiseOr(obj, 0);
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_unsafeCast_0;
        break $l$block;
      }
      var tmp = tmp$ret$0;
      tmp$ret$1 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
      break $l$block_0;
    }
    if (tmp$ret$1 === obj) {
      return numberToInt(obj);
    } else {
    }
    _get_bufFloat64_()[0] = obj;
    return imul(_get_bufInt32_()[_get_highIndex_()], 31) + _get_bufInt32_()[_get_lowIndex_()] | 0;
  }
  var properties_initialized_bitUtils_kt;
  function init_properties_bitUtils_kt() {
    if (!properties_initialized_bitUtils_kt) {
      properties_initialized_bitUtils_kt = true;
      buf = new ArrayBuffer(8);
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_unsafeCast_0 = new Float64Array(_get_buf_());
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = tmp0_unsafeCast_0;
          break $l$block;
        }
        var tmp = tmp$ret$0;
        tmp$ret$1 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
        break $l$block_0;
      }
      bufFloat64 = tmp$ret$1;
      var tmp$ret$1_0;
      $l$block_2: {
        var tmp0_unsafeCast_0_0 = new Float32Array(_get_buf_());
        var tmp$ret$0_0;
        $l$block_1: {
          tmp$ret$0_0 = tmp0_unsafeCast_0_0;
          break $l$block_1;
        }
        var tmp_0 = tmp$ret$0_0;
        tmp$ret$1_0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
        break $l$block_2;
      }
      bufFloat32 = tmp$ret$1_0;
      var tmp$ret$1_1;
      $l$block_4: {
        var tmp0_unsafeCast_0_1 = new Int32Array(_get_buf_());
        var tmp$ret$0_1;
        $l$block_3: {
          tmp$ret$0_1 = tmp0_unsafeCast_0_1;
          break $l$block_3;
        }
        var tmp_1 = tmp$ret$0_1;
        tmp$ret$1_1 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
        break $l$block_4;
      }
      bufInt32 = tmp$ret$1_1;
      var tmp$ret$1_2;
      $l$block_6: {
        {
        }
        var tmp$ret$0_2;
        $l$block_5: {
          _get_bufFloat64_()[0] = -1.0;
          tmp$ret$0_2 = !(_get_bufInt32_()[0] === 0) ? 1 : 0;
          break $l$block_5;
        }
        tmp$ret$1_2 = tmp$ret$0_2;
        break $l$block_6;
      }
      lowIndex = tmp$ret$1_2;
      highIndex = 1 - _get_lowIndex_() | 0;
    }}
  function arrayToString(array) {
    return joinToString$default(array, ', ', '[', ']', 0, null, _no_name_provided_$factory_21(), 24, null);
  }
  function _no_name_provided__24() {
  }
  _no_name_provided__24.prototype.invoke_wi7j7l_k$ = function (it) {
    return toString_1(it);
  };
  _no_name_provided__24.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__24.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_21() {
    var i = new _no_name_provided__24();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function identityHashCode(obj) {
    return getObjectHashCode(obj);
  }
  function getObjectHashCode(obj) {
    if (!jsIn('kotlinHashCodeValue$', isObject(obj) ? obj : THROW_CCE())) {
      var hash = jsBitwiseOr(Math.random() * 4.294967296E9, 0);
      var descriptor = new Object();
      descriptor.value = hash;
      descriptor.enumerable = false;
      Object.defineProperty(obj, 'kotlinHashCodeValue$', descriptor);
    } else {
    }
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = obj['kotlinHashCodeValue$'];
      tmp$ret$0 = (tmp0_unsafeCast_0 == null ? true : isObject(tmp0_unsafeCast_0)) ? tmp0_unsafeCast_0 : THROW_CCE();
      break $l$block;
    }
    return tmp$ret$0;
  }
  function toString_1(o) {
    var tmp;
    if (o == null) {
      tmp = 'null';
    } else if (isArrayish(o)) {
      tmp = '[...]';
    } else {
      var tmp$ret$0;
      $l$block: {
        var tmp0_unsafeCast_0 = o.toString();
        tmp$ret$0 = (tmp0_unsafeCast_0 == null ? true : isObject(tmp0_unsafeCast_0)) ? tmp0_unsafeCast_0 : THROW_CCE();
        break $l$block;
      }
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function equals(obj1, obj2) {
    if (obj1 == null) {
      return obj2 == null;
    }if (obj2 == null) {
      return false;
    }if (typeof obj1 === 'object' ? typeof obj1.equals === 'function' : false) {
      var tmp = obj1.equals(obj2);
      return (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE();
    }if (obj1 !== obj1) {
      return obj2 !== obj2;
    }if (typeof obj1 === 'number' ? typeof obj2 === 'number' : false) {
      var tmp_0;
      if (obj1 === obj2) {
        var tmp_1;
        if (obj1 !== 0) {
          tmp_1 = true;
        } else {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = 1;
            break $l$block;
          }
          var tmp_2 = tmp$ret$0 / obj1;
          var tmp$ret$1;
          $l$block_0: {
            tmp$ret$1 = 1;
            break $l$block_0;
          }
          tmp_1 = tmp_2 === tmp$ret$1 / obj2;
        }
        tmp_0 = tmp_1;
      } else {
        tmp_0 = false;
      }
      return tmp_0;
    }return obj1 === obj2;
  }
  function hashCode(obj) {
    if (obj == null)
      return 0;
    var tmp0_subject = typeof obj;
    var tmp;
    switch (tmp0_subject) {
      case 'object':
        var tmp_0 = 'function' === typeof obj.hashCode ? obj.hashCode() : getObjectHashCode(obj);
        tmp = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
        break;
      case 'function':
        tmp = getObjectHashCode(obj);
        break;
      case 'number':
        tmp = getNumberHashCode((!(obj == null) ? typeof obj === 'number' : false) ? obj : THROW_CCE());
        break;
      case 'boolean':
        var tmp_1;
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = (obj == null ? true : isObject(obj)) ? obj : THROW_CCE();
          break $l$block;
        }

        if (tmp$ret$0) {
          tmp_1 = 1;
        } else {
          {
            tmp_1 = 0;
          }
        }

        tmp = tmp_1;
        break;
      default:var tmp_2 = String(obj);
        tmp = getStringHashCode((!(tmp_2 == null) ? typeof tmp_2 === 'string' : false) ? tmp_2 : THROW_CCE());
        break;
    }
    return tmp;
  }
  function getStringHashCode(str) {
    var hash = 0;
    var length = str.length;
    var inductionVariable = 0;
    var last = length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = str;
          break $l$block;
        }
        var tmp = tmp$ret$0.charCodeAt(i);
        var code = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
        hash = imul(hash, 31) + code | 0;
      }
       while (!(i === last));
    return hash;
  }
  function anyToString(o) {
    var tmp = Object.prototype.toString.call(o);
    return (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
  }
  function captureStack(instance, constructorFunction) {
    if (Error.captureStackTrace != null) {
      Error.captureStackTrace(instance, constructorFunction);
    } else {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = instance;
        break $l$block;
      }
      tmp$ret$0.stack = (new Error()).stack;
    }
  }
  function extendThrowable(this_, message, cause) {
    Error.call(this_);
    setPropertiesToThrowableInstance(this_, message, cause);
  }
  function setPropertiesToThrowableInstance(this_, message, cause) {
    if (!hasOwnPrototypeProperty(isObject(this_) ? this_ : THROW_CCE(), 'message')) {
      var tmp;
      if (message == null) {
        var tmp_0;
        if (!(message === null)) {
          var tmp0_safe_receiver = cause;
          var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
          tmp_0 = tmp1_elvis_lhs == null ? undefined : tmp1_elvis_lhs;
        } else {
          tmp_0 = undefined;
        }
        tmp = tmp_0;
      } else {
        tmp = message;
      }
      this_.message = tmp;
    } else {
    }
    if (!hasOwnPrototypeProperty(isObject(this_) ? this_ : THROW_CCE(), 'cause')) {
      this_.cause = cause;
    } else {
    }
    this_.name = Object.getPrototypeOf(this_).constructor.name;
  }
  function hasOwnPrototypeProperty(o, name) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = Object.getPrototypeOf(o).hasOwnProperty(name);
      tmp$ret$0 = (tmp0_unsafeCast_0 == null ? true : isObject(tmp0_unsafeCast_0)) ? tmp0_unsafeCast_0 : THROW_CCE();
      break $l$block;
    }
    return tmp$ret$0;
  }
  function getContinuation() {
    throw Exception_init_$Create$('Implemented as intrinsic');
  }
  function ensureNotNull(v) {
    var tmp;
    if (v == null) {
      THROW_NPE();
    } else {
      tmp = v;
    }
    return tmp;
  }
  function THROW_NPE() {
    throw NullPointerException_init_$Create$();
  }
  function THROW_CCE() {
    throw ClassCastException_init_$Create$();
  }
  function throwUninitializedPropertyAccessException(name) {
    throw UninitializedPropertyAccessException_init_$Create$('' + 'lateinit property ' + name + ' has not been initialized');
  }
  function Companion_5() {
    Companion_instance_4 = this;
    this._MIN_VALUE_0 = new Long(0, -2147483648);
    this._MAX_VALUE_0 = new Long(-1, 2147483647);
    this._SIZE_BYTES_0 = 8;
    this._SIZE_BITS_0 = 64;
  }
  Companion_5.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_4;
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null)
      new Companion_5();
    return Companion_instance_4;
  }
  function Long(low, high) {
    Companion_getInstance_4();
    Number_0.call(this);
    this._low = low;
    this._high = high;
  }
  Long.prototype.compareTo_wiekkq_k$ = function (other) {
    return compare(this, other);
  };
  Long.prototype.plus_wiekkq_k$ = function (other) {
    return add(this, other);
  };
  Long.prototype.minus_wiekkq_k$ = function (other) {
    return subtract(this, other);
  };
  Long.prototype.div_wiekkq_k$ = function (other) {
    return divide(this, other);
  };
  Long.prototype.inc_0_k$ = function () {
    return this.plus_wiekkq_k$(new Long(1, 0));
  };
  Long.prototype.dec_0_k$ = function () {
    return this.minus_wiekkq_k$(new Long(1, 0));
  };
  Long.prototype.unaryMinus_0_k$ = function () {
    return this.inv_0_k$().plus_wiekkq_k$(new Long(1, 0));
  };
  Long.prototype.inv_0_k$ = function () {
    return new Long(~this._low, ~this._high);
  };
  Long.prototype.toInt_0_k$ = function () {
    return this._low;
  };
  Long.prototype.toDouble_0_k$ = function () {
    return toNumber(this);
  };
  Long.prototype.valueOf = function () {
    return this.toDouble_0_k$();
  };
  Long.prototype.equals = function (other) {
    var tmp;
    if (other instanceof Long) {
      tmp = equalsLong(this, other instanceof Long ? other : THROW_CCE());
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  Long.prototype.hashCode = function () {
    return hashCode_0(this);
  };
  Long.prototype.toString = function () {
    return toStringImpl(this, 10);
  };
  Long.$metadata$ = {
    simpleName: 'Long',
    kind: 'class',
    interfaces: [Comparable]
  };
  function _get_ZERO_() {
    init_properties_longjs_kt();
    return ZERO;
  }
  var ZERO;
  function _get_ONE_() {
    init_properties_longjs_kt();
    return ONE;
  }
  var ONE;
  function _get_NEG_ONE_() {
    init_properties_longjs_kt();
    return NEG_ONE;
  }
  var NEG_ONE;
  function _get_MAX_VALUE_() {
    init_properties_longjs_kt();
    return MAX_VALUE;
  }
  var MAX_VALUE;
  function _get_MIN_VALUE_() {
    init_properties_longjs_kt();
    return MIN_VALUE;
  }
  var MIN_VALUE;
  function _get_TWO_PWR_24__() {
    init_properties_longjs_kt();
    return TWO_PWR_24_;
  }
  var TWO_PWR_24_;
  function compare(_this_, other) {
    init_properties_longjs_kt();
    if (equalsLong(_this_, other)) {
      return 0;
    }var thisNeg = isNegative(_this_);
    var otherNeg = isNegative(other);
    return (thisNeg ? !otherNeg : false) ? -1 : (!thisNeg ? otherNeg : false) ? 1 : isNegative(subtract(_this_, other)) ? -1 : 1;
  }
  function add(_this_, other) {
    init_properties_longjs_kt();
    var a48 = _this_._high >>> 16;
    var a32 = _this_._high & 65535;
    var a16 = _this_._low >>> 16;
    var a00 = _this_._low & 65535;
    var b48 = other._high >>> 16;
    var b32 = other._high & 65535;
    var b16 = other._low >>> 16;
    var b00 = other._low & 65535;
    var c48 = 0;
    var c32 = 0;
    var c16 = 0;
    var c00 = 0;
    c00 = c00 + (a00 + b00 | 0) | 0;
    c16 = c16 + (c00 >>> 16) | 0;
    c00 = c00 & 65535;
    c16 = c16 + (a16 + b16 | 0) | 0;
    c32 = c32 + (c16 >>> 16) | 0;
    c16 = c16 & 65535;
    c32 = c32 + (a32 + b32 | 0) | 0;
    c48 = c48 + (c32 >>> 16) | 0;
    c32 = c32 & 65535;
    c48 = c48 + (a48 + b48 | 0) | 0;
    c48 = c48 & 65535;
    return new Long(c16 << 16 | c00, c48 << 16 | c32);
  }
  function subtract(_this_, other) {
    init_properties_longjs_kt();
    return add(_this_, other.unaryMinus_0_k$());
  }
  function multiply(_this_, other) {
    init_properties_longjs_kt();
    if (isZero(_this_)) {
      return _get_ZERO_();
    } else if (isZero(other)) {
      return _get_ZERO_();
    }if (equalsLong(_this_, _get_MIN_VALUE_())) {
      return isOdd(other) ? _get_MIN_VALUE_() : _get_ZERO_();
    } else if (equalsLong(other, _get_MIN_VALUE_())) {
      return isOdd(_this_) ? _get_MIN_VALUE_() : _get_ZERO_();
    }if (isNegative(_this_)) {
      var tmp;
      if (isNegative(other)) {
        tmp = multiply(negate(_this_), negate(other));
      } else {
        tmp = negate(multiply(negate(_this_), other));
      }
      return tmp;
    } else if (isNegative(other)) {
      return negate(multiply(_this_, negate(other)));
    }if (lessThan(_this_, _get_TWO_PWR_24__()) ? lessThan(other, _get_TWO_PWR_24__()) : false) {
      return fromNumber(toNumber(_this_) * toNumber(other));
    }var a48 = _this_._high >>> 16;
    var a32 = _this_._high & 65535;
    var a16 = _this_._low >>> 16;
    var a00 = _this_._low & 65535;
    var b48 = other._high >>> 16;
    var b32 = other._high & 65535;
    var b16 = other._low >>> 16;
    var b00 = other._low & 65535;
    var c48 = 0;
    var c32 = 0;
    var c16 = 0;
    var c00 = 0;
    c00 = c00 + imul(a00, b00) | 0;
    c16 = c16 + (c00 >>> 16) | 0;
    c00 = c00 & 65535;
    c16 = c16 + imul(a16, b00) | 0;
    c32 = c32 + (c16 >>> 16) | 0;
    c16 = c16 & 65535;
    c16 = c16 + imul(a00, b16) | 0;
    c32 = c32 + (c16 >>> 16) | 0;
    c16 = c16 & 65535;
    c32 = c32 + imul(a32, b00) | 0;
    c48 = c48 + (c32 >>> 16) | 0;
    c32 = c32 & 65535;
    c32 = c32 + imul(a16, b16) | 0;
    c48 = c48 + (c32 >>> 16) | 0;
    c32 = c32 & 65535;
    c32 = c32 + imul(a00, b32) | 0;
    c48 = c48 + (c32 >>> 16) | 0;
    c32 = c32 & 65535;
    c48 = c48 + (((imul(a48, b00) + imul(a32, b16) | 0) + imul(a16, b32) | 0) + imul(a00, b48) | 0) | 0;
    c48 = c48 & 65535;
    return new Long(c16 << 16 | c00, c48 << 16 | c32);
  }
  function divide(_this_, other) {
    init_properties_longjs_kt();
    if (isZero(other)) {
      throw Exception_init_$Create$('division by zero');
    } else if (isZero(_this_)) {
      return _get_ZERO_();
    }if (equalsLong(_this_, _get_MIN_VALUE_())) {
      if (equalsLong(other, _get_ONE_()) ? true : equalsLong(other, _get_NEG_ONE_())) {
        return _get_MIN_VALUE_();
      } else if (equalsLong(other, _get_MIN_VALUE_())) {
        return _get_ONE_();
      } else {
        var halfThis = shiftRight(_this_, 1);
        var approx = shiftLeft(halfThis.div_wiekkq_k$(other), 1);
        if (equalsLong(approx, _get_ZERO_())) {
          return isNegative(other) ? _get_ONE_() : _get_NEG_ONE_();
        } else {
          var rem = subtract(_this_, multiply(other, approx));
          return add(approx, rem.div_wiekkq_k$(other));
        }
      }
    } else if (equalsLong(other, _get_MIN_VALUE_())) {
      return _get_ZERO_();
    }if (isNegative(_this_)) {
      var tmp;
      if (isNegative(other)) {
        tmp = negate(_this_).div_wiekkq_k$(negate(other));
      } else {
        tmp = negate(negate(_this_).div_wiekkq_k$(other));
      }
      return tmp;
    } else if (isNegative(other)) {
      return negate(_this_.div_wiekkq_k$(negate(other)));
    }var res = _get_ZERO_();
    var rem_0 = _this_;
    while (greaterThanOrEqual(rem_0, other)) {
      var approxDouble = toNumber(rem_0) / toNumber(other);
      var approx2 = Math.max(1.0, Math.floor(approxDouble));
      var log2 = Math.ceil(Math.log(approx2) / Math.LN2);
      var delta_0 = log2 <= 48.0 ? 1.0 : Math.pow(2.0, log2 - 48);
      var approxRes = fromNumber(approx2);
      var approxRem = multiply(approxRes, other);
      while (isNegative(approxRem) ? true : greaterThan(approxRem, rem_0)) {
        approx2 = approx2 - delta_0;
        approxRes = fromNumber(approx2);
        approxRem = multiply(approxRes, other);
      }
      if (isZero(approxRes)) {
        approxRes = _get_ONE_();
      }res = add(res, approxRes);
      rem_0 = subtract(rem_0, approxRem);
    }
    return res;
  }
  function shiftLeft(_this_, numBits) {
    init_properties_longjs_kt();
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this_;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this_._low << numBits_0, _this_._high << numBits_0 | _this_._low >>> (32 - numBits_0 | 0));
      } else {
        return new Long(0, _this_._low << (numBits_0 - 32 | 0));
      }
    }
  }
  function shiftRight(_this_, numBits) {
    init_properties_longjs_kt();
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this_;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this_._low >>> numBits_0 | _this_._high << (32 - numBits_0 | 0), _this_._high >> numBits_0);
      } else {
        return new Long(_this_._high >> (numBits_0 - 32 | 0), _this_._high >= 0 ? 0 : -1);
      }
    }
  }
  function toNumber(_this_) {
    init_properties_longjs_kt();
    return _this_._high * 4.294967296E9 + getLowBitsUnsigned(_this_);
  }
  function equalsLong(_this_, other) {
    init_properties_longjs_kt();
    return _this_._high === other._high ? _this_._low === other._low : false;
  }
  function hashCode_0(l) {
    init_properties_longjs_kt();
    return l._low ^ l._high;
  }
  function toStringImpl(_this_, radix) {
    init_properties_longjs_kt();
    if (radix < 2 ? true : 36 < radix) {
      throw Exception_init_$Create$('' + 'radix out of range: ' + radix);
    }if (isZero(_this_)) {
      return '0';
    }if (isNegative(_this_)) {
      if (equalsLong(_this_, _get_MIN_VALUE_())) {
        var radixLong = fromInt(radix);
        var div = _this_.div_wiekkq_k$(radixLong);
        var rem = subtract(multiply(div, radixLong), _this_).toInt_0_k$();
        var tmp = toStringImpl(div, radix);
        var tmp$ret$1;
        $l$block_0: {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = rem;
            break $l$block;
          }
          var tmp0_unsafeCast_0 = tmp$ret$0.toString(radix);
          tmp$ret$1 = (tmp0_unsafeCast_0 == null ? true : isObject(tmp0_unsafeCast_0)) ? tmp0_unsafeCast_0 : THROW_CCE();
          break $l$block_0;
        }
        return tmp + tmp$ret$1;
      } else {
        return '' + '-' + toStringImpl(negate(_this_), radix);
      }
    }var radixToPower = fromNumber(Math.pow(radix, 6.0));
    var rem_0 = _this_;
    var result = '';
    while (true) {
      var remDiv = rem_0.div_wiekkq_k$(radixToPower);
      var intval = subtract(rem_0, multiply(remDiv, radixToPower)).toInt_0_k$();
      var tmp$ret$3;
      $l$block_2: {
        var tmp$ret$2;
        $l$block_1: {
          tmp$ret$2 = intval;
          break $l$block_1;
        }
        var tmp1_unsafeCast_0 = tmp$ret$2.toString(radix);
        tmp$ret$3 = (tmp1_unsafeCast_0 == null ? true : isObject(tmp1_unsafeCast_0)) ? tmp1_unsafeCast_0 : THROW_CCE();
        break $l$block_2;
      }
      var digits = tmp$ret$3;
      rem_0 = remDiv;
      if (isZero(rem_0)) {
        return digits + result;
      } else {
        while (digits.length < 6) {
          digits = '0' + digits;
        }
        result = digits + result;
      }
    }
  }
  function fromInt(value) {
    init_properties_longjs_kt();
    return new Long(value, value < 0 ? -1 : 0);
  }
  function isNegative(_this_) {
    init_properties_longjs_kt();
    return _this_._high < 0;
  }
  function isZero(_this_) {
    init_properties_longjs_kt();
    return _this_._high === 0 ? _this_._low === 0 : false;
  }
  function isOdd(_this_) {
    init_properties_longjs_kt();
    return (_this_._low & 1) === 1;
  }
  function negate(_this_) {
    init_properties_longjs_kt();
    return _this_.unaryMinus_0_k$();
  }
  function lessThan(_this_, other) {
    init_properties_longjs_kt();
    return compare(_this_, other) < 0;
  }
  function fromNumber(value) {
    init_properties_longjs_kt();
    if (isNaN_0(value)) {
      return _get_ZERO_();
    } else if (value <= -9.223372036854776E18) {
      return _get_MIN_VALUE_();
    } else if (value + 1 >= 9.223372036854776E18) {
      return _get_MAX_VALUE_();
    } else if (value < 0.0) {
      return negate(fromNumber(-value));
    } else {
      var twoPwr32 = 4.294967296E9;
      return new Long(jsBitwiseOr(value % twoPwr32, 0), jsBitwiseOr(value / twoPwr32, 0));
    }
  }
  function greaterThan(_this_, other) {
    init_properties_longjs_kt();
    return compare(_this_, other) > 0;
  }
  function greaterThanOrEqual(_this_, other) {
    init_properties_longjs_kt();
    return compare(_this_, other) >= 0;
  }
  function getLowBitsUnsigned(_this_) {
    init_properties_longjs_kt();
    return _this_._low >= 0 ? _this_._low : 4.294967296E9 + _this_._low;
  }
  var properties_initialized_longjs_kt;
  function init_properties_longjs_kt() {
    if (!properties_initialized_longjs_kt) {
      properties_initialized_longjs_kt = true;
      ZERO = fromInt(0);
      ONE = fromInt(1);
      NEG_ONE = fromInt(-1);
      MAX_VALUE = new Long(-1, 2147483647);
      MIN_VALUE = new Long(0, -2147483648);
      TWO_PWR_24_ = fromInt(16777216);
    }}
  function imul(a_local, b_local) {
    var lhs = jsBitwiseAnd(a_local, 4.29490176E9) * jsBitwiseAnd(b_local, 65535);
    var rhs = jsBitwiseAnd(a_local, 65535) * b_local;
    return jsBitwiseOr(lhs + rhs, 0);
  }
  function numberToInt(a) {
    var tmp;
    if (a instanceof Long) {
      tmp = (a instanceof Long ? a : THROW_CCE()).toInt_0_k$();
    } else {
      {
        tmp = doubleToInt((!(a == null) ? typeof a === 'number' : false) ? a : THROW_CCE());
      }
    }
    return tmp;
  }
  function doubleToInt(a) {
    return a > 2.147483647E9 ? 2147483647 : a < -2.147483648E9 ? -2147483648 : jsBitwiseOr(a, 0);
  }
  function isArrayish(o) {
    var tmp;
    if (isJsArray(isObject(o) ? o : THROW_CCE())) {
      tmp = true;
    } else {
      {
        var tmp$ret$0;
        $l$block: {
          var tmp0_unsafeCast_0 = ArrayBuffer.isView(o);
          tmp$ret$0 = (tmp0_unsafeCast_0 == null ? true : isObject(tmp0_unsafeCast_0)) ? tmp0_unsafeCast_0 : THROW_CCE();
          break $l$block;
        }
        tmp = tmp$ret$0;
      }
    }
    return tmp;
  }
  function isJsArray(obj) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = Array.isArray(obj);
      tmp$ret$0 = (tmp0_unsafeCast_0 == null ? true : isObject(tmp0_unsafeCast_0)) ? tmp0_unsafeCast_0 : THROW_CCE();
      break $l$block;
    }
    return tmp$ret$0;
  }
  function isInterface(obj, iface) {
    var tmp0_elvis_lhs = obj.constructor;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var ctor = tmp;
    return isInterfaceImpl((!(ctor == null) ? isObject(ctor) : false) ? ctor : THROW_CCE(), iface);
  }
  function isInterfaceImpl(ctor, iface) {
    if (ctor === iface)
      return true;
    var metadata = ctor.$metadata$;
    if (!(metadata == null)) {
      var interfaces = metadata.interfaces;
      var indexedObject = interfaces;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var i = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if (isInterfaceImpl(i, iface)) {
          return true;
        }}
    }var superPrototype = !(ctor.prototype == null) ? Object.getPrototypeOf(ctor.prototype) : null;
    var tmp;
    if (superPrototype != null) {
      var tmp_0 = superPrototype.constructor;
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = null;
    }
    var superConstructor = tmp;
    return !(superConstructor == null) ? isInterfaceImpl(superConstructor, iface) : false;
  }
  function isArray(obj) {
    var tmp;
    if (isJsArray(obj)) {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = obj;
        break $l$block;
      }
      var tmp_0 = !tmp$ret$0.$type$;
      tmp = (!(tmp_0 == null) ? typeof tmp_0 === 'boolean' : false) ? tmp_0 : THROW_CCE();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function isObject(obj) {
    var objTypeOf = typeof obj;
    var tmp0_subject = objTypeOf;
    switch (tmp0_subject) {
      case 'string':
        return true;
      case 'number':
        return true;
      case 'boolean':
        return true;
      case 'function':
        return true;
      default:return jsInstanceOf(obj, Object);
    }
  }
  function isNumber(a) {
    var tmp;
    if (typeof a === 'number') {
      tmp = true;
    } else {
      tmp = a instanceof Long;
    }
    return tmp;
  }
  function isCharSequence(value) {
    return typeof value === 'string' ? true : isInterface(value, _get_js_(getKClass_0(CharSequence)));
  }
  function isBooleanArray(a) {
    var tmp;
    if (isJsArray(isObject(a) ? a : THROW_CCE())) {
      tmp = a.$type$ === 'BooleanArray';
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  }
  function isByteArray(a) {
    return jsInstanceOf(a, Int8Array);
  }
  function isShortArray(a) {
    return jsInstanceOf(a, Int16Array);
  }
  function isCharArray(a) {
    var tmp;
    if (isJsArray(isObject(a) ? a : THROW_CCE())) {
      tmp = a.$type$ === 'CharArray';
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  }
  function isIntArray(a) {
    return jsInstanceOf(a, Int32Array);
  }
  function isFloatArray(a) {
    return jsInstanceOf(a, Float32Array);
  }
  function isLongArray(a) {
    var tmp;
    if (isJsArray(isObject(a) ? a : THROW_CCE())) {
      tmp = a.$type$ === 'LongArray';
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  }
  function isDoubleArray(a) {
    return jsInstanceOf(a, Float64Array);
  }
  function releaseIntercepted($this) {
    var intercepted_0 = $this._intercepted_;
    if (!(intercepted_0 == null) ? !(intercepted_0 === $this) : false) {
      ensureNotNull($this._get_context__0_k$().get_9uvjra_k$(Key_getInstance())).releaseInterceptedContinuation_h7c6yl_k$(intercepted_0);
    }$this._intercepted_ = CompletedContinuation_getInstance();
  }
  function CoroutineImpl_0(resultContinuation) {
    this._resultContinuation = resultContinuation;
    this._state_0 = 0;
    this._exceptionState = 0;
    this._result = null;
    this._exception_0 = null;
    this._finallyPath = null;
    var tmp = this;
    var tmp0_safe_receiver = this._resultContinuation;
    tmp.__context = tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_context__0_k$();
    this._intercepted_ = null;
  }
  CoroutineImpl_0.prototype._get_exception__0_k$ = function () {
    return this._exception_0;
  };
  CoroutineImpl_0.prototype._get_context__0_k$ = function () {
    return ensureNotNull(this.__context);
  };
  CoroutineImpl_0.prototype.intercepted_0_k$ = function () {
    var tmp2_elvis_lhs = this._intercepted_;
    var tmp;
    if (tmp2_elvis_lhs == null) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_safe_receiver = this._get_context__0_k$().get_9uvjra_k$(Key_getInstance());
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.interceptContinuation_x4ijla_k$(this);
        var tmp0_also_0 = tmp1_elvis_lhs == null ? this : tmp1_elvis_lhs;
        {
        }
        {
          this._intercepted_ = tmp0_also_0;
        }
        tmp$ret$0 = tmp0_also_0;
        break $l$block;
      }
      tmp = tmp$ret$0;
    } else {
      tmp = tmp2_elvis_lhs;
    }
    return tmp;
  };
  CoroutineImpl_0.prototype.resumeWith_jccoe6_k$ = function (result) {
    var current = this;
    var tmp$ret$0;
    $l$block: {
      var tmp;
      if (_Result___get_isFailure__impl_(result)) {
        tmp = null;
      } else {
        var tmp_0 = _Result___get_value__impl_(result);
        tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      }
      tmp$ret$0 = tmp;
      break $l$block;
    }
    var currentResult = tmp$ret$0;
    var currentException = Result__exceptionOrNull_impl(result);
    while (true) {
      var tmp$ret$6;
      $l$block_5: {
        var tmp0_with_0 = current;
        {
        }
        if (currentException == null) {
          tmp0_with_0._result = currentResult;
        } else {
          tmp0_with_0._state_0 = tmp0_with_0._exceptionState;
          tmp0_with_0._exception_0 = currentException;
        }
        try {
          var outcome_2 = tmp0_with_0.doResume_0_k$();
          if (outcome_2 === _get_COROUTINE_SUSPENDED_())
            return Unit_getInstance();
          currentResult = outcome_2;
          currentException = null;
        } catch ($p) {
          currentResult = null;
          var tmp$ret$1;
          $l$block_0: {
            tmp$ret$1 = ($p == null ? true : isObject($p)) ? $p : THROW_CCE();
            break $l$block_0;
          }
          currentException = tmp$ret$1;
        }
        releaseIntercepted(tmp0_with_0);
        var completion_4 = ensureNotNull(tmp0_with_0._resultContinuation);
        var tmp_1;
        if (completion_4 instanceof CoroutineImpl_0) {
          current = completion_4 instanceof CoroutineImpl_0 ? completion_4 : THROW_CCE();
          tmp_1 = Unit_getInstance();
        } else {
          {
            if (!(currentException == null)) {
              var tmp$ret$3;
              $l$block_2: {
                var tmp0_resumeWithException_0_5 = ensureNotNull(currentException);
                var tmp$ret$2;
                $l$block_1: {
                  var tmp0_failure_0_1_6 = Companion_getInstance_2();
                  tmp$ret$2 = _Result___init__impl_(createFailure(tmp0_resumeWithException_0_5));
                  break $l$block_1;
                }
                tmp$ret$3 = completion_4.resumeWith_bnunh2_k$(tmp$ret$2);
                break $l$block_2;
              }
            } else {
              var tmp$ret$5;
              $l$block_4: {
                var tmp1_resume_0_7 = currentResult;
                var tmp$ret$4;
                $l$block_3: {
                  var tmp0_success_0_1_8 = Companion_getInstance_2();
                  tmp$ret$4 = _Result___init__impl_(tmp1_resume_0_7);
                  break $l$block_3;
                }
                tmp$ret$5 = completion_4.resumeWith_bnunh2_k$(tmp$ret$4);
                break $l$block_4;
              }
            }
            return Unit_getInstance();
          }
        }
        tmp$ret$6 = tmp_1;
        break $l$block_5;
      }
    }
  };
  CoroutineImpl_0.prototype.resumeWith_bnunh2_k$ = function (result) {
    return this.resumeWith_jccoe6_k$(result);
  };
  CoroutineImpl_0.$metadata$ = {
    simpleName: 'CoroutineImpl',
    kind: 'class',
    interfaces: [Continuation]
  };
  function CompletedContinuation() {
    CompletedContinuation_instance = this;
  }
  CompletedContinuation.prototype._get_context__0_k$ = function () {
    {
      throw IllegalStateException_init_$Create$('This continuation is already complete');
    }
  };
  CompletedContinuation.prototype.resumeWith_jccoe6_k$ = function (result) {
    {
      throw IllegalStateException_init_$Create$('This continuation is already complete');
    }
  };
  CompletedContinuation.prototype.resumeWith_bnunh2_k$ = function (result) {
    return this.resumeWith_jccoe6_k$(result);
  };
  CompletedContinuation.prototype.toString = function () {
    return 'This continuation is already complete';
  };
  CompletedContinuation.$metadata$ = {
    simpleName: 'CompletedContinuation',
    kind: 'object',
    interfaces: [Continuation]
  };
  var CompletedContinuation_instance;
  function CompletedContinuation_getInstance() {
    if (CompletedContinuation_instance == null)
      new CompletedContinuation();
    return CompletedContinuation_instance;
  }
  function intercepted(_this_) {
    var tmp0_safe_receiver = _this_ instanceof CoroutineImpl_0 ? _this_ : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.intercepted_0_k$();
    return tmp1_elvis_lhs == null ? _this_ : tmp1_elvis_lhs;
  }
  function createCoroutineUnintercepted(_this_, completion) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = new _no_name_provided__1_0(_this_, completion);
      break $l$block;
    }
    return tmp$ret$0;
  }
  function _no_name_provided__1_0($this_createCoroutineUnintercepted, $completion) {
    this._$this_createCoroutineUnintercepted = $this_createCoroutineUnintercepted;
    this._$completion = $completion;
    CoroutineImpl_0.call(this, isInterface($completion, Continuation) ? $completion : THROW_CCE());
  }
  _no_name_provided__1_0.prototype.doResume_2_0_k$ = function () {
    if (this._get_exception__0_k$() != null) {
      var tmp = this._get_exception__0_k$();
      throw tmp instanceof Error ? tmp : THROW_CCE();
    }var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = this._$this_createCoroutineUnintercepted;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0(this._$completion);
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  _no_name_provided__1_0.prototype.doResume_0_k$ = function () {
    return this.doResume_2_0_k$();
  };
  _no_name_provided__1_0.$metadata$ = {
    simpleName: '<no name provided>_1',
    kind: 'class',
    interfaces: []
  };
  function Exception_init_$Init$($this) {
    extendThrowable($this, void 1, void 1);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Init$_0(message, $this) {
    extendThrowable($this, message, void 1);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Create$(message) {
    var tmp = Exception_init_$Init$_0(message, Object.create(Exception.prototype));
    captureStack(tmp, Exception_init_$Create$);
    return tmp;
  }
  function Exception_init_$Init$_1(message, cause, $this) {
    extendThrowable($this, message, cause);
    Exception.call($this);
    return $this;
  }
  function Exception() {
    captureStack(this, Exception);
  }
  Exception.$metadata$ = {
    simpleName: 'Exception',
    kind: 'class',
    interfaces: []
  };
  function Error_init_$Init$(message, cause, $this) {
    extendThrowable($this, message, cause);
    Error_0.call($this);
    return $this;
  }
  function Error_0() {
    captureStack(this, Error_0);
  }
  Error_0.$metadata$ = {
    simpleName: 'Error',
    kind: 'class',
    interfaces: []
  };
  function IllegalArgumentException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IllegalArgumentException.call($this);
    return $this;
  }
  function IllegalArgumentException_init_$Create$(message) {
    var tmp = IllegalArgumentException_init_$Init$(message, Object.create(IllegalArgumentException.prototype));
    captureStack(tmp, IllegalArgumentException_init_$Create$);
    return tmp;
  }
  function IllegalArgumentException() {
    captureStack(this, IllegalArgumentException);
  }
  IllegalArgumentException.$metadata$ = {
    simpleName: 'IllegalArgumentException',
    kind: 'class',
    interfaces: []
  };
  function RuntimeException_init_$Init$($this) {
    Exception_init_$Init$($this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Init$_0(message, $this) {
    Exception_init_$Init$_0(message, $this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Init$_1(message, cause, $this) {
    Exception_init_$Init$_1(message, cause, $this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Create$(message, cause) {
    var tmp = RuntimeException_init_$Init$_1(message, cause, Object.create(RuntimeException.prototype));
    captureStack(tmp, RuntimeException_init_$Create$);
    return tmp;
  }
  function RuntimeException() {
    captureStack(this, RuntimeException);
  }
  RuntimeException.$metadata$ = {
    simpleName: 'RuntimeException',
    kind: 'class',
    interfaces: []
  };
  function NoSuchElementException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NoSuchElementException.call($this);
    return $this;
  }
  function NoSuchElementException_init_$Create$() {
    var tmp = NoSuchElementException_init_$Init$(Object.create(NoSuchElementException.prototype));
    captureStack(tmp, NoSuchElementException_init_$Create$);
    return tmp;
  }
  function NoSuchElementException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    NoSuchElementException.call($this);
    return $this;
  }
  function NoSuchElementException_init_$Create$_0(message) {
    var tmp = NoSuchElementException_init_$Init$_0(message, Object.create(NoSuchElementException.prototype));
    captureStack(tmp, NoSuchElementException_init_$Create$_0);
    return tmp;
  }
  function NoSuchElementException() {
    captureStack(this, NoSuchElementException);
  }
  NoSuchElementException.$metadata$ = {
    simpleName: 'NoSuchElementException',
    kind: 'class',
    interfaces: []
  };
  function IllegalStateException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IllegalStateException.call($this);
    return $this;
  }
  function IllegalStateException_init_$Create$(message) {
    var tmp = IllegalStateException_init_$Init$(message, Object.create(IllegalStateException.prototype));
    captureStack(tmp, IllegalStateException_init_$Create$);
    return tmp;
  }
  function IllegalStateException_init_$Init$_0(message, cause, $this) {
    RuntimeException_init_$Init$_1(message, cause, $this);
    IllegalStateException.call($this);
    return $this;
  }
  function IllegalStateException() {
    captureStack(this, IllegalStateException);
  }
  IllegalStateException.$metadata$ = {
    simpleName: 'IllegalStateException',
    kind: 'class',
    interfaces: []
  };
  function UnsupportedOperationException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    UnsupportedOperationException.call($this);
    return $this;
  }
  function UnsupportedOperationException_init_$Create$() {
    var tmp = UnsupportedOperationException_init_$Init$(Object.create(UnsupportedOperationException.prototype));
    captureStack(tmp, UnsupportedOperationException_init_$Create$);
    return tmp;
  }
  function UnsupportedOperationException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    UnsupportedOperationException.call($this);
    return $this;
  }
  function UnsupportedOperationException_init_$Create$_0(message) {
    var tmp = UnsupportedOperationException_init_$Init$_0(message, Object.create(UnsupportedOperationException.prototype));
    captureStack(tmp, UnsupportedOperationException_init_$Create$_0);
    return tmp;
  }
  function UnsupportedOperationException() {
    captureStack(this, UnsupportedOperationException);
  }
  UnsupportedOperationException.$metadata$ = {
    simpleName: 'UnsupportedOperationException',
    kind: 'class',
    interfaces: []
  };
  function IndexOutOfBoundsException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IndexOutOfBoundsException.call($this);
    return $this;
  }
  function IndexOutOfBoundsException_init_$Create$(message) {
    var tmp = IndexOutOfBoundsException_init_$Init$(message, Object.create(IndexOutOfBoundsException.prototype));
    captureStack(tmp, IndexOutOfBoundsException_init_$Create$);
    return tmp;
  }
  function IndexOutOfBoundsException() {
    captureStack(this, IndexOutOfBoundsException);
  }
  IndexOutOfBoundsException.$metadata$ = {
    simpleName: 'IndexOutOfBoundsException',
    kind: 'class',
    interfaces: []
  };
  function NullPointerException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NullPointerException.call($this);
    return $this;
  }
  function NullPointerException_init_$Create$() {
    var tmp = NullPointerException_init_$Init$(Object.create(NullPointerException.prototype));
    captureStack(tmp, NullPointerException_init_$Create$);
    return tmp;
  }
  function NullPointerException() {
    captureStack(this, NullPointerException);
  }
  NullPointerException.$metadata$ = {
    simpleName: 'NullPointerException',
    kind: 'class',
    interfaces: []
  };
  function ClassCastException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    ClassCastException.call($this);
    return $this;
  }
  function ClassCastException_init_$Create$() {
    var tmp = ClassCastException_init_$Init$(Object.create(ClassCastException.prototype));
    captureStack(tmp, ClassCastException_init_$Create$);
    return tmp;
  }
  function ClassCastException() {
    captureStack(this, ClassCastException);
  }
  ClassCastException.$metadata$ = {
    simpleName: 'ClassCastException',
    kind: 'class',
    interfaces: []
  };
  function UninitializedPropertyAccessException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    UninitializedPropertyAccessException.call($this);
    return $this;
  }
  function UninitializedPropertyAccessException_init_$Create$(message) {
    var tmp = UninitializedPropertyAccessException_init_$Init$(message, Object.create(UninitializedPropertyAccessException.prototype));
    captureStack(tmp, UninitializedPropertyAccessException_init_$Create$);
    return tmp;
  }
  function UninitializedPropertyAccessException() {
    captureStack(this, UninitializedPropertyAccessException);
  }
  UninitializedPropertyAccessException.$metadata$ = {
    simpleName: 'UninitializedPropertyAccessException',
    kind: 'class',
    interfaces: []
  };
  function jsIn(lhs_hack, rhs_hack) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = jsIn$outlinedJsCode$(lhs_hack, rhs_hack);
      tmp$ret$0 = (tmp0_unsafeCast_0 == null ? true : isObject(tmp0_unsafeCast_0)) ? tmp0_unsafeCast_0 : THROW_CCE();
      break $l$block;
    }
    return tmp$ret$0;
  }
  function jsBitwiseOr(lhs_hack, rhs_hack) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = jsBitwiseOr$outlinedJsCode$(lhs_hack, rhs_hack);
      tmp$ret$0 = (tmp0_unsafeCast_0 == null ? true : isObject(tmp0_unsafeCast_0)) ? tmp0_unsafeCast_0 : THROW_CCE();
      break $l$block;
    }
    return tmp$ret$0;
  }
  function jsTypeOf(value_hack) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = jsTypeOf$outlinedJsCode$(value_hack);
      tmp$ret$0 = (tmp0_unsafeCast_0 == null ? true : isObject(tmp0_unsafeCast_0)) ? tmp0_unsafeCast_0 : THROW_CCE();
      break $l$block;
    }
    return tmp$ret$0;
  }
  function jsDeleteProperty(obj_hack, property_hack) {
    jsDeleteProperty$outlinedJsCode$(obj_hack, property_hack);
  }
  function jsInstanceOf(obj_hack, jsClass_hack) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = jsInstanceOf$outlinedJsCode$(obj_hack, jsClass_hack);
      tmp$ret$0 = (tmp0_unsafeCast_0 == null ? true : isObject(tmp0_unsafeCast_0)) ? tmp0_unsafeCast_0 : THROW_CCE();
      break $l$block;
    }
    return tmp$ret$0;
  }
  function jsBitwiseAnd(lhs_hack, rhs_hack) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = jsBitwiseAnd$outlinedJsCode$(lhs_hack, rhs_hack);
      tmp$ret$0 = (tmp0_unsafeCast_0 == null ? true : isObject(tmp0_unsafeCast_0)) ? tmp0_unsafeCast_0 : THROW_CCE();
      break $l$block;
    }
    return tmp$ret$0;
  }
  function jsIn$outlinedJsCode$(lhs_hack, rhs_hack) {
    return lhs_hack in rhs_hack;
  }
  function jsBitwiseOr$outlinedJsCode$(lhs_hack, rhs_hack) {
    return lhs_hack | rhs_hack;
  }
  function jsTypeOf$outlinedJsCode$(value_hack) {
    return typeof value_hack;
  }
  function jsDeleteProperty$outlinedJsCode$(obj_hack, property_hack) {
    return delete obj_hack[property_hack];
  }
  function jsInstanceOf$outlinedJsCode$(obj_hack, jsClass_hack) {
    return obj_hack instanceof jsClass_hack;
  }
  function jsBitwiseAnd$outlinedJsCode$(lhs_hack, rhs_hack) {
    return lhs_hack & rhs_hack;
  }
  function None() {
    None_instance = this;
    TraceBase.call(this);
  }
  None.$metadata$ = {
    simpleName: 'None',
    kind: 'object',
    interfaces: []
  };
  var None_instance;
  function None_getInstance() {
    if (None_instance == null)
      new None();
    return None_instance;
  }
  function TraceBase() {
  }
  TraceBase.prototype.atomicfu$Trace$append$1 = function (event) {
  };
  TraceBase.prototype.atomicfu$Trace$append$2 = function (event1, event2) {
  };
  TraceBase.prototype.atomicfu$Trace$append$3 = function (event1, event2, event3) {
  };
  TraceBase.prototype.atomicfu$Trace$append$4 = function (event1, event2, event3, event4) {
  };
  TraceBase.$metadata$ = {
    simpleName: 'TraceBase',
    kind: 'class',
    interfaces: []
  };
  function AtomicRef(value) {
    this._value = value;
  }
  AtomicRef.prototype._set_value__iav7o_k$ = function (_set___) {
    this._value = _set___;
  };
  AtomicRef.prototype._get_value__0_k$ = function () {
    return this._value;
  };
  AtomicRef.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!(this._value === expect))
      return false;
    this._value = update;
    return true;
  };
  AtomicRef.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this._value;
    this._value = value;
    return oldValue;
  };
  AtomicRef.prototype.toString = function () {
    return toString_0(this._value);
  };
  AtomicRef.$metadata$ = {
    simpleName: 'AtomicRef',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(AtomicRef.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicRef.prototype._get_value__0_k$,
    set: AtomicRef.prototype._set_value__iav7o_k$
  });
  function atomic(initial) {
    return atomic_3(initial, None_getInstance());
  }
  function AtomicBoolean(value) {
    this._value_0 = value;
  }
  AtomicBoolean.prototype._set_value__rpwsgn_k$ = function (_set___) {
    this._value_0 = _set___;
  };
  AtomicBoolean.prototype._get_value__0_k$ = function () {
    return this._value_0;
  };
  AtomicBoolean.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!(this._value_0 === expect))
      return false;
    this._value_0 = update;
    return true;
  };
  AtomicBoolean.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this._value_0;
    this._value_0 = value;
    return oldValue;
  };
  AtomicBoolean.prototype.toString = function () {
    return this._value_0.toString();
  };
  AtomicBoolean.$metadata$ = {
    simpleName: 'AtomicBoolean',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(AtomicBoolean.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicBoolean.prototype._get_value__0_k$,
    set: AtomicBoolean.prototype._set_value__rpwsgn_k$
  });
  function atomic_0(initial) {
    return atomic_5(initial, None_getInstance());
  }
  function AtomicInt(value) {
    this._value_1 = value;
  }
  AtomicInt.prototype._set_value__majfzk_k$ = function (_set___) {
    this._value_1 = _set___;
  };
  AtomicInt.prototype._get_value__0_k$ = function () {
    return this._value_1;
  };
  AtomicInt.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!(this._value_1 === expect))
      return false;
    this._value_1 = update;
    return true;
  };
  AtomicInt.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this._value_1;
    this._value_1 = value;
    return oldValue;
  };
  AtomicInt.prototype.atomicfu$getAndIncrement = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this._value_1;
    tmp0_this._value_1 = tmp1 + 1 | 0;
    return tmp1;
  };
  AtomicInt.prototype.atomicfu$getAndDecrement = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this._value_1;
    tmp0_this._value_1 = tmp1 - 1 | 0;
    return tmp1;
  };
  AtomicInt.prototype.atomicfu$getAndAdd = function (delta_0) {
    var oldValue = this._value_1;
    var tmp0_this = this;
    tmp0_this._value_1 = tmp0_this._value_1 + delta_0 | 0;
    return oldValue;
  };
  AtomicInt.prototype.atomicfu$addAndGet = function (delta_0) {
    var tmp0_this = this;
    tmp0_this._value_1 = tmp0_this._value_1 + delta_0 | 0;
    return this._value_1;
  };
  AtomicInt.prototype.atomicfu$incrementAndGet = function () {
    var tmp0_this = this;
    tmp0_this._value_1 = tmp0_this._value_1 + 1 | 0;
    return tmp0_this._value_1;
  };
  AtomicInt.prototype.atomicfu$decrementAndGet = function () {
    var tmp0_this = this;
    tmp0_this._value_1 = tmp0_this._value_1 - 1 | 0;
    return tmp0_this._value_1;
  };
  AtomicInt.prototype.toString = function () {
    return this._value_1.toString();
  };
  AtomicInt.$metadata$ = {
    simpleName: 'AtomicInt',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(AtomicInt.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicInt.prototype._get_value__0_k$,
    set: AtomicInt.prototype._set_value__majfzk_k$
  });
  function atomic_1(initial) {
    return atomic_7(initial, None_getInstance());
  }
  function AtomicLong(value) {
    this._value_2 = value;
  }
  AtomicLong.prototype._set_value__kdfck9_k$ = function (_set___) {
    this._value_2 = _set___;
  };
  AtomicLong.prototype._get_value__0_k$ = function () {
    return this._value_2;
  };
  AtomicLong.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!this._value_2.equals(expect))
      return false;
    this._value_2 = update;
    return true;
  };
  AtomicLong.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this._value_2;
    this._value_2 = value;
    return oldValue;
  };
  AtomicLong.prototype.atomicfu$getAndIncrement$long = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this._value_2;
    tmp0_this._value_2 = tmp1.inc_0_k$();
    return tmp1;
  };
  AtomicLong.prototype.atomicfu$getAndDecrement$long = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this._value_2;
    tmp0_this._value_2 = tmp1.dec_0_k$();
    return tmp1;
  };
  AtomicLong.prototype.atomicfu$getAndAdd$long = function (delta_0) {
    var oldValue = this._value_2;
    var tmp0_this = this;
    tmp0_this._value_2 = tmp0_this._value_2.plus_wiekkq_k$(delta_0);
    return oldValue;
  };
  AtomicLong.prototype.atomicfu$addAndGet$long = function (delta_0) {
    var tmp0_this = this;
    tmp0_this._value_2 = tmp0_this._value_2.plus_wiekkq_k$(delta_0);
    return this._value_2;
  };
  AtomicLong.prototype.atomicfu$incrementAndGet$long = function () {
    var tmp0_this = this;
    tmp0_this._value_2 = tmp0_this._value_2.inc_0_k$();
    return tmp0_this._value_2;
  };
  AtomicLong.prototype.atomicfu$decrementAndGet$long = function () {
    var tmp0_this = this;
    tmp0_this._value_2 = tmp0_this._value_2.dec_0_k$();
    return tmp0_this._value_2;
  };
  AtomicLong.prototype.toString = function () {
    return this._value_2.toString();
  };
  AtomicLong.$metadata$ = {
    simpleName: 'AtomicLong',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(AtomicLong.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicLong.prototype._get_value__0_k$,
    set: AtomicLong.prototype._set_value__kdfck9_k$
  });
  function atomic_2(initial, trace) {
    return atomic_3(initial, trace === void 1 ? None_getInstance() : trace);
  }
  function atomic_3(initial, trace) {
    return new AtomicRef(initial);
  }
  function atomic_4(initial, trace) {
    return atomic_5(initial, trace === void 1 ? None_getInstance() : trace);
  }
  function atomic_5(initial, trace) {
    return new AtomicBoolean(initial);
  }
  function atomic_6(initial, trace) {
    return atomic_7(initial, trace === void 1 ? None_getInstance() : trace);
  }
  function atomic_7(initial, trace) {
    return new AtomicInt(initial);
  }
  function atomic_8(initial, trace) {
    return atomic_9(initial, trace === void 1 ? None_getInstance() : trace);
  }
  function atomic_9(initial, trace) {
    return new AtomicLong(initial);
  }
  function AbstractCoroutine() {
  }
  AbstractCoroutine.$metadata$ = {
    simpleName: 'AbstractCoroutine',
    kind: 'class',
    interfaces: [Job, Continuation, CoroutineScope]
  };
  function CancellableContinuation() {
  }
  CancellableContinuation.$metadata$ = {
    simpleName: 'CancellableContinuation',
    kind: 'interface',
    interfaces: [Continuation]
  };
  function _get_stateDebugRepresentation_($this) {
    var tmp0_subject = $this._get_state__0_k$();
    var tmp;
    if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
      tmp = 'Active';
    } else {
      if (tmp0_subject instanceof CancelledContinuation) {
        tmp = 'Cancelled';
      } else {
        {
          tmp = 'Completed';
        }
      }
    }
    return tmp;
  }
  function isReusable($this) {
    var tmp;
    if (_get_isReusableMode_($this._get_resumeMode__0_k$())) {
      var tmp_0 = $this._delegate;
      tmp = (tmp_0 instanceof DispatchedContinuation ? tmp_0 : THROW_CCE()).isReusable_0_k$();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function cancelLater($this, cause) {
    if (!isReusable($this))
      return false;
    var tmp = $this._delegate;
    var dispatched = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
    return dispatched.postponeCancellation_onfaoi_k$(cause);
  }
  function callCancelHandler($this, handler, cause) {
    var tmp;
    try {
      tmp = invokeIt(handler, cause);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var tmp_1 = $this._get_context__0_k$();
        var tmp_2 = '' + 'Exception in invokeOnCancellation handler for ' + $this;
        tmp_0 = handleCoroutineException(tmp_1, new CompletionHandlerException(tmp_2, $p instanceof Error ? $p : THROW_CCE()));
      } else {
        {
          throw $p;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function trySuspend($this) {
    {
      var tmp0_loop_0 = $this.__decision;
      while (true) {
        {
          var tmp1__anonymous__1 = tmp0_loop_0._value_1;
          var tmp0_subject_2 = tmp1__anonymous__1;
          switch (tmp0_subject_2) {
            case 0:
              if ($this.__decision.atomicfu$compareAndSet(0, 1))
                return true;
              break;
            case 2:
              return false;
            default:throw IllegalStateException_init_$Create$('Already suspended');
          }
        }
      }
      Unit_getInstance();
    }
  }
  function tryResume($this) {
    {
      var tmp0_loop_0 = $this.__decision;
      while (true) {
        {
          var tmp1__anonymous__1 = tmp0_loop_0._value_1;
          var tmp0_subject_2 = tmp1__anonymous__1;
          switch (tmp0_subject_2) {
            case 0:
              if ($this.__decision.atomicfu$compareAndSet(0, 2))
                return true;
              break;
            case 1:
              return false;
            default:throw IllegalStateException_init_$Create$('Already resumed');
          }
        }
      }
      Unit_getInstance();
    }
  }
  function installParentHandle($this) {
    var tmp0_elvis_lhs = $this._get_context__0_k$().get_9uvjra_k$(Key_getInstance_2());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    var tmp$ret$1;
    $l$block_0: {
      var tmp0__get_asHandler__0 = new ChildContinuation($this);
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0__get_asHandler__0;
        break $l$block;
      }
      var tmp_0 = tmp$ret$0;
      tmp$ret$1 = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : THROW_CCE();
      break $l$block_0;
    }
    var handle = parent.invokeOnCompletion$default_n4h7x8_k$(true, false, tmp$ret$1, 2, null);
    $this._parentHandle = handle;
    return handle;
  }
  function releaseClaimedReusableContinuation($this) {
    var tmp = $this._delegate;
    var tmp0_safe_receiver = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.tryReleaseClaimedContinuation_7b8qoa_k$($this);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var cancellationCause = tmp_0;
    $this.detachChild_sv8swh_k$();
    $this.cancel_h62ekz_k$(cancellationCause);
    Unit_getInstance();
  }
  function multipleHandlersError($this, handler, state) {
    {
      var tmp0_error_0 = '' + "It's prohibited to register multiple handlers, tried to register " + handler + ', already has ' + state;
      throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
    }
  }
  function makeCancelHandler($this, handler) {
    var tmp;
    if (handler instanceof CancelHandler) {
      tmp = handler instanceof CancelHandler ? handler : THROW_CCE();
    } else {
      {
        tmp = new InvokeOnCancel(handler);
      }
    }
    return tmp;
  }
  function dispatchResume($this, mode) {
    if (tryResume($this))
      return Unit_getInstance();
    dispatch($this, mode);
  }
  function resumedState($this, state, proposedUpdate, resumeMode, onCancellation, idempotent) {
    var tmp;
    if (proposedUpdate instanceof CompletedExceptionally) {
      {
      }
      {
      }
      tmp = proposedUpdate;
    } else {
      if (!_get_isCancellableMode_(resumeMode) ? idempotent == null : false) {
        tmp = proposedUpdate;
      } else {
        var tmp_0;
        var tmp_1;
        if (!(onCancellation == null)) {
          tmp_1 = true;
        } else {
          var tmp_2;
          if (state instanceof CancelHandler) {
            tmp_2 = !(state instanceof BeforeResumeCancelHandler);
          } else {
            {
              tmp_2 = false;
            }
          }
          tmp_1 = tmp_2;
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          {
            tmp_0 = !(idempotent == null);
          }
        }
        if (tmp_0) {
          var tmp_3 = state instanceof CancelHandler ? state : null;
          tmp = CompletedContinuation_init_$Create$(proposedUpdate, tmp_3, onCancellation, idempotent, null, 16, null);
        } else {
          {
            tmp = proposedUpdate;
          }
        }
      }
    }
    return tmp;
  }
  function resumeImpl($this, proposedUpdate, resumeMode, onCancellation) {
    {
      var tmp0_loop_0 = $this.__state;
      while (true) {
        var tmp$ret$0;
        $l$block: {
          var tmp = tmp0_loop_0._value;
          var tmp1__anonymous__1 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
          var tmp0_subject_2 = tmp1__anonymous__1;
          if (!(tmp0_subject_2 == null) ? isInterface(tmp0_subject_2, NotCompleted) : false) {
            var update_3 = resumedState($this, (!(tmp1__anonymous__1 == null) ? isInterface(tmp1__anonymous__1, NotCompleted) : false) ? tmp1__anonymous__1 : THROW_CCE(), proposedUpdate, resumeMode, onCancellation, null);
            if (!$this.__state.atomicfu$compareAndSet(tmp1__anonymous__1, update_3)) {
              tmp$ret$0 = Unit_getInstance();
              break $l$block;
            }detachChildIfNonResuable($this);
            dispatchResume($this, resumeMode);
            return Unit_getInstance();
          } else {
            if (tmp0_subject_2 instanceof CancelledContinuation) {
              if ((tmp1__anonymous__1 instanceof CancelledContinuation ? tmp1__anonymous__1 : THROW_CCE()).makeResumed_0_k$()) {
                var tmp1_safe_receiver_4 = onCancellation;
                if (tmp1_safe_receiver_4 == null)
                  null;
                else {
                  var tmp$ret$1;
                  $l$block_0: {
                    {
                    }
                    tmp$ret$1 = $this.callOnCancellation_5kfjg_k$(tmp1_safe_receiver_4, (tmp1__anonymous__1 instanceof CancelledContinuation ? tmp1__anonymous__1 : THROW_CCE())._get_cause__0_k$());
                    break $l$block_0;
                  }
                  Unit_getInstance();
                }
                Unit_getInstance();
                return Unit_getInstance();
              } else {
              }
            } else {
            }
          }
          alreadyResumedError($this, proposedUpdate);
        }
      }
      Unit_getInstance();
    }
  }
  function resumeImpl$default($this, proposedUpdate, resumeMode, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      onCancellation = null;
    return resumeImpl($this, proposedUpdate, resumeMode, onCancellation);
  }
  function alreadyResumedError($this, proposedUpdate) {
    {
      var tmp0_error_0 = '' + 'Already resumed, but proposed with update ' + proposedUpdate;
      throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
    }
  }
  function detachChildIfNonResuable($this) {
    if (!isReusable($this))
      $this.detachChild_sv8swh_k$();
  }
  function CancellableContinuationImpl(delegate, resumeMode) {
    DispatchedTask.call(this, resumeMode);
    this._delegate = delegate;
    {
    }
    this._context = this._delegate._get_context__0_k$();
    this.__decision = atomic_1(0);
    this.__state = atomic(Active_getInstance());
    this._parentHandle = null;
  }
  CancellableContinuationImpl.prototype._get_delegate__0_k$ = function () {
    return this._delegate;
  };
  CancellableContinuationImpl.prototype._get_context__0_k$ = function () {
    return this._context;
  };
  CancellableContinuationImpl.prototype._get_state__0_k$ = function () {
    var tmp = this.__state._value;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  CancellableContinuationImpl.prototype._get_isCompleted__0_k$ = function () {
    var tmp = this._get_state__0_k$();
    return !(!(tmp == null) ? isInterface(tmp, NotCompleted) : false);
  };
  CancellableContinuationImpl.prototype.initCancellability_sv8swh_k$ = function () {
    var tmp0_elvis_lhs = installParentHandle(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    if (this._get_isCompleted__0_k$()) {
      handle.dispose_sv8swh_k$();
      this._parentHandle = NonDisposableHandle_getInstance();
    }};
  CancellableContinuationImpl.prototype.takeState_0_k$ = function () {
    return this._get_state__0_k$();
  };
  CancellableContinuationImpl.prototype.cancelCompletedResult_6goujk_k$ = function (takenState, cause) {
    {
      var tmp0_loop_0 = this.__state;
      while (true) {
        {
          var tmp = tmp0_loop_0._value;
          var tmp1__anonymous__1 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
          var tmp0_subject_2 = tmp1__anonymous__1;
          if (!(tmp0_subject_2 == null) ? isInterface(tmp0_subject_2, NotCompleted) : false) {
            throw IllegalStateException_init_$Create$('Not completed');
          } else {
            if (tmp0_subject_2 instanceof CompletedExceptionally)
              return Unit_getInstance();
            else {
              if (tmp0_subject_2 instanceof CompletedContinuation_0) {
                {
                  var tmp0_check_0_3 = !(tmp1__anonymous__1 instanceof CompletedContinuation_0 ? tmp1__anonymous__1 : THROW_CCE())._get_cancelled__0_k$();
                  {
                  }
                  if (!tmp0_check_0_3) {
                    var tmp$ret$0;
                    $l$block: {
                      tmp$ret$0 = 'Must be called at most once';
                      break $l$block;
                    }
                    var message_1_4 = tmp$ret$0;
                    throw IllegalStateException_init_$Create$(toString_1(message_1_4));
                  }}
                var tmp_0 = tmp1__anonymous__1 instanceof CompletedContinuation_0 ? tmp1__anonymous__1 : THROW_CCE();
                var update_5 = tmp_0.copy$default_tn4acp_k$(null, null, null, null, cause, 15, null);
                if (this.__state.atomicfu$compareAndSet(tmp1__anonymous__1, update_5)) {
                  (tmp1__anonymous__1 instanceof CompletedContinuation_0 ? tmp1__anonymous__1 : THROW_CCE()).invokeHandlers_939j49_k$(this, cause);
                  return Unit_getInstance();
                }} else {
                {
                  if (this.__state.atomicfu$compareAndSet(tmp1__anonymous__1, CompletedContinuation_init_$Create$(tmp1__anonymous__1, null, null, null, cause, 14, null))) {
                    return Unit_getInstance();
                  } else {
                  }
                }
              }
            }
          }
        }
      }
      Unit_getInstance();
    }
  };
  CancellableContinuationImpl.prototype.cancel_h62ekz_k$ = function (cause) {
    {
      var tmp0_loop_0 = this.__state;
      while (true) {
        var tmp$ret$0;
        $l$block: {
          var tmp = tmp0_loop_0._value;
          var tmp1__anonymous__1 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
          if (!(!(tmp1__anonymous__1 == null) ? isInterface(tmp1__anonymous__1, NotCompleted) : false))
            return false;
          else {
          }
          var update_2 = new CancelledContinuation(this, cause, tmp1__anonymous__1 instanceof CancelHandler);
          if (!this.__state.atomicfu$compareAndSet(tmp1__anonymous__1, update_2)) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          }var tmp0_safe_receiver_3 = tmp1__anonymous__1 instanceof CancelHandler ? tmp1__anonymous__1 : null;
          if (tmp0_safe_receiver_3 == null)
            null;
          else {
            var tmp$ret$1;
            $l$block_0: {
              {
              }
              tmp$ret$1 = this.callCancelHandler_yvykkv_k$(tmp0_safe_receiver_3, cause);
              break $l$block_0;
            }
            Unit_getInstance();
          }
          Unit_getInstance();
          detachChildIfNonResuable(this);
          dispatchResume(this, this._get_resumeMode__0_k$());
          return true;
        }
      }
      Unit_getInstance();
    }
  };
  CancellableContinuationImpl.prototype.parentCancelled_1ti8hr_k$ = function (cause) {
    if (cancelLater(this, cause))
      return Unit_getInstance();
    this.cancel_h62ekz_k$(cause);
    Unit_getInstance();
    detachChildIfNonResuable(this);
  };
  CancellableContinuationImpl.prototype.callCancelHandler_yvykkv_k$ = function (handler, cause) {
    var tmp;
    try {
      tmp = handler.invoke(cause);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var tmp_1 = this._get_context__0_k$();
        var tmp_2 = '' + 'Exception in invokeOnCancellation handler for ' + this;
        tmp_0 = handleCoroutineException(tmp_1, new CompletionHandlerException(tmp_2, $p instanceof Error ? $p : THROW_CCE()));
      } else {
        {
          throw $p;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.callOnCancellation_5kfjg_k$ = function (onCancellation, cause) {
    try {
      onCancellation(cause);
    } catch ($p) {
      if ($p instanceof Error) {
        var tmp = this._get_context__0_k$();
        var tmp_0 = '' + 'Exception in resume onCancellation handler for ' + this;
        handleCoroutineException(tmp, new CompletionHandlerException(tmp_0, $p instanceof Error ? $p : THROW_CCE()));
      } else {
        {
          throw $p;
        }
      }
    }
  };
  CancellableContinuationImpl.prototype.getContinuationCancellationCause_jfubq8_k$ = function (parent) {
    return parent.getCancellationException_0_k$();
  };
  CancellableContinuationImpl.prototype.getResult_0_k$ = function () {
    var isReusable_0 = isReusable(this);
    if (trySuspend(this)) {
      if (this._parentHandle == null) {
        installParentHandle(this);
        Unit_getInstance();
      }if (isReusable_0) {
        releaseClaimedReusableContinuation(this);
      }return _get_COROUTINE_SUSPENDED_();
    }if (isReusable_0) {
      releaseClaimedReusableContinuation(this);
    }var state = this._get_state__0_k$();
    if (state instanceof CompletedExceptionally) {
      throw recoverStackTrace((state instanceof CompletedExceptionally ? state : THROW_CCE())._cause, this);
    } else {
    }
    if (_get_isCancellableMode_(this._get_resumeMode__0_k$())) {
      var job = this._get_context__0_k$().get_9uvjra_k$(Key_getInstance_2());
      if (!(job == null) ? !job._get_isActive__0_k$() : false) {
        var cause = job.getCancellationException_0_k$();
        this.cancelCompletedResult_6goujk_k$(state, cause);
        throw recoverStackTrace(cause, this);
      }}return this.getSuccessfulResult_6jiqgr_k$(state);
  };
  CancellableContinuationImpl.prototype.resumeWith_bnunh2_k$ = function (result) {
    var tmp = toState(result, this);
    var tmp_0 = this._get_resumeMode__0_k$();
    return resumeImpl$default(this, tmp, tmp_0, null, 8, null);
  };
  CancellableContinuationImpl.prototype.invokeOnCancellation_aip8gd_k$ = function (handler) {
    var cancelHandler = makeCancelHandler(this, handler);
    {
      var tmp0_loop_0 = this.__state;
      while (true) {
        {
          var tmp = tmp0_loop_0._value;
          var tmp1__anonymous__1 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
          var tmp0_subject_2 = tmp1__anonymous__1;
          if (tmp0_subject_2 instanceof Active) {
            if (this.__state.atomicfu$compareAndSet(tmp1__anonymous__1, cancelHandler))
              return Unit_getInstance();
          } else {
            if (tmp0_subject_2 instanceof CancelHandler)
              multipleHandlersError(this, handler, tmp1__anonymous__1);
            else {
              if (tmp0_subject_2 instanceof CompletedExceptionally) {
                if (!(tmp1__anonymous__1 instanceof CompletedExceptionally ? tmp1__anonymous__1 : THROW_CCE()).makeHandled_0_k$())
                  multipleHandlersError(this, handler, tmp1__anonymous__1);
                else {
                }
                if (tmp1__anonymous__1 instanceof CancelledContinuation) {
                  var tmp1_safe_receiver_3 = tmp1__anonymous__1 instanceof CompletedExceptionally ? tmp1__anonymous__1 : null;
                  callCancelHandler(this, handler, tmp1_safe_receiver_3 == null ? null : tmp1_safe_receiver_3._cause);
                } else {
                }
                return Unit_getInstance();
              } else {
                if (tmp0_subject_2 instanceof CompletedContinuation_0) {
                  if (!((tmp1__anonymous__1 instanceof CompletedContinuation_0 ? tmp1__anonymous__1 : THROW_CCE())._cancelHandler == null))
                    multipleHandlersError(this, handler, tmp1__anonymous__1);
                  else {
                  }
                  if (cancelHandler instanceof BeforeResumeCancelHandler)
                    return Unit_getInstance();
                  else {
                  }
                  if ((tmp1__anonymous__1 instanceof CompletedContinuation_0 ? tmp1__anonymous__1 : THROW_CCE())._get_cancelled__0_k$()) {
                    callCancelHandler(this, handler, (tmp1__anonymous__1 instanceof CompletedContinuation_0 ? tmp1__anonymous__1 : THROW_CCE())._cancelCause);
                    return Unit_getInstance();
                  } else {
                  }
                  var tmp_0 = tmp1__anonymous__1 instanceof CompletedContinuation_0 ? tmp1__anonymous__1 : THROW_CCE();
                  var update_4 = tmp_0.copy$default_tn4acp_k$(null, cancelHandler, null, null, null, 29, null);
                  if (this.__state.atomicfu$compareAndSet(tmp1__anonymous__1, update_4))
                    return Unit_getInstance();
                } else {
                  {
                    if (cancelHandler instanceof BeforeResumeCancelHandler)
                      return Unit_getInstance();
                    else {
                    }
                    var update_5 = CompletedContinuation_init_$Create$(tmp1__anonymous__1, cancelHandler, null, null, null, 28, null);
                    if (this.__state.atomicfu$compareAndSet(tmp1__anonymous__1, update_5))
                      return Unit_getInstance();
                  }
                }
              }
            }
          }
        }
      }
      Unit_getInstance();
    }
  };
  CancellableContinuationImpl.prototype.detachChild_sv8swh_k$ = function () {
    var tmp0_elvis_lhs = this._parentHandle;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    handle.dispose_sv8swh_k$();
    this._parentHandle = NonDisposableHandle_getInstance();
  };
  CancellableContinuationImpl.prototype.resumeUndispatched_eocpx4_k$ = function (_this__0, value) {
    var tmp = this._delegate;
    var dc = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp_0;
    var tmp0_safe_receiver = dc;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver._dispatcher) === _this__0) {
      tmp_0 = 4;
    } else {
      {
        tmp_0 = this._get_resumeMode__0_k$();
      }
    }
    var tmp_1 = tmp_0;
    resumeImpl$default(this, value, tmp_1, null, 8, null);
  };
  CancellableContinuationImpl.prototype.getSuccessfulResult_6jiqgr_k$ = function (state) {
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof CompletedContinuation_0) {
      var tmp_0 = (state instanceof CompletedContinuation_0 ? state : THROW_CCE())._result_0;
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    } else {
      {
        tmp = (state == null ? true : isObject(state)) ? state : THROW_CCE();
      }
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.getExceptionalResult_wi7j7l_k$ = function (state) {
    var tmp0_safe_receiver = DispatchedTask.prototype.getExceptionalResult_wi7j7l_k$.call(this, state);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      $l$block_0: {
        {
        }
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = recoverStackTrace(tmp0_safe_receiver, this._delegate);
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.toString = function () {
    return '' + this.nameString_0_k$() + '(' + toDebugString(this._delegate) + '){' + _get_stateDebugRepresentation_(this) + '}@' + _get_hexAddress_(this);
  };
  CancellableContinuationImpl.prototype.nameString_0_k$ = function () {
    return 'CancellableContinuation';
  };
  CancellableContinuationImpl.$metadata$ = {
    simpleName: 'CancellableContinuationImpl',
    kind: 'class',
    interfaces: [CancellableContinuation, CoroutineStackFrame]
  };
  function CancelHandler() {
    CancelHandlerBase.call(this);
  }
  CancelHandler.$metadata$ = {
    simpleName: 'CancelHandler',
    kind: 'class',
    interfaces: [NotCompleted]
  };
  function Active() {
    Active_instance = this;
  }
  Active.prototype.toString = function () {
    return 'Active';
  };
  Active.$metadata$ = {
    simpleName: 'Active',
    kind: 'object',
    interfaces: [NotCompleted]
  };
  var Active_instance;
  function Active_getInstance() {
    if (Active_instance == null)
      new Active();
    return Active_instance;
  }
  function NotCompleted() {
  }
  NotCompleted.$metadata$ = {
    simpleName: 'NotCompleted',
    kind: 'interface',
    interfaces: []
  };
  function CompletedContinuation_init_$Init$(result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      cancelHandler = null;
    if (!(($mask0 & 4) === 0))
      onCancellation = null;
    if (!(($mask0 & 8) === 0))
      idempotentResume = null;
    if (!(($mask0 & 16) === 0))
      cancelCause = null;
    CompletedContinuation_0.call($this, result, cancelHandler, onCancellation, idempotentResume, cancelCause);
    return $this;
  }
  function CompletedContinuation_init_$Create$(result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $marker) {
    return CompletedContinuation_init_$Init$(result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $marker, Object.create(CompletedContinuation_0.prototype));
  }
  function CompletedContinuation_0(result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    this._result_0 = result;
    this._cancelHandler = cancelHandler;
    this._onCancellation = onCancellation;
    this._idempotentResume = idempotentResume;
    this._cancelCause = cancelCause;
  }
  CompletedContinuation_0.prototype._get_cancelled__0_k$ = function () {
    return !(this._cancelCause == null);
  };
  CompletedContinuation_0.prototype.invokeHandlers_939j49_k$ = function (cont, cause) {
    var tmp0_safe_receiver = this._cancelHandler;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      $l$block: {
        {
        }
        tmp$ret$0 = cont.callCancelHandler_yvykkv_k$(tmp0_safe_receiver, cause);
        break $l$block;
      }
      Unit_getInstance();
    }
    Unit_getInstance();
    var tmp1_safe_receiver = this._onCancellation;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      $l$block_0: {
        {
        }
        tmp$ret$1 = cont.callOnCancellation_5kfjg_k$(tmp1_safe_receiver, cause);
        break $l$block_0;
      }
      Unit_getInstance();
    }
    Unit_getInstance();
  };
  CompletedContinuation_0.prototype.copy_wkt0jr_k$ = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    return new CompletedContinuation_0(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  CompletedContinuation_0.prototype.copy$default_tn4acp_k$ = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      result = this._result_0;
    if (!(($mask0 & 2) === 0))
      cancelHandler = this._cancelHandler;
    if (!(($mask0 & 4) === 0))
      onCancellation = this._onCancellation;
    if (!(($mask0 & 8) === 0))
      idempotentResume = this._idempotentResume;
    if (!(($mask0 & 16) === 0))
      cancelCause = this._cancelCause;
    return this.copy_wkt0jr_k$(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  CompletedContinuation_0.prototype.toString = function () {
    return '' + 'CompletedContinuation(result=' + this._result_0 + ', cancelHandler=' + this._cancelHandler + ', onCancellation=' + this._onCancellation + ', idempotentResume=' + this._idempotentResume + ', cancelCause=' + this._cancelCause + ')';
  };
  CompletedContinuation_0.prototype.hashCode = function () {
    var result = this._result_0 == null ? 0 : hashCode(this._result_0);
    result = imul(result, 31) + (this._cancelHandler == null ? 0 : hashCode(this._cancelHandler)) | 0;
    result = imul(result, 31) + (this._onCancellation == null ? 0 : hashCode(this._onCancellation)) | 0;
    result = imul(result, 31) + (this._idempotentResume == null ? 0 : hashCode(this._idempotentResume)) | 0;
    result = imul(result, 31) + (this._cancelCause == null ? 0 : hashCode(this._cancelCause)) | 0;
    return result;
  };
  CompletedContinuation_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedContinuation_0))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof CompletedContinuation_0 ? other : THROW_CCE();
    if (!equals(this._result_0, tmp0_other_with_cast._result_0))
      return false;
    if (!equals(this._cancelHandler, tmp0_other_with_cast._cancelHandler))
      return false;
    if (!equals(this._onCancellation, tmp0_other_with_cast._onCancellation))
      return false;
    if (!equals(this._idempotentResume, tmp0_other_with_cast._idempotentResume))
      return false;
    if (!equals(this._cancelCause, tmp0_other_with_cast._cancelCause))
      return false;
    return true;
  };
  CompletedContinuation_0.$metadata$ = {
    simpleName: 'CompletedContinuation',
    kind: 'class',
    interfaces: []
  };
  function BeforeResumeCancelHandler() {
  }
  BeforeResumeCancelHandler.$metadata$ = {
    simpleName: 'BeforeResumeCancelHandler',
    kind: 'class',
    interfaces: []
  };
  function InvokeOnCancel(handler) {
    CancelHandler.call(this);
    this._handler = handler;
  }
  InvokeOnCancel.prototype.invoke_houul8_k$ = function (cause) {
    this._handler(cause);
  };
  InvokeOnCancel.prototype.invoke = function (cause) {
    return this.invoke_houul8_k$(cause);
  };
  InvokeOnCancel.prototype.toString = function () {
    return '' + 'InvokeOnCancel[' + _get_classSimpleName_(this._handler) + '@' + _get_hexAddress_(this) + ']';
  };
  InvokeOnCancel.$metadata$ = {
    simpleName: 'InvokeOnCancel',
    kind: 'class',
    interfaces: []
  };
  function CompletableJob() {
  }
  CompletableJob.$metadata$ = {
    simpleName: 'CompletableJob',
    kind: 'interface',
    interfaces: [Job]
  };
  function CompletedExceptionally_init_$Init$(cause, handled, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      handled = false;
    CompletedExceptionally.call($this, cause, handled);
    return $this;
  }
  function CompletedExceptionally_init_$Create$(cause, handled, $mask0, $marker) {
    return CompletedExceptionally_init_$Init$(cause, handled, $mask0, $marker, Object.create(CompletedExceptionally.prototype));
  }
  function CompletedExceptionally(cause, handled) {
    this._cause = cause;
    this.__handled = atomic_0(handled);
  }
  CompletedExceptionally.prototype._get_cause__0_k$ = function () {
    return this._cause;
  };
  CompletedExceptionally.prototype.makeHandled_0_k$ = function () {
    return this.__handled.atomicfu$compareAndSet(false, true);
  };
  CompletedExceptionally.prototype.toString = function () {
    return '' + _get_classSimpleName_(this) + '[' + this._cause + ']';
  };
  CompletedExceptionally.$metadata$ = {
    simpleName: 'CompletedExceptionally',
    kind: 'class',
    interfaces: []
  };
  function CancelledContinuation(continuation, cause, handled) {
    var tmp0_elvis_lhs = cause;
    CompletedExceptionally.call(this, tmp0_elvis_lhs == null ? CancellationException_init_$Create$('' + 'Continuation ' + continuation + ' was cancelled normally') : tmp0_elvis_lhs, handled);
    this.__resumed = atomic_0(false);
  }
  CancelledContinuation.prototype.makeResumed_0_k$ = function () {
    return this.__resumed.atomicfu$compareAndSet(false, true);
  };
  CancelledContinuation.$metadata$ = {
    simpleName: 'CancelledContinuation',
    kind: 'class',
    interfaces: []
  };
  function toState(_this_, caller) {
    var tmp$ret$2;
    $l$block_1: {
      {
      }
      var exception_1 = Result__exceptionOrNull_impl(_this_);
      var tmp;
      if (exception_1 == null) {
        var tmp$ret$0;
        $l$block: {
          var tmp_0 = _Result___get_value__impl_(_this_);
          var tmp0__anonymous__2 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
          tmp$ret$0 = tmp0__anonymous__2;
          break $l$block;
        }
        tmp = tmp$ret$0;
      } else {
        var tmp$ret$1;
        $l$block_0: {
          var tmp_1 = recoverStackTrace(exception_1, caller);
          tmp$ret$1 = CompletedExceptionally_init_$Create$(tmp_1, false, 2, null);
          break $l$block_0;
        }
        tmp = tmp$ret$1;
      }
      tmp$ret$2 = tmp;
      break $l$block_1;
    }
    return tmp$ret$2;
  }
  function toState_0(_this_, onCancellation) {
    var tmp$ret$2;
    $l$block_1: {
      {
      }
      var exception_1 = Result__exceptionOrNull_impl(_this_);
      var tmp;
      if (exception_1 == null) {
        var tmp$ret$0;
        $l$block: {
          var tmp_0 = _Result___get_value__impl_(_this_);
          var tmp0__anonymous__2 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
          tmp$ret$0 = !(onCancellation == null) ? new CompletedWithCancellation(tmp0__anonymous__2, onCancellation) : tmp0__anonymous__2;
          break $l$block;
        }
        tmp = tmp$ret$0;
      } else {
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = CompletedExceptionally_init_$Create$(exception_1, false, 2, null);
          break $l$block_0;
        }
        tmp = tmp$ret$1;
      }
      tmp$ret$2 = tmp;
      break $l$block_1;
    }
    return tmp$ret$2;
  }
  function toState$default(_this_, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      onCancellation = null;
    return toState_0(_this_, onCancellation);
  }
  function CompletedWithCancellation(result, onCancellation) {
    this._result_1 = result;
    this._onCancellation_0 = onCancellation;
  }
  CompletedWithCancellation.prototype.toString = function () {
    return '' + 'CompletedWithCancellation(result=' + this._result_1 + ', onCancellation=' + this._onCancellation_0 + ')';
  };
  CompletedWithCancellation.prototype.hashCode = function () {
    var result = this._result_1 == null ? 0 : hashCode(this._result_1);
    result = imul(result, 31) + hashCode(this._onCancellation_0) | 0;
    return result;
  };
  CompletedWithCancellation.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedWithCancellation))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof CompletedWithCancellation ? other : THROW_CCE();
    if (!equals(this._result_1, tmp0_other_with_cast._result_1))
      return false;
    if (!equals(this._onCancellation_0, tmp0_other_with_cast._onCancellation_0))
      return false;
    return true;
  };
  CompletedWithCancellation.$metadata$ = {
    simpleName: 'CompletedWithCancellation',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__25() {
  }
  _no_name_provided__25.prototype.invoke_k332zt_k$ = function (it) {
    return it instanceof CoroutineDispatcher ? it : null;
  };
  _no_name_provided__25.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_k332zt_k$((!(p1 == null) ? isInterface(p1, Element_0) : false) ? p1 : THROW_CCE());
  };
  _no_name_provided__25.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function Key_1() {
    Key_instance_0 = this;
    var tmp = Key_getInstance();
    AbstractCoroutineContextKey.call(this, tmp, _no_name_provided_$factory_22());
  }
  Key_1.$metadata$ = {
    simpleName: 'Key',
    kind: 'object',
    interfaces: []
  };
  var Key_instance_0;
  function Key_getInstance_0() {
    if (Key_instance_0 == null)
      new Key_1();
    return Key_instance_0;
  }
  function CoroutineDispatcher() {
    Key_getInstance_0();
    AbstractCoroutineContextElement.call(this, Key_getInstance());
  }
  CoroutineDispatcher.prototype.isDispatchNeeded_d7pszg_k$ = function (context) {
    return true;
  };
  CoroutineDispatcher.prototype.interceptContinuation_x4ijla_k$ = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  CoroutineDispatcher.prototype.releaseInterceptedContinuation_h7c6yl_k$ = function (continuation) {
    var dispatched = continuation instanceof DispatchedContinuation ? continuation : THROW_CCE();
    dispatched.release_sv8swh_k$();
  };
  CoroutineDispatcher.prototype.toString = function () {
    return '' + _get_classSimpleName_(this) + '@' + _get_hexAddress_(this);
  };
  CoroutineDispatcher.$metadata$ = {
    simpleName: 'CoroutineDispatcher',
    kind: 'class',
    interfaces: [ContinuationInterceptor]
  };
  function _no_name_provided_$factory_22() {
    var i = new _no_name_provided__25();
    return function (p1) {
      return i.invoke_k332zt_k$(p1);
    };
  }
  function handleCoroutineException(context, exception) {
    try {
      var tmp0_safe_receiver = context.get_9uvjra_k$(Key_getInstance_1());
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        {
          {
          }
          tmp0_safe_receiver.handleException_ym78xn_k$(context, exception);
          return Unit_getInstance();
        }
      }
      Unit_getInstance();
    } catch ($p) {
      if ($p instanceof Error) {
        handleCoroutineExceptionImpl(context, handlerException(exception, $p instanceof Error ? $p : THROW_CCE()));
        return Unit_getInstance();
      } else {
        {
          throw $p;
        }
      }
    }
    handleCoroutineExceptionImpl(context, exception);
  }
  function Key_2() {
    Key_instance_1 = this;
  }
  Key_2.$metadata$ = {
    simpleName: 'Key',
    kind: 'object',
    interfaces: [Key_0]
  };
  var Key_instance_1;
  function Key_getInstance_1() {
    if (Key_instance_1 == null)
      new Key_2();
    return Key_instance_1;
  }
  function handlerException(originalException, thrownException) {
    if (originalException === thrownException)
      return originalException;
    var tmp$ret$0;
    $l$block: {
      var tmp0_apply_0 = RuntimeException_init_$Create$('Exception while trying to handle coroutine exception', thrownException);
      {
      }
      {
        {
        }
      }
      tmp$ret$0 = tmp0_apply_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function CoroutineScope() {
  }
  CoroutineScope.$metadata$ = {
    simpleName: 'CoroutineScope',
    kind: 'interface',
    interfaces: []
  };
  function CopyableThrowable() {
  }
  CopyableThrowable.$metadata$ = {
    simpleName: 'CopyableThrowable',
    kind: 'interface',
    interfaces: []
  };
  function delay(timeMillis, $cont) {
    if (timeMillis.compareTo_wiekkq_k$(new Long(0, 0)) <= 0)
      return Unit_getInstance();
    var tmp$ret$0;
    $l$block: {
      var tmp0__anonymous__1_1 = $cont;
      var cancellable_2_2 = new CancellableContinuationImpl(intercepted(tmp0__anonymous__1_1), 1);
      cancellable_2_2.initCancellability_sv8swh_k$();
      {
        Companion_getInstance_4();
        if (timeMillis.compareTo_wiekkq_k$(new Long(-1, 2147483647)) < 0) {
          _get_delay_(cancellable_2_2._get_context__0_k$()).scheduleResumeAfterDelay_tkxym4_k$(timeMillis, cancellable_2_2);
        } else {
        }
      }
      tmp$ret$0 = cancellable_2_2.getResult_0_k$();
      break $l$block;
    }
    return tmp$ret$0;
  }
  function Delay() {
  }
  Delay.$metadata$ = {
    simpleName: 'Delay',
    kind: 'interface',
    interfaces: []
  };
  function _get_delay_(_this_) {
    var tmp = _this_.get_9uvjra_k$(Key_getInstance());
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, Delay) : false) ? tmp : null;
    return tmp0_elvis_lhs == null ? _get_DefaultDelay_() : tmp0_elvis_lhs;
  }
  function delta($this, unconfined) {
    return unconfined ? new Long(0, 1) : new Long(1, 0);
  }
  function EventLoop() {
    CoroutineDispatcher.call(this);
    this._useCount = new Long(0, 0);
    this._shared = false;
    this._unconfinedQueue = null;
  }
  EventLoop.prototype.processUnconfinedEvent_0_k$ = function () {
    var tmp0_elvis_lhs = this._unconfinedQueue;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    var tmp1_elvis_lhs = queue.removeFirstOrNull_0_k$();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var task = tmp_0;
    task.run_sv8swh_k$();
    return true;
  };
  EventLoop.prototype.dispatchUnconfined_3yrun8_k$ = function (task) {
    var tmp0_elvis_lhs = this._unconfinedQueue;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_also_0 = new ArrayQueue();
        {
        }
        {
          this._unconfinedQueue = tmp0_also_0;
        }
        tmp$ret$0 = tmp0_also_0;
        break $l$block;
      }
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    queue.addLast_iav7o_k$(task);
  };
  EventLoop.prototype._get_isUnconfinedLoopActive__0_k$ = function () {
    return this._useCount.compareTo_wiekkq_k$(delta(this, true)) >= 0;
  };
  EventLoop.prototype._get_isUnconfinedQueueEmpty__0_k$ = function () {
    var tmp0_safe_receiver = this._unconfinedQueue;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_isEmpty__0_k$();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  };
  EventLoop.prototype.incrementUseCount_rpwsgn_k$ = function (unconfined) {
    var tmp0_this = this;
    tmp0_this._useCount = tmp0_this._useCount.plus_wiekkq_k$(delta(this, unconfined));
    if (!unconfined)
      this._shared = true;
  };
  EventLoop.prototype.decrementUseCount_rpwsgn_k$ = function (unconfined) {
    var tmp0_this = this;
    tmp0_this._useCount = tmp0_this._useCount.minus_wiekkq_k$(delta(this, unconfined));
    if (this._useCount.compareTo_wiekkq_k$(new Long(0, 0)) > 0)
      return Unit_getInstance();
    {
    }
    if (this._shared) {
      this.shutdown_sv8swh_k$();
    }};
  EventLoop.prototype.shutdown_sv8swh_k$ = function () {
  };
  EventLoop.$metadata$ = {
    simpleName: 'EventLoop',
    kind: 'class',
    interfaces: []
  };
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this._ref = new CommonThreadLocal();
  }
  ThreadLocalEventLoop.prototype._get_eventLoop__0_k$ = function () {
    var tmp0_elvis_lhs = this._ref.get_0_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_also_0 = createEventLoop();
        {
        }
        {
          ThreadLocalEventLoop_getInstance()._ref.set_iav7o_k$(tmp0_also_0);
        }
        tmp$ret$0 = tmp0_also_0;
        break $l$block;
      }
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  ThreadLocalEventLoop.$metadata$ = {
    simpleName: 'ThreadLocalEventLoop',
    kind: 'object',
    interfaces: []
  };
  var ThreadLocalEventLoop_instance;
  function ThreadLocalEventLoop_getInstance() {
    if (ThreadLocalEventLoop_instance == null)
      new ThreadLocalEventLoop();
    return ThreadLocalEventLoop_instance;
  }
  function CompletionHandlerException(message, cause) {
    RuntimeException_init_$Init$_1(message, cause, this);
    captureStack(this, CompletionHandlerException);
  }
  CompletionHandlerException.$metadata$ = {
    simpleName: 'CompletionHandlerException',
    kind: 'class',
    interfaces: []
  };
  function CoroutinesInternalError(message, cause) {
    Error_init_$Init$(message, cause, this);
    captureStack(this, CoroutinesInternalError);
  }
  CoroutinesInternalError.$metadata$ = {
    simpleName: 'CoroutinesInternalError',
    kind: 'class',
    interfaces: []
  };
  function DisposableHandle() {
  }
  DisposableHandle.$metadata$ = {
    simpleName: 'DisposableHandle',
    kind: 'interface',
    interfaces: []
  };
  function Key_3() {
    Key_instance_2 = this;
  }
  Key_3.$metadata$ = {
    simpleName: 'Key',
    kind: 'object',
    interfaces: [Key_0]
  };
  var Key_instance_2;
  function Key_getInstance_2() {
    if (Key_instance_2 == null)
      new Key_3();
    return Key_instance_2;
  }
  function Job() {
  }
  Job.prototype.invokeOnCompletion$default_n4h7x8_k$ = function (onCancelling, invokeImmediately, handler, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      onCancelling = false;
    if (!(($mask0 & 2) === 0))
      invokeImmediately = true;
    var tmp;
    if ($handler == null) {
      tmp = this.invokeOnCompletion_431mg2_k$(onCancelling, invokeImmediately, handler);
    } else {
      tmp = ((!($handler == null) ? typeof $handler === 'function' : false) ? $handler : THROW_CCE())(onCancelling, invokeImmediately, handler);
    }
    return tmp;
  };
  Job.$metadata$ = {
    simpleName: 'Job',
    kind: 'interface',
    interfaces: [Element_0]
  };
  function ChildJob() {
  }
  ChildJob.$metadata$ = {
    simpleName: 'ChildJob',
    kind: 'interface',
    interfaces: [Job]
  };
  function ParentJob() {
  }
  ParentJob.$metadata$ = {
    simpleName: 'ParentJob',
    kind: 'interface',
    interfaces: [Job]
  };
  function ChildHandle() {
  }
  ChildHandle.$metadata$ = {
    simpleName: 'ChildHandle',
    kind: 'interface',
    interfaces: [DisposableHandle]
  };
  function NonDisposableHandle() {
    NonDisposableHandle_instance = this;
  }
  NonDisposableHandle.prototype._get_parent__0_k$ = function () {
    return null;
  };
  NonDisposableHandle.prototype.dispose_sv8swh_k$ = function () {
  };
  NonDisposableHandle.prototype.childCancelled_onfaoi_k$ = function (cause) {
    return false;
  };
  NonDisposableHandle.prototype.toString = function () {
    return 'NonDisposableHandle';
  };
  NonDisposableHandle.$metadata$ = {
    simpleName: 'NonDisposableHandle',
    kind: 'object',
    interfaces: [DisposableHandle, ChildHandle]
  };
  var NonDisposableHandle_instance;
  function NonDisposableHandle_getInstance() {
    if (NonDisposableHandle_instance == null)
      new NonDisposableHandle();
    return NonDisposableHandle_instance;
  }
  function ensureActive(_this_) {
    var tmp0_safe_receiver = _this_.get_9uvjra_k$(Key_getInstance_2());
    if (tmp0_safe_receiver == null)
      null;
    else {
      ensureActive_0(tmp0_safe_receiver);
      Unit_getInstance();
    }
    Unit_getInstance();
  }
  function ensureActive_0(_this_) {
    if (!_this_._get_isActive__0_k$())
      throw _this_.getCancellationException_0_k$();
  }
  function _get_COMPLETING_ALREADY_() {
    init_properties_JobSupport_kt();
    return COMPLETING_ALREADY;
  }
  var COMPLETING_ALREADY;
  function _get_COMPLETING_WAITING_CHILDREN_() {
    init_properties_JobSupport_kt();
    return COMPLETING_WAITING_CHILDREN;
  }
  var COMPLETING_WAITING_CHILDREN;
  function _get_COMPLETING_RETRY_() {
    init_properties_JobSupport_kt();
    return COMPLETING_RETRY;
  }
  var COMPLETING_RETRY;
  function _get_TOO_LATE_TO_CANCEL_() {
    init_properties_JobSupport_kt();
    return TOO_LATE_TO_CANCEL;
  }
  var TOO_LATE_TO_CANCEL;
  function _get_SEALED_() {
    init_properties_JobSupport_kt();
    return SEALED;
  }
  var SEALED;
  function _get_EMPTY_NEW_() {
    init_properties_JobSupport_kt();
    return EMPTY_NEW;
  }
  var EMPTY_NEW;
  function _get_EMPTY_ACTIVE_() {
    init_properties_JobSupport_kt();
    return EMPTY_ACTIVE;
  }
  var EMPTY_ACTIVE;
  function Empty(isActive) {
    this._isActive = isActive;
  }
  Empty.prototype._get_isActive__0_k$ = function () {
    return this._isActive;
  };
  Empty.prototype._get_list__0_k$ = function () {
    return null;
  };
  Empty.prototype.toString = function () {
    return '' + 'Empty{' + (this._isActive ? 'Active' : 'New') + '}';
  };
  Empty.$metadata$ = {
    simpleName: 'Empty',
    kind: 'class',
    interfaces: [Incomplete]
  };
  function Incomplete() {
  }
  Incomplete.$metadata$ = {
    simpleName: 'Incomplete',
    kind: 'interface',
    interfaces: []
  };
  function NodeList_0() {
    LinkedListHead.call(this);
  }
  NodeList_0.prototype._get_isActive__0_k$ = function () {
    return true;
  };
  NodeList_0.prototype._get_list__0_k$ = function () {
    return this;
  };
  NodeList_0.prototype.getString_6wfw3l_k$ = function (state) {
    var tmp$ret$1;
    $l$block_0: {
      {
      }
      var tmp$ret$0;
      $l$block: {
        var tmp0_apply_0_1 = StringBuilder_init_$Create$();
        {
        }
        {
          tmp0_apply_0_1.append_uch40_k$('List{');
          Unit_getInstance();
          tmp0_apply_0_1.append_uch40_k$(state);
          Unit_getInstance();
          tmp0_apply_0_1.append_uch40_k$('}[');
          Unit_getInstance();
          var first_3 = true;
          {
            var cur_1_4 = this._get__next__0_k$();
            while (!equals(cur_1_4, this)) {
              if (cur_1_4 instanceof JobNode) {
                var tmp0__anonymous__2_5 = cur_1_4 instanceof JobNode ? cur_1_4 : THROW_CCE();
                if (first_3)
                  first_3 = false;
                else {
                  tmp0_apply_0_1.append_uch40_k$(', ');
                  Unit_getInstance();
                }
                tmp0_apply_0_1.append_wi7j7l_k$(tmp0__anonymous__2_5);
                Unit_getInstance();
              } else {
              }
              cur_1_4 = cur_1_4.__next;
            }
          }
          tmp0_apply_0_1.append_uch40_k$(']');
          Unit_getInstance();
        }
        tmp$ret$0 = tmp0_apply_0_1;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0.toString();
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  NodeList_0.prototype.toString = function () {
    return DEBUG ? this.getString_6wfw3l_k$('Active') : anyToString(this);
  };
  NodeList_0.$metadata$ = {
    simpleName: 'NodeList',
    kind: 'class',
    interfaces: [Incomplete]
  };
  function JobNode() {
    CompletionHandlerBase.call(this);
  }
  JobNode.prototype._get_job__0_k$ = function () {
    var tmp = this._job;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('job');
    }
  };
  JobNode.prototype._get_isActive__0_k$ = function () {
    return true;
  };
  JobNode.prototype._get_list__0_k$ = function () {
    return null;
  };
  JobNode.prototype.dispose_sv8swh_k$ = function () {
    return this._get_job__0_k$().removeNode_2kg835_k$(this);
  };
  JobNode.prototype.toString = function () {
    return '' + _get_classSimpleName_(this) + '@' + _get_hexAddress_(this) + '[job@' + _get_hexAddress_(this._get_job__0_k$()) + ']';
  };
  JobNode.$metadata$ = {
    simpleName: 'JobNode',
    kind: 'class',
    interfaces: [DisposableHandle, Incomplete]
  };
  function _set_exceptionsHolder_($this, value) {
    $this.__exceptionsHolder._value = value;
  }
  function _get_exceptionsHolder_($this) {
    var tmp = $this.__exceptionsHolder._value;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  }
  function allocateList($this) {
    return ArrayList_init_$Create$(4);
  }
  function finalizeFinishingState($this, state, proposedUpdate) {
    {
    }
    {
    }
    {
    }
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    var proposedException = tmp0_safe_receiver == null ? null : tmp0_safe_receiver._cause;
    var wasCancelling = false;
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        wasCancelling = state._get_isCancelling__0_k$();
        var exceptions_2 = state.sealLocked_h62ekz_k$(proposedException);
        var finalCause_3 = getFinalRootCause($this, state, exceptions_2);
        if (!(finalCause_3 == null))
          addSuppressedExceptions($this, finalCause_3, exceptions_2);
        tmp$ret$0 = finalCause_3;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    var finalException = tmp$ret$1;
    var tmp;
    if (finalException == null) {
      tmp = proposedUpdate;
    } else if (finalException === proposedException) {
      tmp = proposedUpdate;
    } else {
      tmp = CompletedExceptionally_init_$Create$(finalException, false, 2, null);
    }
    var finalState = tmp;
    if (!(finalException == null)) {
      var handled = cancelParent($this, finalException) ? true : $this.handleJobException_onfaoi_k$(finalException);
      if (handled) {
        (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).makeHandled_0_k$();
        Unit_getInstance();
      }}if (!wasCancelling)
      $this.onCancelling_houul8_k$(finalException);
    $this.onCompletionInternal_qi8yb4_k$(finalState);
    var casSuccess = $this.__state_0.atomicfu$compareAndSet(state, boxIncomplete(finalState));
    {
    }
    completeStateFinalization($this, state, finalState);
    return finalState;
  }
  function getFinalRootCause($this, state, exceptions) {
    if (exceptions.isEmpty_0_k$()) {
      if (state._get_isCancelling__0_k$()) {
        var tmp$ret$0;
        $l$block: {
          var tmp0_elvis_lhs_1 = null;
          tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_1 == null ? $this.cancellationExceptionMessage_0_k$() : tmp0_elvis_lhs_1, null, $this);
          break $l$block;
        }
        return tmp$ret$0;
      }return null;
    }var tmp$ret$2;
    $l$block_2: {
      var tmp0_iterator_1 = exceptions.iterator_0_k$();
      while (tmp0_iterator_1.hasNext_0_k$()) {
        var element_2 = tmp0_iterator_1.next_0_k$();
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = !(element_2 instanceof CancellationException);
          break $l$block_0;
        }
        if (tmp$ret$1) {
          tmp$ret$2 = element_2;
          break $l$block_2;
        } else {
        }
      }
      tmp$ret$2 = null;
      break $l$block_2;
    }
    var firstNonCancellation = tmp$ret$2;
    if (!(firstNonCancellation == null))
      return firstNonCancellation;
    var first_0 = exceptions.get_ha5a7z_k$(0);
    if (first_0 instanceof TimeoutCancellationException) {
      var tmp$ret$4;
      $l$block_5: {
        var tmp0_iterator_1_0 = exceptions.iterator_0_k$();
        while (tmp0_iterator_1_0.hasNext_0_k$()) {
          var element_2_0 = tmp0_iterator_1_0.next_0_k$();
          var tmp$ret$3;
          $l$block_3: {
            var tmp;
            if (!(element_2_0 === first_0)) {
              tmp = element_2_0 instanceof TimeoutCancellationException;
            } else {
              tmp = false;
            }
            tmp$ret$3 = tmp;
            break $l$block_3;
          }
          if (tmp$ret$3) {
            tmp$ret$4 = element_2_0;
            break $l$block_5;
          } else {
          }
        }
        tmp$ret$4 = null;
        break $l$block_5;
      }
      var detailedTimeoutException = tmp$ret$4;
      if (!(detailedTimeoutException == null))
        return detailedTimeoutException;
    } else {
    }
    return first_0;
  }
  function addSuppressedExceptions($this, rootCause, exceptions) {
    if (exceptions._get_size__0_k$() <= 1)
      return Unit_getInstance();
    var seenExceptions = identitySet(exceptions._get_size__0_k$());
    var unwrappedCause = unwrap(rootCause);
    var tmp0_iterator = exceptions.iterator_0_k$();
    while (tmp0_iterator.hasNext_0_k$()) {
      var exception = tmp0_iterator.next_0_k$();
      var unwrapped = unwrap(exception);
      var tmp;
      var tmp_0;
      if (!(unwrapped === rootCause) ? !(unwrapped === unwrappedCause) : false) {
        tmp_0 = !(unwrapped instanceof CancellationException);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = seenExceptions.add_2bq_k$(unwrapped);
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        {
        }
      } else {
      }
    }
  }
  function tryFinalizeSimpleState($this, state, update) {
    {
    }
    {
    }
    if (!$this.__state_0.atomicfu$compareAndSet(state, boxIncomplete(update)))
      return false;
    $this.onCancelling_houul8_k$(null);
    $this.onCompletionInternal_qi8yb4_k$(update);
    completeStateFinalization($this, state, update);
    return true;
  }
  function completeStateFinalization($this, state, update) {
    var tmp0_safe_receiver = $this._get_parentHandle__0_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      $l$block: {
        {
        }
        tmp0_safe_receiver.dispose_sv8swh_k$();
        tmp$ret$0 = $this._set_parentHandle__kbopvd_k$(NonDisposableHandle_getInstance());
        break $l$block;
      }
      Unit_getInstance();
    }
    Unit_getInstance();
    var tmp1_safe_receiver = update instanceof CompletedExceptionally ? update : null;
    var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver._cause;
    if (state instanceof JobNode) {
      try {
        (state instanceof JobNode ? state : THROW_CCE()).invoke(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          var tmp = '' + 'Exception in completion handler ' + state + ' for ' + $this;
          $this.handleOnCompletionException_1ti8hr_k$(new CompletionHandlerException(tmp, $p instanceof Error ? $p : THROW_CCE()));
        } else {
          {
            throw $p;
          }
        }
      }
    } else {
      {
        var tmp2_safe_receiver = state._get_list__0_k$();
        if (tmp2_safe_receiver == null)
          null;
        else {
          notifyCompletion(tmp2_safe_receiver, $this, cause);
          Unit_getInstance();
        }
        Unit_getInstance();
      }
    }
  }
  function notifyCancelling($this, list, cause) {
    $this.onCancelling_houul8_k$(cause);
    {
      var exception_1 = null;
      {
        var cur_1 = list._get__next__0_k$();
        while (!equals(cur_1, list)) {
          if (cur_1 instanceof JobCancellingNode) {
            var tmp0__anonymous__2_2 = cur_1 instanceof JobCancellingNode ? cur_1 : THROW_CCE();
            try {
              tmp0__anonymous__2_2.invoke(cause);
            } catch ($p) {
              if ($p instanceof Error) {
                var tmp0_safe_receiver_5_5 = exception_1;
                var tmp;
                if (tmp0_safe_receiver_5_5 == null) {
                  tmp = null;
                } else {
                  var tmp$ret$0;
                  $l$block: {
                    {
                    }
                    {
                      {
                      }
                    }
                    tmp$ret$0 = tmp0_safe_receiver_5_5;
                    break $l$block;
                  }
                  tmp = tmp$ret$0;
                }
                var tmp1_elvis_lhs_4_4 = tmp;
                if (tmp1_elvis_lhs_4_4 == null) {
                  var tmp$ret$1;
                  $l$block_0: {
                    {
                    }
                    var tmp_0 = '' + 'Exception in completion handler ' + tmp0__anonymous__2_2 + ' for ' + $this;
                    exception_1 = new CompletionHandlerException(tmp_0, $p instanceof Error ? $p : THROW_CCE());
                    tmp$ret$1 = Unit_getInstance();
                    break $l$block_0;
                  }
                  Unit_getInstance();
                } else
                  tmp1_elvis_lhs_4_4;
                Unit_getInstance();
              } else {
                {
                  throw $p;
                }
              }
            }
          } else {
          }
          cur_1 = cur_1.__next;
        }
      }
      var tmp0_safe_receiver_8 = exception_1;
      if (tmp0_safe_receiver_8 == null)
        null;
      else {
        var tmp$ret$2;
        $l$block_1: {
          {
          }
          tmp$ret$2 = $this.handleOnCompletionException_1ti8hr_k$(tmp0_safe_receiver_8);
          break $l$block_1;
        }
        Unit_getInstance();
      }
      Unit_getInstance();
    }
    cancelParent($this, cause);
    Unit_getInstance();
  }
  function cancelParent($this, cause) {
    if ($this._get_isScopedCoroutine__0_k$())
      return true;
    var isCancellation = cause instanceof CancellationException;
    var parent = $this._get_parentHandle__0_k$();
    if (parent === null ? true : parent === NonDisposableHandle_getInstance()) {
      return isCancellation;
    }return parent.childCancelled_onfaoi_k$(cause) ? true : isCancellation;
  }
  function notifyCompletion(_this_, $this, cause) {
    var exception_1 = null;
    {
      var cur_1 = _this_._get__next__0_k$();
      while (!equals(cur_1, _this_)) {
        if (cur_1 instanceof JobNode) {
          var tmp0__anonymous__2_2 = cur_1 instanceof JobNode ? cur_1 : THROW_CCE();
          try {
            tmp0__anonymous__2_2.invoke(cause);
          } catch ($p) {
            if ($p instanceof Error) {
              var tmp0_safe_receiver_5_5 = exception_1;
              var tmp;
              if (tmp0_safe_receiver_5_5 == null) {
                tmp = null;
              } else {
                var tmp$ret$0;
                $l$block: {
                  {
                  }
                  {
                    {
                    }
                  }
                  tmp$ret$0 = tmp0_safe_receiver_5_5;
                  break $l$block;
                }
                tmp = tmp$ret$0;
              }
              var tmp1_elvis_lhs_4_4 = tmp;
              if (tmp1_elvis_lhs_4_4 == null) {
                var tmp$ret$1;
                $l$block_0: {
                  {
                  }
                  var tmp_0 = '' + 'Exception in completion handler ' + tmp0__anonymous__2_2 + ' for ' + $this;
                  exception_1 = new CompletionHandlerException(tmp_0, $p instanceof Error ? $p : THROW_CCE());
                  tmp$ret$1 = Unit_getInstance();
                  break $l$block_0;
                }
                Unit_getInstance();
              } else
                tmp1_elvis_lhs_4_4;
              Unit_getInstance();
            } else {
              {
                throw $p;
              }
            }
          }
        } else {
        }
        cur_1 = cur_1.__next;
      }
    }
    var tmp0_safe_receiver_8 = exception_1;
    if (tmp0_safe_receiver_8 == null)
      null;
    else {
      var tmp$ret$2;
      $l$block_1: {
        {
        }
        tmp$ret$2 = $this.handleOnCompletionException_1ti8hr_k$(tmp0_safe_receiver_8);
        break $l$block_1;
      }
      Unit_getInstance();
    }
    return Unit_getInstance();
  }
  function startInternal($this, state) {
    var tmp0_subject = state;
    if (tmp0_subject instanceof Empty) {
      if ((state instanceof Empty ? state : THROW_CCE())._isActive)
        return 0;
      else {
      }
      if (!$this.__state_0.atomicfu$compareAndSet(state, _get_EMPTY_ACTIVE_()))
        return -1;
      $this.onStart_sv8swh_k$();
      return 1;
    } else {
      if (tmp0_subject instanceof InactiveNodeList) {
        if (!$this.__state_0.atomicfu$compareAndSet(state, (state instanceof InactiveNodeList ? state : THROW_CCE())._list_0))
          return -1;
        else {
        }
        $this.onStart_sv8swh_k$();
        return 1;
      } else {
        return 0;
      }
    }
  }
  function makeNode($this, handler, onCancelling) {
    var tmp;
    if (onCancelling) {
      var tmp0_elvis_lhs = handler instanceof JobCancellingNode ? handler : null;
      tmp = tmp0_elvis_lhs == null ? new InvokeOnCancelling(handler) : tmp0_elvis_lhs;
    } else {
      var tmp1_safe_receiver = handler instanceof JobNode ? handler : null;
      var tmp_0;
      if (tmp1_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp$ret$0;
        $l$block: {
          {
          }
          {
            {
            }
          }
          tmp$ret$0 = tmp1_safe_receiver;
          break $l$block;
        }
        tmp_0 = tmp$ret$0;
      }
      var tmp2_elvis_lhs = tmp_0;
      tmp = tmp2_elvis_lhs == null ? new InvokeOnCompletion(handler) : tmp2_elvis_lhs;
    }
    var node = tmp;
    node._job = $this;
    return node;
  }
  function addLastAtomic($this, expect, list, node) {
    var tmp$ret$1;
    $l$block_1: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = $this._get_state__0_k$() === expect;
        break $l$block;
      }
      if (!tmp$ret$0) {
        tmp$ret$1 = false;
        break $l$block_1;
      } else {
      }
      list.addLast_qdrmxw_k$(node);
      tmp$ret$1 = true;
      break $l$block_1;
    }
    return tmp$ret$1;
  }
  function promoteEmptyToNodeList($this, state) {
    var list = new NodeList_0();
    var update = state._isActive ? list : new InactiveNodeList(list);
    $this.__state_0.atomicfu$compareAndSet(state, update);
    Unit_getInstance();
  }
  function promoteSingleToNodeList($this, state) {
    state.addOneIfEmpty_fpxpjn_k$(new NodeList_0());
    Unit_getInstance();
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = state.__next;
      break $l$block;
    }
    var list = tmp$ret$0;
    $this.__state_0.atomicfu$compareAndSet(state, list);
    Unit_getInstance();
  }
  function cancelMakeCompleting($this, cause) {
    {
      while (true) {
        {
          var tmp0__anonymous__1 = $this._get_state__0_k$();
          var tmp;
          if (!(!(tmp0__anonymous__1 == null) ? isInterface(tmp0__anonymous__1, Incomplete) : false)) {
            tmp = true;
          } else {
            {
              var tmp_0;
              if (tmp0__anonymous__1 instanceof Finishing) {
                tmp_0 = (tmp0__anonymous__1 instanceof Finishing ? tmp0__anonymous__1 : THROW_CCE())._get_isCompleting__0_k$();
              } else {
                {
                  tmp_0 = false;
                }
              }
              tmp = tmp_0;
            }
          }
          if (tmp) {
            return _get_COMPLETING_ALREADY_();
          } else {
          }
          var tmp_1 = createCauseException($this, cause);
          var proposedUpdate_2 = CompletedExceptionally_init_$Create$(tmp_1, false, 2, null);
          var finalState_3 = tryMakeCompleting($this, tmp0__anonymous__1, proposedUpdate_2);
          if (!(finalState_3 === _get_COMPLETING_RETRY_()))
            return finalState_3;
        }
      }
      Unit_getInstance();
    }
  }
  function createCauseException($this, cause) {
    var tmp0_subject = cause;
    var tmp;
    if (tmp0_subject == null ? true : tmp0_subject instanceof Error) {
      var tmp1_elvis_lhs = (cause == null ? true : cause instanceof Error) ? cause : THROW_CCE();
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp$ret$0;
        $l$block: {
          var tmp0_elvis_lhs_1 = null;
          tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_1 == null ? $this.cancellationExceptionMessage_0_k$() : tmp0_elvis_lhs_1, null, $this);
          break $l$block;
        }
        tmp_0 = tmp$ret$0;
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      {
        tmp = ((!(cause == null) ? isInterface(cause, ParentJob) : false) ? cause : THROW_CCE()).getChildJobCancellationCause_0_k$();
      }
    }
    return tmp;
  }
  function makeCancelling($this, cause) {
    var causeExceptionCache = null;
    {
      while (true) {
        var tmp$ret$7;
        $l$block_6: {
          var tmp0__anonymous__1 = $this._get_state__0_k$();
          var tmp0_subject_2 = tmp0__anonymous__1;
          if (tmp0_subject_2 instanceof Finishing) {
            var tmp$ret$4;
            $l$block_3: {
              var tmp$ret$3;
              $l$block_2: {
                if ((tmp0__anonymous__1 instanceof Finishing ? tmp0__anonymous__1 : THROW_CCE())._get_isSealed__0_k$())
                  return _get_TOO_LATE_TO_CANCEL_();
                else {
                }
                var wasCancelling_2_4 = (tmp0__anonymous__1 instanceof Finishing ? tmp0__anonymous__1 : THROW_CCE())._get_isCancelling__0_k$();
                if (!(cause == null) ? true : !wasCancelling_2_4) {
                  var tmp0_elvis_lhs_4_6 = causeExceptionCache;
                  var tmp;
                  if (tmp0_elvis_lhs_4_6 == null) {
                    var tmp$ret$0;
                    $l$block: {
                      var tmp0_also_0_5_7 = createCauseException($this, cause);
                      {
                      }
                      {
                        causeExceptionCache = tmp0_also_0_5_7;
                      }
                      tmp$ret$0 = tmp0_also_0_5_7;
                      break $l$block;
                    }
                    tmp = tmp$ret$0;
                  } else {
                    tmp = tmp0_elvis_lhs_4_6;
                  }
                  var causeException_3_5 = tmp;
                  (tmp0__anonymous__1 instanceof Finishing ? tmp0__anonymous__1 : THROW_CCE()).addExceptionLocked_1ti8hr_k$(causeException_3_5);
                }var tmp$ret$2;
                $l$block_1: {
                  var tmp1_takeIf_0_6_8 = (tmp0__anonymous__1 instanceof Finishing ? tmp0__anonymous__1 : THROW_CCE())._get_rootCause__0_k$();
                  {
                  }
                  var tmp_0;
                  var tmp$ret$1;
                  $l$block_0: {
                    tmp$ret$1 = !wasCancelling_2_4;
                    break $l$block_0;
                  }
                  if (tmp$ret$1) {
                    tmp_0 = tmp1_takeIf_0_6_8;
                  } else {
                    {
                      tmp_0 = null;
                    }
                  }
                  tmp$ret$2 = tmp_0;
                  break $l$block_1;
                }
                tmp$ret$3 = tmp$ret$2;
                break $l$block_2;
              }
              tmp$ret$4 = tmp$ret$3;
              break $l$block_3;
            }
            var notifyRootCause_3 = tmp$ret$4;
            var tmp1_safe_receiver_9 = notifyRootCause_3;
            if (tmp1_safe_receiver_9 == null)
              null;
            else {
              var tmp$ret$5;
              $l$block_4: {
                {
                }
                tmp$ret$5 = notifyCancelling($this, (tmp0__anonymous__1 instanceof Finishing ? tmp0__anonymous__1 : THROW_CCE())._list, tmp1_safe_receiver_9);
                break $l$block_4;
              }
              Unit_getInstance();
            }
            Unit_getInstance();
            return _get_COMPLETING_ALREADY_();
          } else {
            if (!(tmp0_subject_2 == null) ? isInterface(tmp0_subject_2, Incomplete) : false) {
              var tmp2_elvis_lhs_11 = causeExceptionCache;
              var tmp_1;
              if (tmp2_elvis_lhs_11 == null) {
                var tmp$ret$6;
                $l$block_5: {
                  var tmp0_also_0_12 = createCauseException($this, cause);
                  {
                  }
                  {
                    causeExceptionCache = tmp0_also_0_12;
                  }
                  tmp$ret$6 = tmp0_also_0_12;
                  break $l$block_5;
                }
                tmp_1 = tmp$ret$6;
              } else {
                tmp_1 = tmp2_elvis_lhs_11;
              }
              var causeException_10 = tmp_1;
              if (((!(tmp0__anonymous__1 == null) ? isInterface(tmp0__anonymous__1, Incomplete) : false) ? tmp0__anonymous__1 : THROW_CCE())._get_isActive__0_k$()) {
                if (tryMakeCancelling($this, (!(tmp0__anonymous__1 == null) ? isInterface(tmp0__anonymous__1, Incomplete) : false) ? tmp0__anonymous__1 : THROW_CCE(), causeException_10))
                  return _get_COMPLETING_ALREADY_();
                else {
                }
              } else {
                {
                  var finalState_13 = tryMakeCompleting($this, tmp0__anonymous__1, CompletedExceptionally_init_$Create$(causeException_10, false, 2, null));
                  if (finalState_13 === _get_COMPLETING_ALREADY_()) {
                    var tmp1_error_0_14 = '' + 'Cannot happen in ' + tmp0__anonymous__1;
                    throw IllegalStateException_init_$Create$(toString_1(tmp1_error_0_14));
                  } else if (finalState_13 === _get_COMPLETING_RETRY_()) {
                    tmp$ret$7 = Unit_getInstance();
                    break $l$block_6;
                  } else
                    return finalState_13;
                }
              }
            } else {
              return _get_TOO_LATE_TO_CANCEL_();
            }
          }
        }
      }
      Unit_getInstance();
    }
  }
  function getOrPromoteCancellingList($this, state) {
    var tmp1_elvis_lhs = state._get_list__0_k$();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_subject = state;
      var tmp_0;
      if (tmp0_subject instanceof Empty) {
        tmp_0 = new NodeList_0();
      } else {
        if (tmp0_subject instanceof JobNode) {
          promoteSingleToNodeList($this, state instanceof JobNode ? state : THROW_CCE());
          tmp_0 = null;
        } else {
          {
            var tmp0_error_0 = '' + 'State should have list: ' + state;
            throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
          }
        }
      }
      tmp = tmp_0;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryMakeCancelling($this, state, rootCause) {
    {
    }
    {
    }
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var cancelling = new Finishing(list, false, rootCause);
    if (!$this.__state_0.atomicfu$compareAndSet(state, cancelling))
      return false;
    notifyCancelling($this, list, rootCause);
    return true;
  }
  function tryMakeCompleting($this, state, proposedUpdate) {
    if (!(!(state == null) ? isInterface(state, Incomplete) : false))
      return _get_COMPLETING_ALREADY_();
    else {
    }
    var tmp;
    var tmp_0;
    var tmp_1;
    if (state instanceof Empty) {
      tmp_1 = true;
    } else {
      {
        tmp_1 = state instanceof JobNode;
      }
    }
    if (tmp_1) {
      tmp_0 = !(state instanceof ChildHandleNode);
    } else {
      {
        tmp_0 = false;
      }
    }
    if (tmp_0) {
      tmp = !(proposedUpdate instanceof CompletedExceptionally);
    } else {
      {
        tmp = false;
      }
    }
    if (tmp) {
      if (tryFinalizeSimpleState($this, (!(state == null) ? isInterface(state, Incomplete) : false) ? state : THROW_CCE(), proposedUpdate)) {
        return proposedUpdate;
      } else {
      }
      return _get_COMPLETING_RETRY_();
    } else {
    }
    return tryMakeCompletingSlowPath($this, (!(state == null) ? isInterface(state, Incomplete) : false) ? state : THROW_CCE(), proposedUpdate);
  }
  function tryMakeCompletingSlowPath($this, state, proposedUpdate) {
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return _get_COMPLETING_RETRY_();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var tmp1_elvis_lhs = state instanceof Finishing ? state : null;
    var finishing = tmp1_elvis_lhs == null ? new Finishing(list, false, null) : tmp1_elvis_lhs;
    var notifyRootCause = null;
    var tmp$ret$3;
    $l$block_2: {
      if (finishing._get_isCompleting__0_k$())
        return _get_COMPLETING_ALREADY_();
      finishing._set_isCompleting__rpwsgn_k$(true);
      if (!(finishing === state)) {
        if (!$this.__state_0.atomicfu$compareAndSet(state, finishing))
          return _get_COMPLETING_RETRY_();
      }{
      }
      var wasCancelling_2 = finishing._get_isCancelling__0_k$();
      var tmp0_safe_receiver_3 = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
      if (tmp0_safe_receiver_3 == null)
        null;
      else {
        var tmp$ret$0;
        $l$block: {
          {
          }
          tmp$ret$0 = finishing.addExceptionLocked_1ti8hr_k$(tmp0_safe_receiver_3._cause);
          break $l$block;
        }
        Unit_getInstance();
      }
      Unit_getInstance();
      var tmp$ret$2;
      $l$block_1: {
        var tmp0_takeIf_0_4 = finishing._get_rootCause__0_k$();
        {
        }
        var tmp_0;
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = !wasCancelling_2;
          break $l$block_0;
        }
        if (tmp$ret$1) {
          tmp_0 = tmp0_takeIf_0_4;
        } else {
          {
            tmp_0 = null;
          }
        }
        tmp$ret$2 = tmp_0;
        break $l$block_1;
      }
      notifyRootCause = tmp$ret$2;
      tmp$ret$3 = Unit_getInstance();
      break $l$block_2;
    }
    var tmp2_safe_receiver = notifyRootCause;
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp$ret$4;
      $l$block_3: {
        {
        }
        tmp$ret$4 = notifyCancelling($this, list, tmp2_safe_receiver);
        break $l$block_3;
      }
      Unit_getInstance();
    }
    Unit_getInstance();
    var child = firstChild($this, state);
    if (!(child == null) ? tryWaitForChild($this, finishing, child, proposedUpdate) : false)
      return _get_COMPLETING_WAITING_CHILDREN_();
    return finalizeFinishingState($this, finishing, proposedUpdate);
  }
  function firstChild($this, state) {
    var tmp1_elvis_lhs = state instanceof ChildHandleNode ? state : null;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = state._get_list__0_k$();
      tmp = tmp0_safe_receiver == null ? null : nextChild(tmp0_safe_receiver, $this);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryWaitForChild($this, state, child, proposedUpdate) {
    var $this_0 = $this;
    var state_0 = state;
    var child_0 = child;
    var proposedUpdate_0 = proposedUpdate;
    while (true) {
      var $this_1 = $this_0;
      var state_1 = state_0;
      var child_1 = child_0;
      var proposedUpdate_1 = proposedUpdate_0;
      var tmp$ret$1;
      $l$block_0: {
        var tmp0__get_asHandler__0 = new ChildCompletion($this_1, state_1, child_1, proposedUpdate_1);
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = tmp0__get_asHandler__0;
          break $l$block;
        }
        var tmp = tmp$ret$0;
        tmp$ret$1 = (!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE();
        break $l$block_0;
      }
      var handle = child_1._childJob.invokeOnCompletion$default_n4h7x8_k$(false, false, tmp$ret$1, 1, null);
      if (!(handle === NonDisposableHandle_getInstance()))
        return true;
      var tmp0_elvis_lhs = nextChild(child_1, $this_1);
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        return false;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var nextChild_0 = tmp_0;
      $this_0 = $this_1;
      state_0 = state_1;
      child_0 = nextChild_0;
      proposedUpdate_0 = proposedUpdate_1;
      continue;
    }
  }
  function continueCompleting($this, state, lastChild, proposedUpdate) {
    {
    }
    var waitChild = nextChild(lastChild, $this);
    if (!(waitChild == null) ? tryWaitForChild($this, state, waitChild, proposedUpdate) : false)
      return Unit_getInstance();
    var finalState = finalizeFinishingState($this, state, proposedUpdate);
    $this.afterCompletion_qi8yb4_k$(finalState);
  }
  function nextChild(_this_, $this) {
    var cur = _this_;
    $l$break: while (true) {
      var tmp$ret$0;
      $l$block: {
        var tmp0__get_isRemoved__0 = cur;
        tmp$ret$0 = tmp0__get_isRemoved__0.__removed;
        break $l$block;
      }
      if (!tmp$ret$0) {
        break $l$break;
      }var tmp$ret$1;
      $l$block_0: {
        var tmp1__get_prevNode__0 = cur;
        tmp$ret$1 = tmp1__get_prevNode__0.__prev;
        break $l$block_0;
      }
      cur = tmp$ret$1;
    }
    while (true) {
      var tmp$ret$2;
      $l$block_1: {
        var tmp2__get_nextNode__0 = cur;
        tmp$ret$2 = tmp2__get_nextNode__0.__next;
        break $l$block_1;
      }
      cur = tmp$ret$2;
      var tmp$ret$3;
      $l$block_2: {
        var tmp3__get_isRemoved__0 = cur;
        tmp$ret$3 = tmp3__get_isRemoved__0.__removed;
        break $l$block_2;
      }
      if (tmp$ret$3)
        continue;
      else {
      }
      if (cur instanceof ChildHandleNode) {
        return cur instanceof ChildHandleNode ? cur : THROW_CCE();
      } else {
      }
      if (cur instanceof NodeList_0)
        return null;
      else {
      }
    }
  }
  function stateString($this, state) {
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof Finishing) {
      var tmp_0;
      if ((state instanceof Finishing ? state : THROW_CCE())._get_isCancelling__0_k$()) {
        tmp_0 = 'Cancelling';
      } else {
        if ((state instanceof Finishing ? state : THROW_CCE())._get_isCompleting__0_k$()) {
          tmp_0 = 'Completing';
        } else {
          {
            tmp_0 = 'Active';
          }
        }
      }
      tmp = tmp_0;
    } else {
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
        var tmp_1;
        if (((!(state == null) ? isInterface(state, Incomplete) : false) ? state : THROW_CCE())._get_isActive__0_k$()) {
          tmp_1 = 'Active';
        } else {
          {
            tmp_1 = 'New';
          }
        }
        tmp = tmp_1;
      } else {
        if (tmp0_subject instanceof CompletedExceptionally) {
          tmp = 'Cancelled';
        } else {
          {
            tmp = 'Completed';
          }
        }
      }
    }
    return tmp;
  }
  function Finishing(list, isCompleting, rootCause) {
    this._list = list;
    this.__isCompleting = atomic_0(isCompleting);
    this.__rootCause = atomic(rootCause);
    this.__exceptionsHolder = atomic(null);
  }
  Finishing.prototype._get_list__0_k$ = function () {
    return this._list;
  };
  Finishing.prototype._set_isCompleting__rpwsgn_k$ = function (value) {
    this.__isCompleting._value_0 = value;
  };
  Finishing.prototype._get_isCompleting__0_k$ = function () {
    return this.__isCompleting._value_0;
  };
  Finishing.prototype._set_rootCause__houul8_k$ = function (value) {
    this.__rootCause._value = value;
  };
  Finishing.prototype._get_rootCause__0_k$ = function () {
    var tmp = this.__rootCause._value;
    return (tmp == null ? true : tmp instanceof Error) ? tmp : THROW_CCE();
  };
  Finishing.prototype._get_isSealed__0_k$ = function () {
    return _get_exceptionsHolder_(this) === _get_SEALED_();
  };
  Finishing.prototype._get_isCancelling__0_k$ = function () {
    return !(this._get_rootCause__0_k$() == null);
  };
  Finishing.prototype._get_isActive__0_k$ = function () {
    return this._get_rootCause__0_k$() == null;
  };
  Finishing.prototype.sealLocked_h62ekz_k$ = function (proposedException) {
    var eh = _get_exceptionsHolder_(this);
    var tmp;
    if (eh == null) {
      tmp = allocateList(this);
    } else {
      if (eh instanceof Error) {
        var tmp$ret$0;
        $l$block: {
          var tmp0_also_0 = allocateList(this);
          {
          }
          {
            tmp0_also_0.add_2bq_k$(eh instanceof Error ? eh : THROW_CCE());
            Unit_getInstance();
          }
          tmp$ret$0 = tmp0_also_0;
          break $l$block;
        }
        tmp = tmp$ret$0;
      } else {
        if (eh instanceof ArrayList) {
          tmp = eh instanceof ArrayList ? eh : THROW_CCE();
        } else {
          {
            var tmp1_error_0 = '' + 'State is ' + eh;
            throw IllegalStateException_init_$Create$(toString_1(tmp1_error_0));
          }
        }
      }
    }
    var list = tmp;
    var rootCause = this._get_rootCause__0_k$();
    var tmp0_safe_receiver = rootCause;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      $l$block_0: {
        {
        }
        tmp$ret$1 = list.add_vz2mgm_k$(0, tmp0_safe_receiver);
        break $l$block_0;
      }
      Unit_getInstance();
    }
    Unit_getInstance();
    if (!(proposedException == null) ? !equals(proposedException, rootCause) : false) {
      list.add_2bq_k$(proposedException);
      Unit_getInstance();
    }_set_exceptionsHolder_(this, _get_SEALED_());
    return list;
  };
  Finishing.prototype.addExceptionLocked_1ti8hr_k$ = function (exception) {
    var rootCause = this._get_rootCause__0_k$();
    if (rootCause == null) {
      this._set_rootCause__houul8_k$(exception);
      return Unit_getInstance();
    }if (exception === rootCause)
      return Unit_getInstance();
    var eh = _get_exceptionsHolder_(this);
    if (eh == null)
      _set_exceptionsHolder_(this, exception);
    else {
      if (eh instanceof Error) {
        if (exception === eh)
          return Unit_getInstance();
        var tmp$ret$0;
        $l$block: {
          var tmp0_apply_0 = allocateList(this);
          {
          }
          {
            tmp0_apply_0.add_2bq_k$(eh instanceof Error ? eh : THROW_CCE());
            Unit_getInstance();
            tmp0_apply_0.add_2bq_k$(exception);
            Unit_getInstance();
          }
          tmp$ret$0 = tmp0_apply_0;
          break $l$block;
        }
        _set_exceptionsHolder_(this, tmp$ret$0);
      } else {
        if (eh instanceof ArrayList) {
          (eh instanceof ArrayList ? eh : THROW_CCE()).add_2bq_k$(exception);
          Unit_getInstance();
        } else {
          {
            var tmp1_error_0 = '' + 'State is ' + eh;
            throw IllegalStateException_init_$Create$(toString_1(tmp1_error_0));
          }
        }
      }
    }
  };
  Finishing.prototype.toString = function () {
    return '' + 'Finishing[cancelling=' + this._get_isCancelling__0_k$() + ', completing=' + this._get_isCompleting__0_k$() + ', rootCause=' + this._get_rootCause__0_k$() + ', exceptions=' + _get_exceptionsHolder_(this) + ', list=' + this._list + ']';
  };
  Finishing.$metadata$ = {
    simpleName: 'Finishing',
    kind: 'class',
    interfaces: [Incomplete]
  };
  function ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this);
    this._parent = parent;
    this._state_1 = state;
    this._child = child;
    this._proposedUpdate = proposedUpdate;
  }
  ChildCompletion.prototype.invoke_houul8_k$ = function (cause) {
    continueCompleting(this._parent, this._state_1, this._child, this._proposedUpdate);
  };
  ChildCompletion.prototype.invoke = function (cause) {
    return this.invoke_houul8_k$(cause);
  };
  ChildCompletion.$metadata$ = {
    simpleName: 'ChildCompletion',
    kind: 'class',
    interfaces: []
  };
  function JobSupport(active) {
    this.__state_0 = atomic(active ? _get_EMPTY_ACTIVE_() : _get_EMPTY_NEW_());
    this.__parentHandle = atomic(null);
  }
  JobSupport.prototype._get_key__0_k$ = function () {
    return Key_getInstance_2();
  };
  JobSupport.prototype._set_parentHandle__kbopvd_k$ = function (value) {
    this.__parentHandle._value = value;
  };
  JobSupport.prototype._get_parentHandle__0_k$ = function () {
    var tmp = this.__parentHandle._value;
    return (tmp == null ? true : isInterface(tmp, ChildHandle)) ? tmp : THROW_CCE();
  };
  JobSupport.prototype.initParentJob_64sshe_k$ = function (parent) {
    {
    }
    if (parent == null) {
      this._set_parentHandle__kbopvd_k$(NonDisposableHandle_getInstance());
      return Unit_getInstance();
    }parent.start_0_k$();
    Unit_getInstance();
    var handle = parent.attachChild_o588si_k$(this);
    this._set_parentHandle__kbopvd_k$(handle);
    if (this._get_isCompleted__0_k$()) {
      handle.dispose_sv8swh_k$();
      this._set_parentHandle__kbopvd_k$(NonDisposableHandle_getInstance());
    }};
  JobSupport.prototype._get_state__0_k$ = function () {
    {
      var tmp0_loop_0 = this.__state_0;
      while (true) {
        {
          var tmp = tmp0_loop_0._value;
          var tmp1__anonymous__1 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
          if (!(tmp1__anonymous__1 instanceof OpDescriptor))
            return tmp1__anonymous__1;
          else {
          }
          (tmp1__anonymous__1 instanceof OpDescriptor ? tmp1__anonymous__1 : THROW_CCE()).perform_wi7j7l_k$(this);
          Unit_getInstance();
        }
      }
      Unit_getInstance();
    }
  };
  JobSupport.prototype._get_isActive__0_k$ = function () {
    var state = this._get_state__0_k$();
    var tmp;
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = ((!(state == null) ? isInterface(state, Incomplete) : false) ? state : THROW_CCE())._get_isActive__0_k$();
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  JobSupport.prototype._get_isCompleted__0_k$ = function () {
    var tmp = this._get_state__0_k$();
    return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
  };
  JobSupport.prototype.start_0_k$ = function () {
    {
      while (true) {
        {
          var tmp0__anonymous__1 = this._get_state__0_k$();
          var tmp0_subject_2 = startInternal(this, tmp0__anonymous__1);
          if (tmp0_subject_2 === 0)
            return false;
          else if (tmp0_subject_2 === 1)
            return true;
        }
      }
      Unit_getInstance();
    }
  };
  JobSupport.prototype.onStart_sv8swh_k$ = function () {
  };
  JobSupport.prototype.getCancellationException_0_k$ = function () {
    var state = this._get_state__0_k$();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = (state instanceof Finishing ? state : THROW_CCE())._get_rootCause__0_k$();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.toCancellationException_ntgz4s_k$(tmp0_safe_receiver, '' + _get_classSimpleName_(this) + ' is cancelling');
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp0_error_0 = '' + 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        var tmp1_error_0 = '' + 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_1(tmp1_error_0));
      } else {
        if (state instanceof CompletedExceptionally) {
          var tmp_1 = (state instanceof CompletedExceptionally ? state : THROW_CCE())._cause;
          tmp = this.toCancellationException$default_f52skm_k$(tmp_1, null, 1, null);
        } else {
          {
            tmp = new JobCancellationException('' + _get_classSimpleName_(this) + ' has completed normally', null, this);
          }
        }
      }
    }
    return tmp;
  };
  JobSupport.prototype.toCancellationException_ntgz4s_k$ = function (_this__0, message) {
    var tmp0_elvis_lhs = _this__0 instanceof CancellationException ? _this__0 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_elvis_lhs_1 = message;
        tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_1 == null ? this.cancellationExceptionMessage_0_k$() : tmp0_elvis_lhs_1, _this__0, this);
        break $l$block;
      }
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  JobSupport.prototype.toCancellationException$default_f52skm_k$ = function (_this__0, message, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      message = null;
    return this.toCancellationException_ntgz4s_k$(_this__0, message);
  };
  JobSupport.prototype.invokeOnCompletion_431mg2_k$ = function (onCancelling, invokeImmediately, handler) {
    var node = makeNode(this, handler, onCancelling);
    {
      while (true) {
        var tmp$ret$1;
        $l$block_0: {
          var tmp0__anonymous__1 = this._get_state__0_k$();
          var tmp0_subject_2 = tmp0__anonymous__1;
          if (tmp0_subject_2 instanceof Empty) {
            if ((tmp0__anonymous__1 instanceof Empty ? tmp0__anonymous__1 : THROW_CCE())._isActive) {
              if (this.__state_0.atomicfu$compareAndSet(tmp0__anonymous__1, node))
                return node;
            } else {
              {
                promoteEmptyToNodeList(this, tmp0__anonymous__1 instanceof Empty ? tmp0__anonymous__1 : THROW_CCE());
              }
            }
          } else {
            if (!(tmp0_subject_2 == null) ? isInterface(tmp0_subject_2, Incomplete) : false) {
              var list_3 = ((!(tmp0__anonymous__1 == null) ? isInterface(tmp0__anonymous__1, Incomplete) : false) ? tmp0__anonymous__1 : THROW_CCE())._get_list__0_k$();
              if (list_3 == null) {
                promoteSingleToNodeList(this, tmp0__anonymous__1 instanceof JobNode ? tmp0__anonymous__1 : THROW_CCE());
              } else {
                var rootCause_4 = null;
                var handle_5 = NonDisposableHandle_getInstance();
                var tmp;
                if (onCancelling) {
                  tmp = tmp0__anonymous__1 instanceof Finishing;
                } else {
                  tmp = false;
                }
                if (tmp) {
                  var tmp$ret$2;
                  $l$block_1: {
                    rootCause_4 = (tmp0__anonymous__1 instanceof Finishing ? tmp0__anonymous__1 : THROW_CCE())._get_rootCause__0_k$();
                    var tmp_0;
                    var tmp_1;
                    if (rootCause_4 == null) {
                      tmp_1 = true;
                    } else {
                      var tmp_2;
                      var tmp$ret$0;
                      $l$block: {
                        tmp$ret$0 = handler instanceof ChildHandleNode;
                        break $l$block;
                      }
                      if (tmp$ret$0) {
                        tmp_2 = !(tmp0__anonymous__1 instanceof Finishing ? tmp0__anonymous__1 : THROW_CCE())._get_isCompleting__0_k$();
                      } else {
                        {
                          tmp_2 = false;
                        }
                      }
                      tmp_1 = tmp_2;
                    }
                    if (tmp_1) {
                      if (!addLastAtomic(this, tmp0__anonymous__1, list_3, node)) {
                        tmp$ret$1 = Unit_getInstance();
                        break $l$block_0;
                      }if (rootCause_4 == null)
                        return node;
                      handle_5 = node;
                      tmp_0 = Unit_getInstance();
                    } else {
                    }
                    tmp$ret$2 = tmp_0;
                    break $l$block_1;
                  }
                } else {
                }
                if (!(rootCause_4 == null)) {
                  if (invokeImmediately)
                    invokeIt(handler, rootCause_4);
                  return handle_5;
                } else {
                  if (addLastAtomic(this, tmp0__anonymous__1, list_3, node))
                    return node;
                }
              }
            } else {
              {
                if (invokeImmediately) {
                  var tmp1_safe_receiver_6 = tmp0__anonymous__1 instanceof CompletedExceptionally ? tmp0__anonymous__1 : null;
                  invokeIt(handler, tmp1_safe_receiver_6 == null ? null : tmp1_safe_receiver_6._cause);
                }return NonDisposableHandle_getInstance();
              }
            }
          }
        }
      }
      Unit_getInstance();
    }
  };
  JobSupport.prototype.removeNode_2kg835_k$ = function (node) {
    {
      while (true) {
        {
          var tmp0__anonymous__1 = this._get_state__0_k$();
          var tmp0_subject_2 = tmp0__anonymous__1;
          if (tmp0_subject_2 instanceof JobNode) {
            if (!(tmp0__anonymous__1 === node))
              return Unit_getInstance();
            if (this.__state_0.atomicfu$compareAndSet(tmp0__anonymous__1, _get_EMPTY_ACTIVE_()))
              return Unit_getInstance();
          } else {
            if (!(tmp0_subject_2 == null) ? isInterface(tmp0_subject_2, Incomplete) : false) {
              if (!(((!(tmp0__anonymous__1 == null) ? isInterface(tmp0__anonymous__1, Incomplete) : false) ? tmp0__anonymous__1 : THROW_CCE())._get_list__0_k$() == null)) {
                node.remove_0_k$();
                Unit_getInstance();
              } else {
              }
              return Unit_getInstance();
            } else {
              return Unit_getInstance();
            }
          }
        }
      }
      Unit_getInstance();
    }
  };
  JobSupport.prototype._get_onCancelComplete__0_k$ = function () {
    return false;
  };
  JobSupport.prototype.cancellationExceptionMessage_0_k$ = function () {
    return 'Job was cancelled';
  };
  JobSupport.prototype.parentCancelled_f2sghn_k$ = function (parentJob) {
    this.cancelImpl_wi7j7l_k$(parentJob);
    Unit_getInstance();
  };
  JobSupport.prototype.childCancelled_onfaoi_k$ = function (cause) {
    if (cause instanceof CancellationException)
      return true;
    else {
    }
    return this.cancelImpl_wi7j7l_k$(cause) ? this._get_handlesException__0_k$() : false;
  };
  JobSupport.prototype.cancelImpl_wi7j7l_k$ = function (cause) {
    var finalState = _get_COMPLETING_ALREADY_();
    if (this._get_onCancelComplete__0_k$()) {
      finalState = cancelMakeCompleting(this, cause);
      if (finalState === _get_COMPLETING_WAITING_CHILDREN_())
        return true;
    }if (finalState === _get_COMPLETING_ALREADY_()) {
      finalState = makeCancelling(this, cause);
    }var tmp;
    if (finalState === _get_COMPLETING_ALREADY_()) {
      tmp = true;
    } else if (finalState === _get_COMPLETING_WAITING_CHILDREN_()) {
      tmp = true;
    } else if (finalState === _get_TOO_LATE_TO_CANCEL_()) {
      tmp = false;
    } else {
      this.afterCompletion_qi8yb4_k$(finalState);
      tmp = true;
    }
    return tmp;
  };
  JobSupport.prototype.getChildJobCancellationCause_0_k$ = function () {
    var state = this._get_state__0_k$();
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof Finishing) {
      tmp = (state instanceof Finishing ? state : THROW_CCE())._get_rootCause__0_k$();
    } else {
      if (tmp0_subject instanceof CompletedExceptionally) {
        tmp = (state instanceof CompletedExceptionally ? state : THROW_CCE())._cause;
      } else {
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
          var tmp0_error_0 = '' + 'Cannot be cancelling child in this state: ' + state;
          throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
        } else {
          {
            tmp = null;
          }
        }
      }
    }
    var rootCause = tmp;
    var tmp1_elvis_lhs = rootCause instanceof CancellationException ? rootCause : null;
    return tmp1_elvis_lhs == null ? new JobCancellationException('' + 'Parent job is ' + stateString(this, state), rootCause, this) : tmp1_elvis_lhs;
  };
  JobSupport.prototype.attachChild_o588si_k$ = function (child) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0__get_asHandler__0 = new ChildHandleNode(child);
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0__get_asHandler__0;
        break $l$block;
      }
      var tmp = tmp$ret$0;
      tmp$ret$1 = (!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE();
      break $l$block_0;
    }
    var tmp_0 = this.invokeOnCompletion$default_n4h7x8_k$(true, false, tmp$ret$1, 2, null);
    return isInterface(tmp_0, ChildHandle) ? tmp_0 : THROW_CCE();
  };
  JobSupport.prototype.handleOnCompletionException_1ti8hr_k$ = function (exception) {
    throw exception;
  };
  JobSupport.prototype.onCancelling_houul8_k$ = function (cause) {
  };
  JobSupport.prototype._get_isScopedCoroutine__0_k$ = function () {
    return false;
  };
  JobSupport.prototype._get_handlesException__0_k$ = function () {
    return true;
  };
  JobSupport.prototype.handleJobException_onfaoi_k$ = function (exception) {
    return false;
  };
  JobSupport.prototype.onCompletionInternal_qi8yb4_k$ = function (state) {
  };
  JobSupport.prototype.afterCompletion_qi8yb4_k$ = function (state) {
  };
  JobSupport.prototype.toString = function () {
    return '' + this.toDebugString_0_k$() + '@' + _get_hexAddress_(this);
  };
  JobSupport.prototype.toDebugString_0_k$ = function () {
    return '' + this.nameString_0_k$() + '{' + stateString(this, this._get_state__0_k$()) + '}';
  };
  JobSupport.prototype.nameString_0_k$ = function () {
    return _get_classSimpleName_(this);
  };
  JobSupport.$metadata$ = {
    simpleName: 'JobSupport',
    kind: 'class',
    interfaces: [Job, ChildJob, ParentJob, SelectClause0]
  };
  function boxIncomplete(_this_) {
    init_properties_JobSupport_kt();
    var tmp;
    if (!(_this_ == null) ? isInterface(_this_, Incomplete) : false) {
      tmp = new IncompleteStateBox((!(_this_ == null) ? isInterface(_this_, Incomplete) : false) ? _this_ : THROW_CCE());
    } else {
      {
        tmp = _this_;
      }
    }
    return tmp;
  }
  function JobCancellingNode() {
    JobNode.call(this);
  }
  JobCancellingNode.$metadata$ = {
    simpleName: 'JobCancellingNode',
    kind: 'class',
    interfaces: []
  };
  function InactiveNodeList(list) {
    this._list_0 = list;
  }
  InactiveNodeList.prototype._get_list__0_k$ = function () {
    return this._list_0;
  };
  InactiveNodeList.prototype._get_isActive__0_k$ = function () {
    return false;
  };
  InactiveNodeList.prototype.toString = function () {
    return DEBUG ? this._list_0.getString_6wfw3l_k$('New') : anyToString(this);
  };
  InactiveNodeList.$metadata$ = {
    simpleName: 'InactiveNodeList',
    kind: 'class',
    interfaces: [Incomplete]
  };
  function ChildHandleNode(childJob) {
    JobCancellingNode.call(this);
    this._childJob = childJob;
  }
  ChildHandleNode.prototype._get_parent__0_k$ = function () {
    return this._get_job__0_k$();
  };
  ChildHandleNode.prototype.invoke_houul8_k$ = function (cause) {
    return this._childJob.parentCancelled_f2sghn_k$(this._get_job__0_k$());
  };
  ChildHandleNode.prototype.invoke = function (cause) {
    return this.invoke_houul8_k$(cause);
  };
  ChildHandleNode.prototype.childCancelled_onfaoi_k$ = function (cause) {
    return this._get_job__0_k$().childCancelled_onfaoi_k$(cause);
  };
  ChildHandleNode.$metadata$ = {
    simpleName: 'ChildHandleNode',
    kind: 'class',
    interfaces: [ChildHandle]
  };
  function InvokeOnCancelling(handler) {
    JobCancellingNode.call(this);
    this._handler_0 = handler;
    this.__invoked = atomic_1(0);
  }
  InvokeOnCancelling.prototype.invoke_houul8_k$ = function (cause) {
    if (this.__invoked.atomicfu$compareAndSet(0, 1))
      this._handler_0(cause);
  };
  InvokeOnCancelling.prototype.invoke = function (cause) {
    return this.invoke_houul8_k$(cause);
  };
  InvokeOnCancelling.$metadata$ = {
    simpleName: 'InvokeOnCancelling',
    kind: 'class',
    interfaces: []
  };
  function InvokeOnCompletion(handler) {
    JobNode.call(this);
    this._handler_1 = handler;
  }
  InvokeOnCompletion.prototype.invoke_houul8_k$ = function (cause) {
    return this._handler_1(cause);
  };
  InvokeOnCompletion.prototype.invoke = function (cause) {
    return this.invoke_houul8_k$(cause);
  };
  InvokeOnCompletion.$metadata$ = {
    simpleName: 'InvokeOnCompletion',
    kind: 'class',
    interfaces: []
  };
  function IncompleteStateBox(state) {
    this._state_2 = state;
  }
  IncompleteStateBox.$metadata$ = {
    simpleName: 'IncompleteStateBox',
    kind: 'class',
    interfaces: []
  };
  function ChildContinuation(child) {
    JobCancellingNode.call(this);
    this._child_0 = child;
  }
  ChildContinuation.prototype.invoke_houul8_k$ = function (cause) {
    this._child_0.parentCancelled_1ti8hr_k$(this._child_0.getContinuationCancellationCause_jfubq8_k$(this._get_job__0_k$()));
  };
  ChildContinuation.prototype.invoke = function (cause) {
    return this.invoke_houul8_k$(cause);
  };
  ChildContinuation.$metadata$ = {
    simpleName: 'ChildContinuation',
    kind: 'class',
    interfaces: []
  };
  function handlesException($this) {
    var tmp = $this._get_parentHandle__0_k$();
    var tmp0_safe_receiver = tmp instanceof ChildHandleNode ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_job__0_k$();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parentJob = tmp_0;
    while (true) {
      if (parentJob._get_handlesException__0_k$())
        return true;
      var tmp_1 = parentJob._get_parentHandle__0_k$();
      var tmp2_safe_receiver = tmp_1 instanceof ChildHandleNode ? tmp_1 : null;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver._get_job__0_k$();
      var tmp_2;
      if (tmp3_elvis_lhs == null) {
        return false;
      } else {
        tmp_2 = tmp3_elvis_lhs;
      }
      parentJob = tmp_2;
    }
  }
  function JobImpl(parent) {
    JobSupport.call(this, true);
    this.initParentJob_64sshe_k$(parent);
    this._handlesException = handlesException(this);
  }
  JobImpl.prototype._get_onCancelComplete__0_k$ = function () {
    return true;
  };
  JobImpl.prototype._get_handlesException__0_k$ = function () {
    return this._handlesException;
  };
  JobImpl.$metadata$ = {
    simpleName: 'JobImpl',
    kind: 'class',
    interfaces: [CompletableJob]
  };
  var properties_initialized_JobSupport_kt;
  function init_properties_JobSupport_kt() {
    if (!properties_initialized_JobSupport_kt) {
      properties_initialized_JobSupport_kt = true;
      COMPLETING_ALREADY = new Symbol('COMPLETING_ALREADY');
      COMPLETING_WAITING_CHILDREN = new Symbol('COMPLETING_WAITING_CHILDREN');
      COMPLETING_RETRY = new Symbol('COMPLETING_RETRY');
      TOO_LATE_TO_CANCEL = new Symbol('TOO_LATE_TO_CANCEL');
      SEALED = new Symbol('SEALED');
      EMPTY_NEW = new Empty(false);
      EMPTY_ACTIVE = new Empty(true);
    }}
  function MainCoroutineDispatcher() {
    CoroutineDispatcher.call(this);
  }
  MainCoroutineDispatcher.prototype.toString = function () {
    var tmp0_elvis_lhs = this.toStringInternalImpl_0_k$();
    return tmp0_elvis_lhs == null ? '' + _get_classSimpleName_(this) + '@' + _get_hexAddress_(this) : tmp0_elvis_lhs;
  };
  MainCoroutineDispatcher.prototype.toStringInternalImpl_0_k$ = function () {
    var main_0 = Dispatchers_getInstance()._Main;
    if (this === main_0)
      return 'Dispatchers.Main';
    var tmp;
    try {
      tmp = main_0._get_immediate__0_k$();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof UnsupportedOperationException) {
        tmp_0 = null;
      } else {
        {
          throw $p;
        }
      }
      tmp = tmp_0;
    }
    var immediate = tmp;
    if (this === immediate)
      return 'Dispatchers.Main.immediate';
    return null;
  };
  MainCoroutineDispatcher.$metadata$ = {
    simpleName: 'MainCoroutineDispatcher',
    kind: 'class',
    interfaces: []
  };
  function SupervisorJob(parent) {
    return new SupervisorJobImpl(parent);
  }
  function SupervisorJob$default(parent, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      parent = null;
    return SupervisorJob(parent);
  }
  function SupervisorJobImpl(parent) {
    JobImpl.call(this, parent);
  }
  SupervisorJobImpl.prototype.childCancelled_onfaoi_k$ = function (cause) {
    return false;
  };
  SupervisorJobImpl.$metadata$ = {
    simpleName: 'SupervisorJobImpl',
    kind: 'class',
    interfaces: []
  };
  function TimeoutCancellationException() {
  }
  TimeoutCancellationException.$metadata$ = {
    simpleName: 'TimeoutCancellationException',
    kind: 'class',
    interfaces: [CopyableThrowable]
  };
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  Unconfined.prototype.isDispatchNeeded_d7pszg_k$ = function (context) {
    return false;
  };
  Unconfined.prototype.dispatch_7n0ou3_k$ = function (context, block) {
    var yieldContext = context.get_9uvjra_k$(Key_getInstance_3());
    if (!(yieldContext == null)) {
      yieldContext.dispatcherWasUnconfined__error = true;
      return Unit_getInstance();
    }throw UnsupportedOperationException_init_$Create$_0('Dispatchers.Unconfined.dispatch function can only be used by the yield function. If you wrap Unconfined dispatcher in your code, make sure you properly delegate isDispatchNeeded and dispatch calls.');
  };
  Unconfined.prototype.toString = function () {
    return 'Dispatchers.Unconfined';
  };
  Unconfined.$metadata$ = {
    simpleName: 'Unconfined',
    kind: 'object',
    interfaces: []
  };
  var Unconfined_instance;
  function Unconfined_getInstance() {
    if (Unconfined_instance == null)
      new Unconfined();
    return Unconfined_instance;
  }
  function Key_4() {
    Key_instance_3 = this;
  }
  Key_4.$metadata$ = {
    simpleName: 'Key',
    kind: 'object',
    interfaces: [Key_0]
  };
  var Key_instance_3;
  function Key_getInstance_3() {
    if (Key_instance_3 == null)
      new Key_4();
    return Key_instance_3;
  }
  function flow(block) {
    return new SafeFlow(block);
  }
  function SafeFlow(block) {
    AbstractFlow.call(this);
    this._block = block;
  }
  SafeFlow.prototype.collectSafely_l0hod5_k$ = function (collector, $cont) {
    return this._block(collector, $cont);
  };
  SafeFlow.$metadata$ = {
    simpleName: 'SafeFlow',
    kind: 'class',
    interfaces: []
  };
  function Flow() {
  }
  Flow.$metadata$ = {
    simpleName: 'Flow',
    kind: 'interface',
    interfaces: []
  };
  function $collectCOROUTINE$1(_this_, collector, resultContinuation) {
    CoroutineImpl_0.call(this, resultContinuation);
    this.__this_ = _this_;
    this._collector = collector;
  }
  $collectCOROUTINE$1.prototype.doResume_0_k$ = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        switch (tmp) {
          case 0:
            this._exceptionState = 5;
            var tmp_0 = this;
            tmp_0._safeCollector0 = new SafeCollector(this._collector, this._get_context__0_k$());
            this._state_0 = 1;
            continue $sm;
          case 1:
            this._exceptionState = 4;
            this._state_0 = 2;
            suspendResult = this.__this_.collectSafely_l0hod5_k$(this._safeCollector0, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 2:
            this._tmp$ret$01 = suspendResult;
            this._exceptionState = 5;
            this._state_0 = 3;
            continue $sm;
          case 3:
            this._safeCollector0.releaseIntercepted_sv8swh_k$();
            return Unit_getInstance();
          case 4:
            this._exceptionState = 5;
            var t = this._exception_0;
            this._safeCollector0.releaseIntercepted_sv8swh_k$();
            throw t;
          case 5:
            throw this._exception_0;
        }
      } catch ($p) {
        if (this._exceptionState === 5) {
          throw $p;
        } else {
          this._state_0 = this._exceptionState;
          this._exception_0 = $p;
        }
      }
     while (true);
  };
  $collectCOROUTINE$1.$metadata$ = {
    simpleName: '$collectCOROUTINE$1',
    kind: 'class',
    interfaces: []
  };
  function AbstractFlow() {
  }
  AbstractFlow.prototype.collect_l0hod5_k$ = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$1(this, collector, $cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_0_k$();
  };
  AbstractFlow.$metadata$ = {
    simpleName: 'AbstractFlow',
    kind: 'class',
    interfaces: [Flow, CancellableFlow]
  };
  function FlowCollector() {
  }
  FlowCollector.$metadata$ = {
    simpleName: 'FlowCollector',
    kind: 'interface',
    interfaces: []
  };
  function checkOwnership(_this_, owner) {
    if (!(_this_._owner === owner))
      throw _this_;
  }
  function _get_NULL_() {
    init_properties_NullSurrogate_kt();
    return NULL;
  }
  var NULL;
  var UNINITIALIZED;
  var DONE;
  var properties_initialized_NullSurrogate_kt;
  function init_properties_NullSurrogate_kt() {
    if (!properties_initialized_NullSurrogate_kt) {
      properties_initialized_NullSurrogate_kt = true;
      NULL = new Symbol('NULL');
      UNINITIALIZED = new Symbol('UNINITIALIZED');
      DONE = new Symbol('DONE');
    }}
  function checkContext(_this_, currentContext) {
    var result = currentContext.fold_cq605b_k$(0, _no_name_provided_$factory_23(_this_));
    if (!(result === _this_._collectContextSize)) {
      {
        var tmp0_error_0 = 'Flow invariant is violated:\n' + ('' + '\t\tFlow was collected in ' + _this_._collectContext + ',\n') + ('' + '\t\tbut emission happened in ' + currentContext + '.\n') + "\t\tPlease refer to 'flow' documentation or use 'flowOn' instead";
        throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
      }
    }}
  function transitiveCoroutineParent(_this_, collectJob) {
    var $this = _this_;
    var collectJob_0 = collectJob;
    while (true) {
      var $this_0 = $this;
      var collectJob_1 = collectJob_0;
      if ($this_0 === null)
        return null;
      if ($this_0 === collectJob_1)
        return $this_0;
      if (!($this_0 instanceof ScopeCoroutine))
        return $this_0;
      else {
      }
      $this = ($this_0 instanceof ScopeCoroutine ? $this_0 : THROW_CCE())._get_parent__0_k$();
      collectJob_0 = collectJob_1;
      continue;
    }
  }
  function _no_name_provided__26($this_checkContext) {
    this._$this_checkContext = $this_checkContext;
  }
  _no_name_provided__26.prototype.invoke_c68gd4_k$ = function (count, element) {
    var key = element._get_key__0_k$();
    var collectElement = this._$this_checkContext._collectContext.get_9uvjra_k$(key);
    if (!(key === Key_getInstance_2())) {
      return !(element === collectElement) ? IntCompanionObject_getInstance()._MIN_VALUE : count + 1 | 0;
    }var collectJob = (collectElement == null ? true : isInterface(collectElement, Job)) ? collectElement : THROW_CCE();
    var emissionParentJob = transitiveCoroutineParent(isInterface(element, Job) ? element : THROW_CCE(), collectJob);
    if (!(emissionParentJob === collectJob)) {
      {
        var tmp0_error_0 = 'Flow invariant is violated:\n\t\tEmission from another coroutine is detected.\n' + ('' + '\t\tChild of ' + emissionParentJob + ', expected child of ' + collectJob + '.\n') + '\t\tFlowCollector is not thread-safe and concurrent emissions are prohibited.\n' + "\t\tTo mitigate this restriction please use 'channelFlow' builder instead of 'flow'";
        throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
      }
    }return collectJob == null ? count : count + 1 | 0;
  };
  _no_name_provided__26.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? typeof p1 === 'number' : false) ? p1 : THROW_CCE();
    return this.invoke_c68gd4_k$(tmp, (!(p2 == null) ? isInterface(p2, Element_0) : false) ? p2 : THROW_CCE());
  };
  _no_name_provided__26.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_23($this_checkContext) {
    var i = new _no_name_provided__26($this_checkContext);
    return function (p1, p2) {
      return i.invoke_c68gd4_k$(p1, p2);
    };
  }
  function CancellableFlow() {
  }
  CancellableFlow.$metadata$ = {
    simpleName: 'CancellableFlow',
    kind: 'interface',
    interfaces: [Flow]
  };
  function first(_this_, $cont) {
    var tmp = new $firstCOROUTINE$4(_this_, $cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_0_k$();
  }
  function _no_name_provided__2_0($result) {
    this._$result = $result;
  }
  _no_name_provided__2_0.prototype.emit_3_iav7o_k$ = function (value, $cont) {
    var tmp$ret$0;
    $l$block: {
      this._$result._v = value;
      tmp$ret$0 = false;
      break $l$block;
    }
    if (!tmp$ret$0) {
      throw new AbortFlowException(this);
    } else {
    }
  };
  _no_name_provided__2_0.prototype.emit_iav7o_k$ = function (value, $cont) {
    return this.emit_3_iav7o_k$((value == null ? true : isObject(value)) ? value : THROW_CCE(), $cont);
  };
  _no_name_provided__2_0.$metadata$ = {
    simpleName: '<no name provided>_2',
    kind: 'class',
    interfaces: [FlowCollector]
  };
  function $firstCOROUTINE$4(_this_, resultContinuation) {
    CoroutineImpl_0.call(this, resultContinuation);
    this.__this__0 = _this_;
  }
  $firstCOROUTINE$4.prototype.doResume_0_k$ = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        switch (tmp) {
          case 0:
            this._exceptionState = 3;
            this._result0 = {_v: _get_NULL_()};
            var tmp_0 = this;
            tmp_0._collector_11 = new _no_name_provided__2_0(this._result0);
            this._exceptionState = 2;
            this._state_0 = 1;
            suspendResult = this.__this__0.collect_l0hod5_k$(this._collector_11, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 1:
            this._exceptionState = 3;
            this._state_0 = 4;
            continue $sm;
          case 2:
            this._exceptionState = 3;
            var tmp_1 = this._exception_0;
            if (tmp_1 instanceof AbortFlowException) {
              var tmp_2 = this._exception_0;
              var e_7 = tmp_2 instanceof AbortFlowException ? tmp_2 : THROW_CCE();
              checkOwnership(e_7, this._collector_11);
              this._state_0 = 4;
              continue $sm;
            } else {
              {
                throw this._exception_0;
              }
            }

            break;
          case 3:
            throw this._exception_0;
          case 4:
            this._exceptionState = 3;
            if (this._result0._v === _get_NULL_())
              throw NoSuchElementException_init_$Create$_0('Expected at least one element');
            var tmp_3 = this._result0._v;
            return (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
        }
      } catch ($p) {
        if (this._exceptionState === 3) {
          throw $p;
        } else {
          this._state_0 = this._exceptionState;
          this._exception_0 = $p;
        }
      }
     while (true);
  };
  $firstCOROUTINE$4.$metadata$ = {
    simpleName: '$firstCOROUTINE$4',
    kind: 'class',
    interfaces: []
  };
  function ensureCapacity($this) {
    var currentSize = $this._elements.length;
    var newCapacity = currentSize << 1;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = fillArrayVal(Array(newCapacity), null);
      break $l$block;
    }
    var newElements = tmp$ret$0;
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_copyInto_0 = $this._elements;
      var tmp1_copyInto_0 = $this._head_0;
      var tmp2_copyInto_0 = tmp0_copyInto_0.length;
      arrayCopy_0(tmp0_copyInto_0, newElements, 0, tmp1_copyInto_0, tmp2_copyInto_0);
      tmp$ret$1 = newElements;
      break $l$block_0;
    }
    Unit_getInstance();
    var tmp$ret$2;
    $l$block_1: {
      var tmp3_copyInto_0 = $this._elements;
      var tmp4_copyInto_0 = $this._elements.length - $this._head_0 | 0;
      var tmp5_copyInto_0 = $this._head_0;
      arrayCopy_0(tmp3_copyInto_0, newElements, tmp4_copyInto_0, 0, tmp5_copyInto_0);
      tmp$ret$2 = newElements;
      break $l$block_1;
    }
    Unit_getInstance();
    $this._elements = newElements;
    $this._head_0 = 0;
    $this._tail = currentSize;
  }
  function ArrayQueue() {
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = fillArrayVal(Array(16), null);
      break $l$block;
    }
    tmp._elements = tmp$ret$0;
    this._head_0 = 0;
    this._tail = 0;
  }
  ArrayQueue.prototype._get_isEmpty__0_k$ = function () {
    return this._head_0 === this._tail;
  };
  ArrayQueue.prototype.addLast_iav7o_k$ = function (element) {
    this._elements[this._tail] = element;
    this._tail = (this._tail + 1 | 0) & (this._elements.length - 1 | 0);
    if (this._tail === this._head_0)
      ensureCapacity(this);
  };
  ArrayQueue.prototype.removeFirstOrNull_0_k$ = function () {
    if (this._head_0 === this._tail)
      return null;
    var element = this._elements[this._head_0];
    this._elements[this._head_0] = null;
    this._head_0 = (this._head_0 + 1 | 0) & (this._elements.length - 1 | 0);
    return isObject(element) ? element : THROW_CCE();
  };
  ArrayQueue.$metadata$ = {
    simpleName: 'ArrayQueue',
    kind: 'class',
    interfaces: []
  };
  function OpDescriptor() {
  }
  OpDescriptor.$metadata$ = {
    simpleName: 'OpDescriptor',
    kind: 'class',
    interfaces: []
  };
  function _get_UNDEFINED_() {
    init_properties_DispatchedContinuation_kt();
    return UNDEFINED;
  }
  var UNDEFINED;
  function _get_REUSABLE_CLAIMED_() {
    init_properties_DispatchedContinuation_kt();
    return REUSABLE_CLAIMED;
  }
  var REUSABLE_CLAIMED;
  function _get_reusableCancellableContinuation_($this) {
    var tmp = $this.__reusableCancellableContinuation._value;
    var tmp_0 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    return tmp_0 instanceof CancellableContinuationImpl ? tmp_0 : null;
  }
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, -1);
    this._dispatcher = dispatcher;
    this._continuation = continuation;
    this.__state_1 = _get_UNDEFINED_();
    this._countOrElement = threadContextElements(this._get_context__0_k$());
    this.__reusableCancellableContinuation = atomic(null);
  }
  DispatchedContinuation.prototype._get_context__0_k$ = function () {
    return this._continuation._get_context__0_k$();
  };
  DispatchedContinuation.prototype.isReusable_0_k$ = function () {
    var tmp = this.__reusableCancellableContinuation._value;
    return !(((tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE()) == null);
  };
  DispatchedContinuation.prototype.awaitReusability_sv8swh_k$ = function () {
    {
      var tmp0_loop_0 = this.__reusableCancellableContinuation;
      while (true) {
        {
          var tmp = tmp0_loop_0._value;
          var tmp1__anonymous__1 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
          if (!(tmp1__anonymous__1 === _get_REUSABLE_CLAIMED_()))
            return Unit_getInstance();
        }
      }
      Unit_getInstance();
    }
  };
  DispatchedContinuation.prototype.release_sv8swh_k$ = function () {
    this.awaitReusability_sv8swh_k$();
    var tmp0_safe_receiver = _get_reusableCancellableContinuation_(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.detachChild_sv8swh_k$();
      Unit_getInstance();
    }
    Unit_getInstance();
  };
  DispatchedContinuation.prototype.tryReleaseClaimedContinuation_7b8qoa_k$ = function (continuation) {
    {
      var tmp0_loop_0 = this.__reusableCancellableContinuation;
      while (true) {
        {
          var tmp = tmp0_loop_0._value;
          var tmp1__anonymous__1 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
          if (tmp1__anonymous__1 === _get_REUSABLE_CLAIMED_()) {
            if (this.__reusableCancellableContinuation.atomicfu$compareAndSet(_get_REUSABLE_CLAIMED_(), continuation))
              return null;
          } else {
            if (tmp1__anonymous__1 instanceof Error) {
              {
                var tmp0_require_0_2 = this.__reusableCancellableContinuation.atomicfu$compareAndSet(tmp1__anonymous__1, null);
                {
                }
                {
                  {
                  }
                  if (!tmp0_require_0_2) {
                    var tmp$ret$0;
                    $l$block: {
                      tmp$ret$0 = 'Failed requirement.';
                      break $l$block;
                    }
                    var message_2_1_3 = tmp$ret$0;
                    throw IllegalArgumentException_init_$Create$(toString_1(message_2_1_3));
                  }}
              }
              return tmp1__anonymous__1 instanceof Error ? tmp1__anonymous__1 : THROW_CCE();
            } else {
              {
                var tmp1_error_0_4 = '' + 'Inconsistent state ' + tmp1__anonymous__1;
                throw IllegalStateException_init_$Create$(toString_1(tmp1_error_0_4));
              }
            }
          }
        }
      }
      Unit_getInstance();
    }
  };
  DispatchedContinuation.prototype.postponeCancellation_onfaoi_k$ = function (cause) {
    {
      var tmp0_loop_0 = this.__reusableCancellableContinuation;
      while (true) {
        {
          var tmp = tmp0_loop_0._value;
          var tmp1__anonymous__1 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
          var tmp0_subject_2 = tmp1__anonymous__1;
          if (equals(tmp0_subject_2, _get_REUSABLE_CLAIMED_())) {
            if (this.__reusableCancellableContinuation.atomicfu$compareAndSet(_get_REUSABLE_CLAIMED_(), cause))
              return true;
          } else {
            if (tmp0_subject_2 instanceof Error)
              return true;
            else {
              {
                if (this.__reusableCancellableContinuation.atomicfu$compareAndSet(tmp1__anonymous__1, null))
                  return false;
              }
            }
          }
        }
      }
      Unit_getInstance();
    }
  };
  DispatchedContinuation.prototype.takeState_0_k$ = function () {
    var state = this.__state_1;
    {
    }
    this.__state_1 = _get_UNDEFINED_();
    return state;
  };
  DispatchedContinuation.prototype._get_delegate__0_k$ = function () {
    return this;
  };
  DispatchedContinuation.prototype.resumeWith_bnunh2_k$ = function (result) {
    var context = this._continuation._get_context__0_k$();
    var state = toState$default(result, null, 1, null);
    if (this._dispatcher.isDispatchNeeded_d7pszg_k$(context)) {
      this.__state_1 = state;
      this._set_resumeMode__majfzk_k$(0);
      this._dispatcher.dispatch_7n0ou3_k$(context, this);
    } else {
      var tmp$ret$0;
      $l$block_1: {
        var tmp0_executeUnconfined_0 = 0;
        {
        }
        var eventLoop_2 = ThreadLocalEventLoop_getInstance()._get_eventLoop__0_k$();
        if (false ? eventLoop_2._get_isUnconfinedQueueEmpty__0_k$() : false) {
          tmp$ret$0 = false;
          break $l$block_1;
        }var tmp;
        if (eventLoop_2._get_isUnconfinedLoopActive__0_k$()) {
          this.__state_1 = state;
          this._set_resumeMode__majfzk_k$(tmp0_executeUnconfined_0);
          eventLoop_2.dispatchUnconfined_3yrun8_k$(this);
          tmp = true;
        } else {
          {
            eventLoop_2.incrementUseCount_rpwsgn_k$(true);
            try {
              {
                var tmp$ret$1;
                $l$block_0: {
                  var tmp0_withCoroutineContext_0_4 = this._get_context__0_k$();
                  var tmp1_withCoroutineContext_0_5 = this._countOrElement;
                  tmp$ret$1 = this._continuation.resumeWith_bnunh2_k$(result);
                  break $l$block_0;
                }
              }
              $l$break: while (true) {
                if (!eventLoop_2.processUnconfinedEvent_0_k$())
                  break $l$break;
              }
            } catch ($p) {
              if ($p instanceof Error) {
                this.handleFatalException_amk5yv_k$($p instanceof Error ? $p : THROW_CCE(), null);
              } else {
                {
                  throw $p;
                }
              }
            }
            finally {
              eventLoop_2.decrementUseCount_rpwsgn_k$(true);
            }
          }
          tmp = false;
        }
        tmp$ret$0 = tmp;
        break $l$block_1;
      }
      Unit_getInstance();
    }
  };
  DispatchedContinuation.prototype.cancelCompletedResult_6goujk_k$ = function (takenState, cause) {
    if (takenState instanceof CompletedWithCancellation) {
      (takenState instanceof CompletedWithCancellation ? takenState : THROW_CCE())._onCancellation_0(cause);
    } else {
    }
  };
  DispatchedContinuation.prototype.toString = function () {
    return '' + 'DispatchedContinuation[' + this._dispatcher + ', ' + toDebugString(this._continuation) + ']';
  };
  DispatchedContinuation.$metadata$ = {
    simpleName: 'DispatchedContinuation',
    kind: 'class',
    interfaces: [CoroutineStackFrame, Continuation]
  };
  var properties_initialized_DispatchedContinuation_kt;
  function init_properties_DispatchedContinuation_kt() {
    if (!properties_initialized_DispatchedContinuation_kt) {
      properties_initialized_DispatchedContinuation_kt = true;
      UNDEFINED = new Symbol('UNDEFINED');
      REUSABLE_CLAIMED = new Symbol('REUSABLE_CLAIMED');
    }}
  function DispatchedTask(resumeMode) {
    SchedulerTask.call(this);
    this._resumeMode = resumeMode;
  }
  DispatchedTask.prototype._set_resumeMode__majfzk_k$ = function (_set___) {
    this._resumeMode = _set___;
  };
  DispatchedTask.prototype._get_resumeMode__0_k$ = function () {
    return this._resumeMode;
  };
  DispatchedTask.prototype.cancelCompletedResult_6goujk_k$ = function (takenState, cause) {
  };
  DispatchedTask.prototype.getSuccessfulResult_6jiqgr_k$ = function (state) {
    return (state == null ? true : isObject(state)) ? state : THROW_CCE();
  };
  DispatchedTask.prototype.getExceptionalResult_wi7j7l_k$ = function (state) {
    var tmp0_safe_receiver = state instanceof CompletedExceptionally ? state : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver._cause;
  };
  DispatchedTask.prototype.run_sv8swh_k$ = function () {
    {
    }
    var taskContext = _get_taskContext_(this);
    var fatalException = null;
    try {
      var tmp = this._get_delegate__0_k$();
      var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
      var tmp_0 = delegate._continuation;
      var continuation = isInterface(tmp_0, Continuation) ? tmp_0 : THROW_CCE();
      var tmp$ret$5;
      $l$block_4: {
        var tmp0_withContinuationContext_0 = delegate._countOrElement;
        var context_2 = continuation._get_context__0_k$();
        var state_3 = this.takeState_0_k$();
        var exception_4 = this.getExceptionalResult_wi7j7l_k$(state_3);
        var job_5 = (exception_4 == null ? _get_isCancellableMode_(this._resumeMode) : false) ? context_2.get_9uvjra_k$(Key_getInstance_2()) : null;
        var tmp_1;
        if (!(job_5 == null) ? !job_5._get_isActive__0_k$() : false) {
          var cause_6 = job_5.getCancellationException_0_k$();
          this.cancelCompletedResult_6goujk_k$(state_3, cause_6);
          var tmp$ret$0;
          $l$block: {
            var tmp0_failure_0_7 = Companion_getInstance_2();
            var tmp1_failure_0_8 = recoverStackTrace(cause_6, continuation);
            tmp$ret$0 = _Result___init__impl_(createFailure(tmp1_failure_0_8));
            break $l$block;
          }
          tmp_1 = continuation.resumeWith_bnunh2_k$(tmp$ret$0);
        } else {
          var tmp_2;
          if (!(exception_4 == null)) {
            var tmp$ret$2;
            $l$block_1: {
              var tmp$ret$1;
              $l$block_0: {
                var tmp0_failure_0_1_9 = Companion_getInstance_2();
                tmp$ret$1 = _Result___init__impl_(createFailure(exception_4));
                break $l$block_0;
              }
              tmp$ret$2 = continuation.resumeWith_bnunh2_k$(tmp$ret$1);
              break $l$block_1;
            }
            tmp_2 = tmp$ret$2;
          } else {
            var tmp$ret$4;
            $l$block_3: {
              var tmp2_resume_0_10 = this.getSuccessfulResult_6jiqgr_k$(state_3);
              var tmp$ret$3;
              $l$block_2: {
                var tmp0_success_0_1_11 = Companion_getInstance_2();
                tmp$ret$3 = _Result___init__impl_(tmp2_resume_0_10);
                break $l$block_2;
              }
              tmp$ret$4 = continuation.resumeWith_bnunh2_k$(tmp$ret$3);
              break $l$block_3;
            }
            tmp_2 = tmp$ret$4;
          }
          tmp_1 = tmp_2;
        }
        tmp$ret$5 = tmp_1;
        break $l$block_4;
      }
    } catch ($p) {
      if ($p instanceof Error) {
        fatalException = $p instanceof Error ? $p : THROW_CCE();
      } else {
        {
          throw $p;
        }
      }
    }
    finally {
      var tmp$ret$8;
      $l$block_7: {
        var tmp_3;
        try {
          var tmp$ret$6;
          $l$block_5: {
            var tmp0_success_0_1 = Companion_getInstance_2();
            var tmp1_success_0_2 = Unit_getInstance();
            tmp$ret$6 = _Result___init__impl_(Unit_getInstance());
            break $l$block_5;
          }
          tmp_3 = tmp$ret$6;
        } catch ($p_0) {
          var tmp_4;
          if ($p_0 instanceof Error) {
            var tmp$ret$7;
            $l$block_6: {
              var tmp2_failure_0_4 = Companion_getInstance_2();
              tmp$ret$7 = _Result___init__impl_(createFailure($p_0 instanceof Error ? $p_0 : THROW_CCE()));
              break $l$block_6;
            }
            tmp_4 = tmp$ret$7;
          } else {
            {
              throw $p_0;
            }
          }
          tmp_3 = tmp_4;
        }
        tmp$ret$8 = tmp_3;
        break $l$block_7;
      }
      var result = tmp$ret$8;
      this.handleFatalException_amk5yv_k$(fatalException, Result__exceptionOrNull_impl(result));
    }
  };
  DispatchedTask.prototype.handleFatalException_amk5yv_k$ = function (exception, finallyException) {
    if (exception === null ? finallyException === null : false)
      return Unit_getInstance();
    if (!(exception === null) ? !(finallyException === null) : false) {
      {
      }
    }var tmp0_elvis_lhs = exception;
    var cause = tmp0_elvis_lhs == null ? finallyException : tmp0_elvis_lhs;
    var reason = new CoroutinesInternalError('' + 'Fatal exception in coroutines machinery for ' + this + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", ensureNotNull(cause));
    handleCoroutineException(this._get_delegate__0_k$()._get_context__0_k$(), reason);
  };
  DispatchedTask.$metadata$ = {
    simpleName: 'DispatchedTask',
    kind: 'class',
    interfaces: []
  };
  function _get_isReusableMode_(_this_) {
    return _this_ === 2;
  }
  function _get_isCancellableMode_(_this_) {
    return _this_ === 1 ? true : _this_ === 2;
  }
  function dispatch(_this_, mode) {
    {
    }
    var delegate = _this_._get_delegate__0_k$();
    var undispatched = mode === 4;
    var tmp;
    var tmp_0;
    if (!undispatched) {
      tmp_0 = delegate instanceof DispatchedContinuation;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = _get_isCancellableMode_(mode) === _get_isCancellableMode_(_this_._resumeMode);
    } else {
      {
        tmp = false;
      }
    }
    if (tmp) {
      var dispatcher = (delegate instanceof DispatchedContinuation ? delegate : THROW_CCE())._dispatcher;
      var context = delegate._get_context__0_k$();
      if (dispatcher.isDispatchNeeded_d7pszg_k$(context)) {
        dispatcher.dispatch_7n0ou3_k$(context, _this_);
      } else {
        resumeUnconfined(_this_);
      }
    } else {
      {
        resume(_this_, delegate, undispatched);
      }
    }
  }
  function resumeUnconfined(_this_) {
    var eventLoop = ThreadLocalEventLoop_getInstance()._get_eventLoop__0_k$();
    if (eventLoop._get_isUnconfinedLoopActive__0_k$()) {
      eventLoop.dispatchUnconfined_3yrun8_k$(_this_);
    } else {
      {
        eventLoop.incrementUseCount_rpwsgn_k$(true);
        try {
          {
            resume(_this_, _this_._get_delegate__0_k$(), true);
          }
          $l$break: while (true) {
            if (!eventLoop.processUnconfinedEvent_0_k$())
              break $l$break;
          }
        } catch ($p) {
          if ($p instanceof Error) {
            _this_.handleFatalException_amk5yv_k$($p instanceof Error ? $p : THROW_CCE(), null);
          } else {
            {
              throw $p;
            }
          }
        }
        finally {
          eventLoop.decrementUseCount_rpwsgn_k$(true);
        }
      }
    }
  }
  function resume(_this_, delegate, undispatched) {
    var state = _this_.takeState_0_k$();
    var exception = _this_.getExceptionalResult_wi7j7l_k$(state);
    var tmp;
    if (!(exception == null)) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_failure_0 = Companion_getInstance_2();
        tmp$ret$0 = _Result___init__impl_(createFailure(exception));
        break $l$block;
      }
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      $l$block_0: {
        var tmp1_success_0 = Companion_getInstance_2();
        var tmp2_success_0 = _this_.getSuccessfulResult_6jiqgr_k$(state);
        tmp$ret$1 = _Result___init__impl_(tmp2_success_0);
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    }
    var result = tmp;
    if (undispatched) {
      var tmp3_resumeUndispatchedWith_0 = delegate instanceof DispatchedContinuation ? delegate : THROW_CCE();
      var tmp$ret$2;
      $l$block_1: {
        var tmp0_withContinuationContext_0_1 = tmp3_resumeUndispatchedWith_0._continuation;
        var tmp1_withContinuationContext_0_2 = tmp3_resumeUndispatchedWith_0._countOrElement;
        tmp$ret$2 = tmp3_resumeUndispatchedWith_0._continuation.resumeWith_bnunh2_k$(result);
        break $l$block_1;
      }
    } else
      delegate.resumeWith_bnunh2_k$(result);
  }
  function ScopeCoroutine() {
  }
  ScopeCoroutine.prototype._get_parent__0_k$ = function () {
    var tmp0_safe_receiver = this._get_parentHandle__0_k$();
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_parent__0_k$();
  };
  ScopeCoroutine.$metadata$ = {
    simpleName: 'ScopeCoroutine',
    kind: 'class',
    interfaces: [CoroutineStackFrame]
  };
  function Symbol(symbol) {
    this._symbol = symbol;
  }
  Symbol.prototype.toString = function () {
    return '' + '<' + this._symbol + '>';
  };
  Symbol.$metadata$ = {
    simpleName: 'Symbol',
    kind: 'class',
    interfaces: []
  };
  function SelectClause0() {
  }
  SelectClause0.$metadata$ = {
    simpleName: 'SelectClause0',
    kind: 'interface',
    interfaces: []
  };
  function CompletionHandlerBase() {
    LinkedListNode.call(this);
  }
  CompletionHandlerBase.$metadata$ = {
    simpleName: 'CompletionHandlerBase',
    kind: 'class',
    interfaces: []
  };
  function invokeIt(_this_, cause) {
    var tmp0_subject = typeof _this_;
    if (tmp0_subject === 'function')
      _this_(cause);
    else {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _this_;
        break $l$block;
      }
      tmp$ret$0.invoke(cause);
    }
  }
  function CancelHandlerBase() {
  }
  CancelHandlerBase.$metadata$ = {
    simpleName: 'CancelHandlerBase',
    kind: 'class',
    interfaces: []
  };
  function toDebugString(_this_) {
    return toString_1(_this_);
  }
  function _get_DefaultDelay_() {
    var tmp = Dispatchers_getInstance()._Default;
    return isInterface(tmp, Delay) ? tmp : THROW_CCE();
  }
  function createDefaultDispatcher() {
    var tmp;
    if ((!(typeof navigator === 'undefined') ? navigator != null : false) ? navigator.product == 'ReactNative' : false) {
      tmp = NodeDispatcher_getInstance();
    } else {
      if (isJsdom()) {
        tmp = NodeDispatcher_getInstance();
      } else {
        var tmp_0;
        var tmp_1;
        if (!(typeof window === 'undefined')) {
          var tmp$ret$0;
          $l$block: {
            var tmp0_asDynamic_0 = window;
            tmp$ret$0 = tmp0_asDynamic_0;
            break $l$block;
          }
          tmp_1 = tmp$ret$0 != null;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          var tmp$ret$1;
          $l$block_0: {
            var tmp1_asDynamic_0 = window;
            tmp$ret$1 = tmp1_asDynamic_0;
            break $l$block_0;
          }
          tmp_0 = !(typeof tmp$ret$1.addEventListener === 'undefined');
        } else {
          {
            tmp_0 = false;
          }
        }
        if (tmp_0) {
          tmp = asCoroutineDispatcher(window);
        } else {
          if (typeof process === 'undefined') {
            tmp = SetTimeoutDispatcher_getInstance();
          } else {
            {
              tmp = NodeDispatcher_getInstance();
            }
          }
        }
      }
    }
    return tmp;
  }
  function isJsdom() {
    var tmp;
    if ((((!(typeof navigator === 'undefined') ? navigator != null : false) ? navigator.userAgent != null : false) ? !(typeof navigator.userAgent === 'undefined') : false) ? !(typeof navigator.userAgent.match === 'undefined') : false) {
      var tmp_0 = navigator.userAgent.match('\\bjsdom\\b');
      tmp = (!(tmp_0 == null) ? typeof tmp_0 === 'boolean' : false) ? tmp_0 : THROW_CCE();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function handleCoroutineExceptionImpl(context, exception) {
    console.error(exception);
  }
  var counter;
  var DEBUG;
  function _get_classSimpleName_(_this_) {
    var tmp0_elvis_lhs = getKClassFromExpression_0(_this_)._get_simpleName__0_k$();
    return tmp0_elvis_lhs == null ? 'Unknown' : tmp0_elvis_lhs;
  }
  function _get_hexAddress_(_this_) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _this_;
      break $l$block;
    }
    var result = tmp$ret$0.__debug_counter;
    if (!(typeof result === 'number')) {
      counter = counter + 1 | 0;
      result = counter;
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = _this_;
        break $l$block_0;
      }
      tmp$ret$1.__debug_counter = result;
    }return ((!(result == null) ? typeof result === 'number' : false) ? result : THROW_CCE()).toString();
  }
  function Dispatchers() {
    Dispatchers_instance = this;
    this._Default = createDefaultDispatcher();
    this._Main = new JsMainDispatcher(this._Default, false);
    this._Unconfined = Unconfined_getInstance();
  }
  Dispatchers.$metadata$ = {
    simpleName: 'Dispatchers',
    kind: 'object',
    interfaces: []
  };
  var Dispatchers_instance;
  function Dispatchers_getInstance() {
    if (Dispatchers_instance == null)
      new Dispatchers();
    return Dispatchers_instance;
  }
  function JsMainDispatcher(delegate, invokeImmediately) {
    MainCoroutineDispatcher.call(this);
    this._delegate_0 = delegate;
    this._invokeImmediately = invokeImmediately;
    this._immediate = this._invokeImmediately ? this : new JsMainDispatcher(this._delegate_0, true);
  }
  JsMainDispatcher.prototype._get_immediate__0_k$ = function () {
    return this._immediate;
  };
  JsMainDispatcher.prototype.isDispatchNeeded_d7pszg_k$ = function (context) {
    return !this._invokeImmediately;
  };
  JsMainDispatcher.prototype.dispatch_7n0ou3_k$ = function (context, block) {
    return this._delegate_0.dispatch_7n0ou3_k$(context, block);
  };
  JsMainDispatcher.prototype.toString = function () {
    var tmp0_elvis_lhs = this.toStringInternalImpl_0_k$();
    return tmp0_elvis_lhs == null ? this._delegate_0.toString() : tmp0_elvis_lhs;
  };
  JsMainDispatcher.$metadata$ = {
    simpleName: 'JsMainDispatcher',
    kind: 'class',
    interfaces: []
  };
  function createEventLoop() {
    return new UnconfinedEventLoop();
  }
  function UnconfinedEventLoop() {
    EventLoop.call(this);
  }
  UnconfinedEventLoop.prototype.dispatch_7n0ou3_k$ = function (context, block) {
    unsupported();
  };
  UnconfinedEventLoop.$metadata$ = {
    simpleName: 'UnconfinedEventLoop',
    kind: 'class',
    interfaces: []
  };
  function unsupported() {
    throw UnsupportedOperationException_init_$Create$_0('runBlocking event loop is not supported');
  }
  function JobCancellationException(message, cause, job) {
    CancellationException_init_$Init$_0(message, cause, this);
    this._job_0 = job;
    captureStack(this, JobCancellationException);
  }
  JobCancellationException.prototype.toString = function () {
    return '' + CancellationException.prototype.toString.call(this) + '; job=' + this._job_0;
  };
  JobCancellationException.prototype.equals = function (other) {
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      var tmp_2;
      if (other instanceof JobCancellationException) {
        tmp_2 = (other instanceof JobCancellationException ? other : THROW_CCE()).message == this.message;
      } else {
        {
          tmp_2 = false;
        }
      }
      if (tmp_2) {
        tmp_1 = equals((other instanceof JobCancellationException ? other : THROW_CCE())._job_0, this._job_0);
      } else {
        {
          tmp_1 = false;
        }
      }
      if (tmp_1) {
        tmp_0 = equals((other instanceof JobCancellationException ? other : THROW_CCE()).cause, this.cause);
      } else {
        {
          tmp_0 = false;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  JobCancellationException.prototype.hashCode = function () {
    var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this._job_0) | 0, 31);
    var tmp0_safe_receiver = this.cause;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  };
  JobCancellationException.$metadata$ = {
    simpleName: 'JobCancellationException',
    kind: 'class',
    interfaces: []
  };
  function NodeDispatcher() {
    NodeDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  NodeDispatcher.prototype.scheduleQueueProcessing_sv8swh_k$ = function () {
    process.nextTick(this._get_messageQueue__0_k$()._processQueue);
  };
  NodeDispatcher.$metadata$ = {
    simpleName: 'NodeDispatcher',
    kind: 'object',
    interfaces: []
  };
  var NodeDispatcher_instance;
  function NodeDispatcher_getInstance() {
    if (NodeDispatcher_instance == null)
      new NodeDispatcher();
    return NodeDispatcher_instance;
  }
  function SetTimeoutDispatcher() {
    SetTimeoutDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  SetTimeoutDispatcher.prototype.scheduleQueueProcessing_sv8swh_k$ = function () {
    setTimeout(this._get_messageQueue__0_k$()._processQueue, 0);
    Unit_getInstance();
  };
  SetTimeoutDispatcher.$metadata$ = {
    simpleName: 'SetTimeoutDispatcher',
    kind: 'object',
    interfaces: []
  };
  var SetTimeoutDispatcher_instance;
  function SetTimeoutDispatcher_getInstance() {
    if (SetTimeoutDispatcher_instance == null)
      new SetTimeoutDispatcher();
    return SetTimeoutDispatcher_instance;
  }
  function _no_name_provided__27(this$0) {
    this._this$0_3 = this$0;
  }
  _no_name_provided__27.prototype.invoke_sv8swh_k$ = function () {
    this._this$0_3.process_sv8swh_k$();
  };
  _no_name_provided__27.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function ScheduledMessageQueue($outer) {
    this._$this_4 = $outer;
    MessageQueue.call(this);
    var tmp = this;
    tmp._processQueue = _no_name_provided_$factory_24(this);
  }
  ScheduledMessageQueue.prototype.schedule_sv8swh_k$ = function () {
    this._$this_4.scheduleQueueProcessing_sv8swh_k$();
  };
  ScheduledMessageQueue.prototype.reschedule_sv8swh_k$ = function () {
    setTimeout(this._processQueue, 0);
    Unit_getInstance();
  };
  ScheduledMessageQueue.$metadata$ = {
    simpleName: 'ScheduledMessageQueue',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__28($continuation, this$0) {
    this._$continuation = $continuation;
    this._this$0_4 = this$0;
  }
  _no_name_provided__28.prototype.invoke_sv8swh_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      {
      }
      tmp$ret$0 = this._$continuation.resumeUndispatched_eocpx4_k$(this._this$0_4, Unit_getInstance());
      break $l$block;
    }
  };
  _no_name_provided__28.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function SetTimeoutBasedDispatcher() {
    CoroutineDispatcher.call(this);
    this._messageQueue = new ScheduledMessageQueue(this);
  }
  SetTimeoutBasedDispatcher.prototype._get_messageQueue__0_k$ = function () {
    return this._messageQueue;
  };
  SetTimeoutBasedDispatcher.prototype.dispatch_7n0ou3_k$ = function (context, block) {
    this._messageQueue.enqueue_iz8ddj_k$(block);
  };
  SetTimeoutBasedDispatcher.prototype.scheduleResumeAfterDelay_tkxym4_k$ = function (timeMillis, continuation) {
    var handle = setTimeout(_no_name_provided_$factory_25(continuation, this), delayToInt(timeMillis));
    var tmp$ret$1;
    $l$block_0: {
      var tmp0__get_asHandler__0 = new ClearTimeout(handle);
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0__get_asHandler__0;
        break $l$block;
      }
      var tmp = tmp$ret$0;
      tmp$ret$1 = (!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE();
      break $l$block_0;
    }
    continuation.invokeOnCancellation_aip8gd_k$(tmp$ret$1);
  };
  SetTimeoutBasedDispatcher.$metadata$ = {
    simpleName: 'SetTimeoutBasedDispatcher',
    kind: 'class',
    interfaces: [Delay]
  };
  function MessageQueue() {
    ArrayQueue.call(this);
    this._yieldEvery = 16;
    this._scheduled = false;
  }
  MessageQueue.prototype.enqueue_iz8ddj_k$ = function (element) {
    this.addLast_iav7o_k$(element);
    if (!this._scheduled) {
      this._scheduled = true;
      this.schedule_sv8swh_k$();
    }};
  MessageQueue.prototype.process_sv8swh_k$ = function () {
    try {
      {
        var tmp0_repeat_0 = this._yieldEvery;
        {
        }
        var inductionVariable = 0;
        if (inductionVariable < tmp0_repeat_0)
          do {
            var index_2 = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            {
              var tmp0_elvis_lhs_5 = this.removeFirstOrNull_0_k$();
              var tmp;
              if (tmp0_elvis_lhs_5 == null) {
                return Unit_getInstance();
              } else {
                tmp = tmp0_elvis_lhs_5;
              }
              var element_4 = tmp;
              element_4.run_sv8swh_k$();
            }
          }
           while (inductionVariable < tmp0_repeat_0);
      }
    }finally {
      if (this._get_isEmpty__0_k$()) {
        this._scheduled = false;
      } else {
        this.reschedule_sv8swh_k$();
      }
    }
  };
  MessageQueue.$metadata$ = {
    simpleName: 'MessageQueue',
    kind: 'class',
    interfaces: []
  };
  function delayToInt(timeMillis) {
    return coerceIn(timeMillis, new Long(0, 0), new Long(2147483647, 0)).toInt_0_k$();
  }
  function ClearTimeout(handle) {
    CancelHandler.call(this);
    this._handle = handle;
  }
  ClearTimeout.prototype.dispose_sv8swh_k$ = function () {
    clearTimeout(this._handle);
  };
  ClearTimeout.prototype.invoke_houul8_k$ = function (cause) {
    this.dispose_sv8swh_k$();
  };
  ClearTimeout.prototype.invoke = function (cause) {
    return this.invoke_houul8_k$(cause);
  };
  ClearTimeout.prototype.toString = function () {
    return '' + 'ClearTimeout[' + this._handle + ']';
  };
  ClearTimeout.$metadata$ = {
    simpleName: 'ClearTimeout',
    kind: 'class',
    interfaces: [DisposableHandle]
  };
  function _no_name_provided__29($continuation, this$0) {
    this._$continuation_0 = $continuation;
    this._this$0_5 = this$0;
  }
  _no_name_provided__29.prototype.invoke_sv8swh_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      {
      }
      tmp$ret$0 = this._$continuation_0.resumeUndispatched_eocpx4_k$(this._this$0_5, Unit_getInstance());
      break $l$block;
    }
  };
  _no_name_provided__29.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this._window = window_0;
    this._queue = new WindowMessageQueue(this._window);
  }
  WindowDispatcher.prototype.dispatch_7n0ou3_k$ = function (context, block) {
    return this._queue.enqueue_iz8ddj_k$(block);
  };
  WindowDispatcher.prototype.scheduleResumeAfterDelay_tkxym4_k$ = function (timeMillis, continuation) {
    this._window.setTimeout(_no_name_provided_$factory_26(continuation, this), delayToInt(timeMillis));
    Unit_getInstance();
  };
  WindowDispatcher.$metadata$ = {
    simpleName: 'WindowDispatcher',
    kind: 'class',
    interfaces: [Delay]
  };
  function _no_name_provided__30(this$0) {
    this._this$0_6 = this$0;
  }
  _no_name_provided__30.prototype.invoke_h9nkbz_k$ = function (event) {
    if (event.source == this._this$0_6._window_0 ? event.data == this._this$0_6._messageName : false) {
      event.stopPropagation();
      this._this$0_6.process_sv8swh_k$();
    }};
  _no_name_provided__30.prototype.invoke_20e8_k$ = function (p1) {
    this.invoke_h9nkbz_k$((p1 == null ? true : p1) ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__30.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__31(this$0) {
    this._this$0_7 = this$0;
  }
  _no_name_provided__31.prototype.invoke_89eg7z_k$ = function (it) {
    this._this$0_7.process_sv8swh_k$();
  };
  _no_name_provided__31.prototype.invoke_20e8_k$ = function (p1) {
    this.invoke_89eg7z_k$(p1 instanceof Unit ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__31.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function WindowMessageQueue(window_0) {
    MessageQueue.call(this);
    this._window_0 = window_0;
    this._messageName = 'dispatchCoroutine';
    this._window_0.addEventListener('message', _no_name_provided_$factory_27(this), true);
  }
  WindowMessageQueue.prototype.schedule_sv8swh_k$ = function () {
    var tmp = Promise.resolve(Unit_getInstance());
    tmp.then(_no_name_provided_$factory_28(this));
    Unit_getInstance();
  };
  WindowMessageQueue.prototype.reschedule_sv8swh_k$ = function () {
    this._window_0.postMessage(this._messageName, '*');
  };
  WindowMessageQueue.$metadata$ = {
    simpleName: 'WindowMessageQueue',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_24(this$0) {
    var i = new _no_name_provided__27(this$0);
    return function () {
      i.invoke_sv8swh_k$();
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_25($continuation, this$0) {
    var i = new _no_name_provided__28($continuation, this$0);
    return function () {
      i.invoke_sv8swh_k$();
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_26($continuation, this$0) {
    var i = new _no_name_provided__29($continuation, this$0);
    return function () {
      i.invoke_sv8swh_k$();
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_27(this$0) {
    var i = new _no_name_provided__30(this$0);
    return function (p1) {
      i.invoke_h9nkbz_k$(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_28(this$0) {
    var i = new _no_name_provided__31(this$0);
    return function (p1) {
      i.invoke_89eg7z_k$(p1);
      return Unit_getInstance();
    };
  }
  function Runnable() {
  }
  Runnable.$metadata$ = {
    simpleName: 'Runnable',
    kind: 'interface',
    interfaces: []
  };
  function SchedulerTask() {
  }
  SchedulerTask.$metadata$ = {
    simpleName: 'SchedulerTask',
    kind: 'class',
    interfaces: [Runnable]
  };
  function _get_taskContext_(_this_) {
    return Unit_getInstance();
  }
  function asCoroutineDispatcher(_this_) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _this_;
      break $l$block;
    }
    var tmp0_elvis_lhs = tmp$ret$0.coroutineDispatcher;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$2;
      $l$block_1: {
        var tmp0_also_0 = new WindowDispatcher(_this_);
        {
        }
        {
          var tmp$ret$1;
          $l$block_0: {
            tmp$ret$1 = _this_;
            break $l$block_0;
          }
          tmp$ret$1.coroutineDispatcher = tmp0_also_0;
        }
        tmp$ret$2 = tmp0_also_0;
        break $l$block_1;
      }
      tmp = tmp$ret$2;
    } else {
      tmp = tmp0_elvis_lhs instanceof CoroutineDispatcher ? tmp0_elvis_lhs : THROW_CCE();
    }
    return tmp;
  }
  function AbortFlowException(owner) {
    CancellationException_init_$Init$('Flow was aborted, no more elements needed', this);
    this._owner = owner;
    captureStack(this, AbortFlowException);
  }
  AbortFlowException.$metadata$ = {
    simpleName: 'AbortFlowException',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__32() {
  }
  _no_name_provided__32.prototype.invoke_c68gd4_k$ = function (count, _anonymous_parameter_1_) {
    return count + 1 | 0;
  };
  _no_name_provided__32.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? typeof p1 === 'number' : false) ? p1 : THROW_CCE();
    return this.invoke_c68gd4_k$(tmp, (!(p2 == null) ? isInterface(p2, Element_0) : false) ? p2 : THROW_CCE());
  };
  _no_name_provided__32.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function SafeCollector(collector, collectContext) {
    this._collector_0 = collector;
    this._collectContext = collectContext;
    var tmp = this;
    tmp._collectContextSize = this._collectContext.fold_cq605b_k$(0, _no_name_provided_$factory_29());
    this._lastEmissionContext = null;
  }
  SafeCollector.prototype.emit_iav7o_k$ = function (value, $cont) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = $cont._get_context__0_k$();
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    var currentContext = tmp$ret$1;
    ensureActive(currentContext);
    if (!(this._lastEmissionContext === currentContext)) {
      checkContext(this, currentContext);
      this._lastEmissionContext = currentContext;
    }return this._collector_0.emit_iav7o_k$(value, $cont);
  };
  SafeCollector.prototype.releaseIntercepted_sv8swh_k$ = function () {
  };
  SafeCollector.$metadata$ = {
    simpleName: 'SafeCollector',
    kind: 'class',
    interfaces: [FlowCollector]
  };
  function _no_name_provided_$factory_29() {
    var i = new _no_name_provided__32();
    return function (p1, p2) {
      return i.invoke_c68gd4_k$(p1, p2);
    };
  }
  function identitySet(expectedSize) {
    return HashSet_init_$Create$(expectedSize);
  }
  function LinkedListHead() {
    LinkedListNode.call(this);
  }
  LinkedListHead.$metadata$ = {
    simpleName: 'LinkedListHead',
    kind: 'class',
    interfaces: []
  };
  function LinkedListNode() {
    this.__next = this;
    this.__prev = this;
    this.__removed = false;
  }
  LinkedListNode.prototype._get__next__0_k$ = function () {
    return this.__next;
  };
  LinkedListNode.prototype.addLast_qdrmxw_k$ = function (node) {
    var prev = this.__prev;
    node.__next = this;
    node.__prev = prev;
    prev.__next = node;
    this.__prev = node;
  };
  LinkedListNode.prototype.remove_0_k$ = function () {
    if (this.__removed)
      return false;
    var prev = this.__prev;
    var next = this.__next;
    prev.__next = next;
    next.__prev = prev;
    this.__removed = true;
    return true;
  };
  LinkedListNode.prototype.addOneIfEmpty_fpxpjn_k$ = function (node) {
    if (!(this.__next === this))
      return false;
    this.addLast_qdrmxw_k$(node);
    return true;
  };
  LinkedListNode.$metadata$ = {
    simpleName: 'LinkedListNode',
    kind: 'class',
    interfaces: []
  };
  function unwrap(exception) {
    return exception;
  }
  function CoroutineStackFrame() {
  }
  CoroutineStackFrame.$metadata$ = {
    simpleName: 'CoroutineStackFrame',
    kind: 'interface',
    interfaces: []
  };
  function recoverStackTrace(exception, continuation) {
    return exception;
  }
  function threadContextElements(context) {
    return 0;
  }
  function CommonThreadLocal() {
    this._value_3 = null;
  }
  CommonThreadLocal.prototype.get_0_k$ = function () {
    var tmp = this._value_3;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  CommonThreadLocal.prototype.set_iav7o_k$ = function (value) {
    this._value_3 = value;
  };
  CommonThreadLocal.$metadata$ = {
    simpleName: 'CommonThreadLocal',
    kind: 'class',
    interfaces: []
  };
  var PACKET_MAX_COPY_SIZE;
  function Attributes() {
  }
  Attributes.$metadata$ = {
    simpleName: 'Attributes',
    kind: 'interface',
    interfaces: []
  };
  function Attributes_0(concurrent) {
    return Attributes_1(concurrent === void 1 ? false : concurrent);
  }
  function Attributes_1(concurrent) {
    return new AttributesJs();
  }
  function AttributesJs() {
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = LinkedHashMap_init_$Create$();
      break $l$block;
    }
    tmp._map_1 = tmp$ret$0;
  }
  AttributesJs.$metadata$ = {
    simpleName: 'AttributesJs',
    kind: 'class',
    interfaces: [Attributes]
  };
  var KTOR_DEFAULT_USER_AGENT;
  function launch(block) {
    startCoroutine(block, new _no_name_provided__33());
  }
  function _no_name_provided__33() {
  }
  _no_name_provided__33.prototype._get_context__0_k$ = function () {
    return SupervisorJob$default(null, 1, null);
  };
  _no_name_provided__33.prototype.resumeWith_6zvzl9_k$ = function (result) {
  };
  _no_name_provided__33.prototype.resumeWith_bnunh2_k$ = function (result) {
    return this.resumeWith_6zvzl9_k$(result);
  };
  _no_name_provided__33.$metadata$ = {
    kind: 'class',
    interfaces: [Continuation]
  };
  function _no_name_provided__34($tmp0_asPromise_0_1, $resolve, $reject, resultContinuation) {
    this._$tmp0_asPromise_0_1 = $tmp0_asPromise_0_1;
    this._$resolve = $resolve;
    this._$reject = $reject;
    CoroutineImpl_0.call(this, resultContinuation);
  }
  _no_name_provided__34.prototype.invoke_sv8swh_k$ = function ($cont) {
    var tmp = this.create_s8oglw_k$($cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_0_k$();
  };
  _no_name_provided__34.prototype.doResume_0_k$ = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        switch (tmp) {
          case 0:
            this._exceptionState = 3;
            this._exceptionState = 2;
            var tmp_0 = this;
            tmp_0._tmp0_success_0_1_5_61 = Companion_getInstance_2();
            this._state_0 = 1;
            suspendResult = first(this._$tmp0_asPromise_0_1, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 1:
            var tmp1_success_0_2_6_7 = suspendResult;
            this._TRY_RESULT0 = _Result___init__impl_(tmp1_success_0_2_6_7);
            this._exceptionState = 3;
            this._state_0 = 4;
            continue $sm;
          case 2:
            this._exceptionState = 3;
            var tmp_1 = this._exception_0;
            if (tmp_1 instanceof Error) {
              var tmp_2 = this._exception_0;
              var e_3_7_8 = tmp_2 instanceof Error ? tmp_2 : THROW_CCE();
              var tmp_3 = this;
              var tmp2_failure_0_4_8_9 = Companion_getInstance_2();
              tmp_3._TRY_RESULT0 = _Result___init__impl_(createFailure(e_3_7_8));
              this._state_0 = 4;
              continue $sm;
            } else {
              {
                throw this._exception_0;
              }
            }

            break;
          case 3:
            throw this._exception_0;
          case 4:
            this._exceptionState = 3;
            var tmp0_onSuccess_0_4_5 = this._TRY_RESULT0;
            if (_Result___get_isSuccess__impl_(tmp0_onSuccess_0_4_5)) {
              var tmp_4 = _Result___get_value__impl_(tmp0_onSuccess_0_4_5);
              var tmp1__anonymous__1_9_10 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
              this._$resolve(tmp1__anonymous__1_9_10);
            }
            var tmp2_onFailure_0_3_4 = tmp0_onSuccess_0_4_5;
            var tmp0_safe_receiver_1_10_11 = Result__exceptionOrNull_impl(tmp2_onFailure_0_3_4);
            if (tmp0_safe_receiver_1_10_11 == null)
              null;
            else {
              this._$reject(tmp0_safe_receiver_1_10_11);
              Unit_getInstance();
            }

            Unit_getInstance();
            Unit_getInstance();
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this._exceptionState === 3) {
          throw $p;
        } else {
          this._state_0 = this._exceptionState;
          this._exception_0 = $p;
        }
      }
     while (true);
  };
  _no_name_provided__34.prototype.create_s8oglw_k$ = function (completion) {
    var i = new _no_name_provided__34(this._$tmp0_asPromise_0_1, this._$resolve, this._$reject, completion);
    return i;
  };
  _no_name_provided__34.$metadata$ = {
    kind: 'class',
    interfaces: [],
    suspendArity: 0
  };
  function _no_name_provided__35(resultContinuation) {
    CoroutineImpl_0.call(this, resultContinuation);
  }
  _no_name_provided__35.prototype.invoke_evkwwh_k$ = function ($this$flowPromise, $cont) {
    var tmp = this.create_api504_k$($this$flowPromise, $cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_0_k$();
  };
  _no_name_provided__35.prototype.invoke_20e8_k$ = function (p1, $cont) {
    this.invoke_evkwwh_k$((!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE(), $cont);
    return Unit_getInstance();
  };
  _no_name_provided__35.prototype.doResume_0_k$ = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        switch (tmp) {
          case 0:
            this._exceptionState = 3;
            this._state_0 = 1;
            suspendResult = delay(new Long(1000, 0), this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 1:
            this._state_0 = 2;
            suspendResult = this._$this$flowPromise.emit_iav7o_k$('Hello world', this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 2:
            return Unit_getInstance();
          case 3:
            throw this._exception_0;
        }
      } catch ($p) {
        if (this._exceptionState === 3) {
          throw $p;
        } else {
          this._state_0 = this._exceptionState;
          this._exception_0 = $p;
        }
      }
     while (true);
  };
  _no_name_provided__35.prototype.create_api504_k$ = function ($this$flowPromise, completion) {
    var i = new _no_name_provided__35(completion);
    i._$this$flowPromise = $this$flowPromise;
    return i;
  };
  _no_name_provided__35.$metadata$ = {
    kind: 'class',
    interfaces: [],
    suspendArity: 1
  };
  function _no_name_provided__36($tmp0_asPromise_0_1) {
    this._$tmp0_asPromise_0_1_0 = $tmp0_asPromise_0_1;
  }
  _no_name_provided__36.prototype.invoke_ljtus8_k$ = function (resolve, reject) {
    launch(_no_name_provided_$factory_32(this._$tmp0_asPromise_0_1_0, resolve, reject, null));
  };
  _no_name_provided__36.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? typeof p1 === 'function' : false) ? p1 : THROW_CCE();
    this.invoke_ljtus8_k$(tmp, (!(p2 == null) ? typeof p2 === 'function' : false) ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__36.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function Example() {
    Example_instance = this;
  }
  Example.prototype.anAsyncFunction = function () {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_flowPromise_0 = _no_name_provided_$factory_30(null);
      var tmp$ret$0;
      $l$block: {
        var tmp0_asPromise_0_1 = flow(tmp0_flowPromise_0);
        tmp$ret$0 = new Promise(_no_name_provided_$factory_31(tmp0_asPromise_0_1));
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  Example.$metadata$ = {
    simpleName: 'Example',
    kind: 'object',
    interfaces: []
  };
  var Example_instance;
  function Example_getInstance() {
    if (Example_instance == null)
      new Example();
    return Example_instance;
  }
  function _no_name_provided_$factory_30(resultContinuation) {
    var i = new _no_name_provided__35(resultContinuation);
    var l = function (p1, $cont) {
      return i.invoke_evkwwh_k$(p1, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function _no_name_provided_$factory_31($tmp0_asPromise_0_1) {
    var i = new _no_name_provided__36($tmp0_asPromise_0_1);
    return function (p1, p2) {
      i.invoke_ljtus8_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_32($tmp0_asPromise_0_1, $resolve, $reject, resultContinuation) {
    var i = new _no_name_provided__34($tmp0_asPromise_0_1, $resolve, $reject, resultContinuation);
    var l = function ($cont) {
      return i.invoke_sv8swh_k$($cont);
    };
    l.$arity = 0;
    return l;
  }
  function greeting(name) {
    return '' + 'Hello, ' + name;
  }
  function main() {
    println(greeting('kotlinjs-node-package-template'));
  }
  AbstractMap.prototype._get_entries__0_k$ = Map_0.prototype._get_entries__0_k$;
  AbstractCoroutineContextElement.prototype.get_9uvjra_k$ = Element_0.prototype.get_9uvjra_k$;
  AbstractCoroutineContextElement.prototype.fold_cq605b_k$ = Element_0.prototype.fold_cq605b_k$;
  AbstractMutableList.prototype.get_ha5a7z_k$ = List.prototype.get_ha5a7z_k$;
  AbstractMutableMap.prototype._get_entries__0_k$ = MutableMap.prototype._get_entries__0_k$;
  InternalHashCodeMap.prototype.createJsMap_0_k$ = InternalMap.prototype.createJsMap_0_k$;
  KClassImpl.prototype._get_simpleName__0_k$ = KClass.prototype._get_simpleName__0_k$;
  JobSupport.prototype.invokeOnCompletion$default_n4h7x8_k$ = Job.prototype.invokeOnCompletion$default_n4h7x8_k$;
  JobSupport.prototype.get_9uvjra_k$ = Element_0.prototype.get_9uvjra_k$;
  JobSupport.prototype.fold_cq605b_k$ = Element_0.prototype.fold_cq605b_k$;
  SchedulerTask.prototype.run_sv8swh_k$ = Runnable.prototype.run_sv8swh_k$;
  CoroutineDispatcher.prototype.get_9uvjra_k$ = ContinuationInterceptor.prototype.get_9uvjra_k$;
  CoroutineDispatcher.prototype.fold_cq605b_k$ = Element_0.prototype.fold_cq605b_k$;
  EventLoop.prototype.get_9uvjra_k$ = ContinuationInterceptor.prototype.get_9uvjra_k$;
  EventLoop.prototype.fold_cq605b_k$ = Element_0.prototype.fold_cq605b_k$;
  JobImpl.prototype.invokeOnCompletion$default_n4h7x8_k$ = Job.prototype.invokeOnCompletion$default_n4h7x8_k$;
  JobImpl.prototype.get_9uvjra_k$ = Element_0.prototype.get_9uvjra_k$;
  JobImpl.prototype.fold_cq605b_k$ = Element_0.prototype.fold_cq605b_k$;
  MainCoroutineDispatcher.prototype.get_9uvjra_k$ = ContinuationInterceptor.prototype.get_9uvjra_k$;
  MainCoroutineDispatcher.prototype.fold_cq605b_k$ = Element_0.prototype.fold_cq605b_k$;
  SupervisorJobImpl.prototype.invokeOnCompletion$default_n4h7x8_k$ = Job.prototype.invokeOnCompletion$default_n4h7x8_k$;
  SupervisorJobImpl.prototype.get_9uvjra_k$ = Element_0.prototype.get_9uvjra_k$;
  SupervisorJobImpl.prototype.fold_cq605b_k$ = Element_0.prototype.fold_cq605b_k$;
  Unconfined.prototype.get_9uvjra_k$ = ContinuationInterceptor.prototype.get_9uvjra_k$;
  Unconfined.prototype.fold_cq605b_k$ = Element_0.prototype.fold_cq605b_k$;
  JsMainDispatcher.prototype.get_9uvjra_k$ = ContinuationInterceptor.prototype.get_9uvjra_k$;
  JsMainDispatcher.prototype.fold_cq605b_k$ = Element_0.prototype.fold_cq605b_k$;
  UnconfinedEventLoop.prototype.get_9uvjra_k$ = ContinuationInterceptor.prototype.get_9uvjra_k$;
  UnconfinedEventLoop.prototype.fold_cq605b_k$ = Element_0.prototype.fold_cq605b_k$;
  SetTimeoutBasedDispatcher.prototype.get_9uvjra_k$ = ContinuationInterceptor.prototype.get_9uvjra_k$;
  SetTimeoutBasedDispatcher.prototype.fold_cq605b_k$ = Element_0.prototype.fold_cq605b_k$;
  NodeDispatcher.prototype.get_9uvjra_k$ = ContinuationInterceptor.prototype.get_9uvjra_k$;
  NodeDispatcher.prototype.fold_cq605b_k$ = Element_0.prototype.fold_cq605b_k$;
  SetTimeoutDispatcher.prototype.get_9uvjra_k$ = ContinuationInterceptor.prototype.get_9uvjra_k$;
  SetTimeoutDispatcher.prototype.fold_cq605b_k$ = Element_0.prototype.fold_cq605b_k$;
  WindowDispatcher.prototype.get_9uvjra_k$ = ContinuationInterceptor.prototype.get_9uvjra_k$;
  WindowDispatcher.prototype.fold_cq605b_k$ = Element_0.prototype.fold_cq605b_k$;
  counter = 0;
  DEBUG = false;
  PACKET_MAX_COPY_SIZE = 200;
  KTOR_DEFAULT_USER_AGENT = 'Ktor client';
  var $kotlinx = _.kotlinx || (_.kotlinx = {});
  var $kotlinx$atomicfu = $kotlinx.atomicfu || ($kotlinx.atomicfu = {});
  $kotlinx$atomicfu.atomic$ref$ = atomic_2;
  $kotlinx$atomicfu.atomic$boolean$ = atomic_4;
  $kotlinx$atomicfu.atomic$int$ = atomic_6;
  $kotlinx$atomicfu.atomic$long$ = atomic_8;
  var $io = _.io || (_.io = {});
  var $io$ktor = $io.ktor || ($io.ktor = {});
  var $io$ktor$util = $io$ktor.util || ($io$ktor.util = {});
  $io$ktor$util.AttributesJsFn = Attributes_0;
  Object.defineProperty(_, 'Example', {
    configurable: true,
    get: Example_getInstance
  });
  _.greeting = greeting;
  main();
  return _;
}));

//# sourceMappingURL=kotlinjs-node-package-template.js.map