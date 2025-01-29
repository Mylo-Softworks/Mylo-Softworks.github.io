(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'Klex'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'Klex'.");
    }
    globalThis.Klex = factory(typeof Klex === 'undefined' ? {} : Klex, globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.u1;
  var initMetadataForCompanion = kotlin_kotlin.$_$.o1;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.l;
  var Companion_instance = kotlin_kotlin.$_$.p;
  var createFailure = kotlin_kotlin.$_$.g2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.k;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.o;
  var THROW_CCE = kotlin_kotlin.$_$.e2;
  var charSequenceLength = kotlin_kotlin.$_$.h1;
  var toString = kotlin_kotlin.$_$.v1;
  var isArray = kotlin_kotlin.$_$.q1;
  var Collection = kotlin_kotlin.$_$.r;
  var isInterface = kotlin_kotlin.$_$.r1;
  var initMetadataForClass = kotlin_kotlin.$_$.n1;
  var initMetadataForObject = kotlin_kotlin.$_$.p1;
  var VOID = kotlin_kotlin.$_$.a;
  var hashCode = kotlin_kotlin.$_$.m1;
  var equals = kotlin_kotlin.$_$.i1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.l2;
  var Unit_instance = kotlin_kotlin.$_$.q;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.c;
  var ensureNotNull = kotlin_kotlin.$_$.h2;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.m;
  var throwOnFailure = kotlin_kotlin.$_$.k2;
  var lastOrNull = kotlin_kotlin.$_$.a1;
  var to = kotlin_kotlin.$_$.n2;
  var listOf = kotlin_kotlin.$_$.b1;
  var emptyList = kotlin_kotlin.$_$.x;
  var drop = kotlin_kotlin.$_$.w;
  var addAll = kotlin_kotlin.$_$.s;
  var startsWith = kotlin_kotlin.$_$.z1;
  var charSequenceGet = kotlin_kotlin.$_$.g1;
  var toString_0 = kotlin_kotlin.$_$.j;
  var joinToString = kotlin_kotlin.$_$.z;
  var captureStack = kotlin_kotlin.$_$.f1;
  var RuntimeException = kotlin_kotlin.$_$.d2;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.g;
  var toString_1 = kotlin_kotlin.$_$.m2;
  var getOrNull = kotlin_kotlin.$_$.y;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.e;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.i;
  var CharRange = kotlin_kotlin.$_$.w1;
  var endsWith = kotlin_kotlin.$_$.y1;
  var copyToArray = kotlin_kotlin.$_$.v;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.d;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(Klex, 'Klex');
  initMetadataForClass(Repeat, 'Repeat');
  initMetadataForObject(OneOrMore, 'OneOrMore', VOID, Repeat);
  initMetadataForObject(AnyCount, 'AnyCount', VOID, Repeat);
  initMetadataForObject(Optional, 'Optional', VOID, Repeat);
  initMetadataForClass(RepeatResult, 'RepeatResult');
  initMetadataForClass(KlexPlaceholderVal, 'KlexPlaceholderVal');
  initMetadataForClass(KlexPlaceholder, 'KlexPlaceholder', KlexPlaceholder);
  initMetadataForClass(AbstractKlexContext, 'AbstractKlexContext');
  initMetadataForClass(KlexContextList, 'KlexContextList', VOID, AbstractKlexContext);
  initMetadataForClass(KlexContextString, 'KlexContextString', VOID, AbstractKlexContext);
  initMetadataForClass(ParseError, 'ParseError', ParseError, RuntimeException);
  initMetadataForClass(ManualFailError, 'ManualFailError', ManualFailError, ParseError);
  initMetadataForClass(NoMatchError, 'NoMatchError', NoMatchError, ParseError);
  initMetadataForClass(NoTokensLeftError, 'NoTokensLeftError', NoTokensLeftError, ParseError);
  initMetadataForClass(NotDoneParsingError, 'NotDoneParsingError', NotDoneParsingError, ParseError);
  initMetadataForClass(NotEnoughMatchesError, 'NotEnoughMatchesError', NotEnoughMatchesError, ParseError);
  initMetadataForClass(AbstractKlexTree, 'AbstractKlexTree');
  initMetadataForClass(KlexStringTree, 'KlexStringTree', VOID, AbstractKlexTree);
  initMetadataForClass(KlexTree, 'KlexTree', VOID, AbstractKlexTree);
  initMetadataForObject(RangeParser, 'RangeParser');
  //endregion
  function Klex$Companion$create$lambda(remainder, innerBlock) {
    return new KlexContextString(remainder, innerBlock, 0);
  }
  function Klex$Companion$create$lambda_0(remainder, innerBlock) {
    return new KlexContextList(remainder, innerBlock);
  }
  function Companion() {
  }
  protoOf(Companion).t7 = function (block) {
    return new Klex(block, Klex$Companion$create$lambda);
  };
  protoOf(Companion).createSource = function (block) {
    return new Klex(block, Klex$Companion$create$lambda_0);
  };
  var Companion_instance_0;
  function Companion_getInstance() {
    return Companion_instance_0;
  }
  function Klex(block, createContext) {
    this.u7_1 = block;
    this.v7_1 = createContext;
  }
  protoOf(Klex).w7 = function (source) {
    // Inline function 'kotlin.getOrElse' call
    var this_0 = this.v7_1(source, this.u7_1).d8();
    var exception = Result__exceptionOrNull_impl_p6xea9(this_0);
    var tmp;
    if (exception == null) {
      var tmp_0 = _Result___get_value__impl__bjfvqg(this_0);
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      // Inline function 'kotlin.Companion.failure' call
      return _Result___init__impl__xyqfz8(createFailure(exception));
    }
    var _destruct__k2r9zo = tmp;
    var tree = _destruct__k2r9zo.r7();
    var end = _destruct__k2r9zo.s7();
    var tmp_1;
    if (!(end == null) ? typeof end === 'string' : false) {
      // Inline function 'kotlin.text.isNotEmpty' call
      tmp_1 = charSequenceLength(end) > 0;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      // Inline function 'kotlin.Companion.failure' call
      var exception_0 = new NotDoneParsingError('Not done parsing, remaining: ' + toString(end));
      return _Result___init__impl__xyqfz8(createFailure(exception_0));
    }
    var tmp_2;
    if (!(end == null) ? isArray(end) : false) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      tmp_2 = !(end.length === 0);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      // Inline function 'kotlin.Companion.failure' call
      var exception_1 = new NotDoneParsingError('Not done parsing, remaining: ' + toString(end));
      return _Result___init__impl__xyqfz8(createFailure(exception_1));
    }
    var tmp_3;
    if (!(end == null) ? isInterface(end, Collection) : false) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp_3 = !end.j();
    } else {
      tmp_3 = false;
    }
    if (tmp_3) {
      // Inline function 'kotlin.Companion.failure' call
      var exception_2 = new NotDoneParsingError('Not done parsing, remaining: ' + toString(end));
      return _Result___init__impl__xyqfz8(createFailure(exception_2));
    }
    // Inline function 'kotlin.Companion.success' call
    return _Result___init__impl__xyqfz8(tree);
  };
  function OneOrMore() {
    OneOrMore_instance = this;
    Repeat.call(this, 1, null);
  }
  var OneOrMore_instance;
  function OneOrMore_getInstance() {
    if (OneOrMore_instance == null)
      new OneOrMore();
    return OneOrMore_instance;
  }
  function AnyCount() {
    AnyCount_instance = this;
    Repeat.call(this, 0, null);
  }
  var AnyCount_instance;
  function AnyCount_getInstance() {
    if (AnyCount_instance == null)
      new AnyCount();
    return AnyCount_instance;
  }
  function Optional() {
    Optional_instance = this;
    Repeat.call(this, 0, 1);
  }
  var Optional_instance;
  function Optional_getInstance() {
    if (Optional_instance == null)
      new Optional();
    return Optional_instance;
  }
  function Repeat(min, max) {
    max = max === VOID ? min : max;
    this.e8_1 = min;
    this.f8_1 = max;
  }
  function _get_self__ddlmyn($this) {
    return $this instanceof AbstractKlexContext ? $this : THROW_CCE();
  }
  function RepeatResult(count, subTrees) {
    this.g8_1 = count;
    this.h8_1 = subTrees;
  }
  protoOf(RepeatResult).toString = function () {
    return 'RepeatResult(count=' + this.g8_1 + ', subTrees=' + toString(this.h8_1) + ')';
  };
  protoOf(RepeatResult).hashCode = function () {
    var result = this.g8_1;
    result = imul(result, 31) + hashCode(this.h8_1) | 0;
    return result;
  };
  protoOf(RepeatResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RepeatResult))
      return false;
    var tmp0_other_with_cast = other instanceof RepeatResult ? other : THROW_CCE();
    if (!(this.g8_1 === tmp0_other_with_cast.g8_1))
      return false;
    if (!equals(this.h8_1, tmp0_other_with_cast.h8_1))
      return false;
    return true;
  };
  function KlexPlaceholderVal(propagateError, value) {
    this.i8_1 = propagateError;
    this.j8_1 = value;
  }
  function KlexPlaceholder() {
  }
  protoOf(KlexPlaceholder).l8 = function (t, property) {
    return this.e1();
  };
  protoOf(KlexPlaceholder).m8 = function (t, property, klexPlaceholderVal) {
    this.k8_1 = klexPlaceholderVal;
  };
  protoOf(KlexPlaceholder).e1 = function () {
    var tmp = this.k8_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('value');
    }
  };
  function AbstractKlexContext$invoke$lambda($this_invoke, $given) {
    return function ($this$create) {
      $this_invoke.j8_1($this$create, $given);
      return Unit_instance;
    };
  }
  function AbstractKlexContext(remainder, block, create) {
    this.x7_1 = remainder;
    this.y7_1 = block;
    this.z7_1 = create;
    this.a8_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.b8_1 = ArrayList_init_$Create$();
    this.c8_1 = null;
  }
  protoOf(AbstractKlexContext).n8 = function (value) {
    if (this.a8_1 == null || value == null)
      this.a8_1 = value;
  };
  protoOf(AbstractKlexContext).o8 = function (source) {
  };
  protoOf(AbstractKlexContext).p8 = function (propagateError, block) {
    if (!(this.a8_1 == null)) {
      // Inline function 'kotlin.Companion.failure' call
      var exception = ensureNotNull(this.a8_1);
      return _Result___init__impl__xyqfz8(createFailure(exception));
    }
    // Inline function 'kotlin.getOrElse' call
    var this_0 = this.z7_1(_get_self__ddlmyn(this), this.x7_1, block).d8();
    var exception_0 = Result__exceptionOrNull_impl_p6xea9(this_0);
    var tmp;
    if (exception_0 == null) {
      var tmp_0 = _Result___get_value__impl__bjfvqg(this_0);
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      if (propagateError) {
        this.n8(exception_0);
      }
      // Inline function 'kotlin.Companion.failure' call
      return _Result___init__impl__xyqfz8(createFailure(exception_0));
    }
    var _destruct__k2r9zo = tmp;
    var tree = _destruct__k2r9zo.r7();
    var end = _destruct__k2r9zo.s7();
    this.x7_1 = end;
    this.b8_1.o(tree);
    this.o8(tree);
    // Inline function 'kotlin.Companion.success' call
    return _Result___init__impl__xyqfz8(tree);
  };
  protoOf(AbstractKlexContext).q8 = function (propagateError, block, $super) {
    propagateError = propagateError === VOID ? true : propagateError;
    return $super === VOID ? this.p8(propagateError, block) : $super.p8.call(this, propagateError, block).o7_1;
  };
  protoOf(AbstractKlexContext).r8 = function (message) {
    this.n8(new ManualFailError(message));
  };
  protoOf(AbstractKlexContext).s8 = function (message, $super) {
    message = message === VOID ? null : message;
    var tmp;
    if ($super === VOID) {
      this.r8(message);
      tmp = Unit_instance;
    } else {
      tmp = $super.r8.call(this, message);
    }
    return tmp;
  };
  protoOf(AbstractKlexContext).t8 = function (blocks) {
    if (!(this.a8_1 == null)) {
      // Inline function 'kotlin.Companion.failure' call
      var exception = ensureNotNull(this.a8_1);
      return _Result___init__impl__xyqfz8(createFailure(exception));
    }
    var inductionVariable = 0;
    var last = blocks.length;
    $l$loop: while (inductionVariable < last) {
      var block = blocks[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var result = this.z7_1(_get_self__ddlmyn(this), this.x7_1, block).d8();
      if (_Result___get_isFailure__impl__jpiriv(result))
        continue $l$loop;
      // Inline function 'kotlin.getOrThrow' call
      throwOnFailure(result);
      var tmp = _Result___get_value__impl__bjfvqg(result);
      var _destruct__k2r9zo = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
      var tree = _destruct__k2r9zo.r7();
      var end = _destruct__k2r9zo.s7();
      this.x7_1 = end;
      this.b8_1.o(tree);
      this.o8(tree);
      // Inline function 'kotlin.Companion.success' call
      return _Result___init__impl__xyqfz8(tree);
    }
    this.n8(new NoMatchError('Could not find a match.'));
    // Inline function 'kotlin.Companion.failure' call
    var exception_0 = ensureNotNull(this.a8_1);
    return _Result___init__impl__xyqfz8(createFailure(exception_0));
  };
  protoOf(AbstractKlexContext).u8 = function (given, groups) {
    if (!(this.a8_1 == null)) {
      // Inline function 'kotlin.Companion.failure' call
      var exception = ensureNotNull(this.a8_1);
      return _Result___init__impl__xyqfz8(createFailure(exception));
    }
    var inductionVariable = 0;
    var last = groups.length;
    $l$loop: while (inductionVariable < last) {
      var group = groups[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var result = this.v8(group, given, false);
      if (_Result___get_isFailure__impl__jpiriv(result))
        continue $l$loop;
      // Inline function 'kotlin.getOrThrow' call
      throwOnFailure(result);
      var tmp = _Result___get_value__impl__bjfvqg(result);
      var tree = ((tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE()).r7();
      // Inline function 'kotlin.Companion.success' call
      return _Result___init__impl__xyqfz8(tree);
    }
    this.n8(new NoMatchError('Could not find a match.'));
    // Inline function 'kotlin.Companion.failure' call
    var exception_0 = ensureNotNull(this.a8_1);
    return _Result___init__impl__xyqfz8(createFailure(exception_0));
  };
  protoOf(AbstractKlexContext).w8 = function (groups) {
    return this.u8(Unit_instance, groups.slice());
  };
  protoOf(AbstractKlexContext).x8 = function (times, block) {
    if (!(this.a8_1 == null)) {
      // Inline function 'kotlin.Companion.failure' call
      var exception = ensureNotNull(this.a8_1);
      return _Result___init__impl__xyqfz8(createFailure(exception));
    }
    var hits = 0;
    // Inline function 'kotlin.collections.mutableListOf' call
    var subTrees = ArrayList_init_$Create$();
    var remaining = this.x7_1;
    $l$loop: while (times.f8_1 == null || hits < times.f8_1) {
      var result = this.z7_1(_get_self__ddlmyn(this), remaining, block).d8();
      if (_Result___get_isFailure__impl__jpiriv(result))
        break $l$loop;
      // Inline function 'kotlin.getOrThrow' call
      throwOnFailure(result);
      var tmp = _Result___get_value__impl__bjfvqg(result);
      var _destruct__k2r9zo = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
      var tree = _destruct__k2r9zo.r7();
      var end = _destruct__k2r9zo.s7();
      remaining = end;
      subTrees.o(tree);
      hits = hits + 1 | 0;
    }
    if (hits < times.e8_1) {
      this.n8(new NotEnoughMatchesError('Not enough matches found, need ' + times.e8_1 + ' but got ' + hits));
      // Inline function 'kotlin.Companion.failure' call
      var exception_0 = ensureNotNull(this.a8_1);
      return _Result___init__impl__xyqfz8(createFailure(exception_0));
    }
    this.x7_1 = remaining;
    this.b8_1.a2(subTrees);
    var tmp0_safe_receiver = lastOrNull(subTrees);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'com.mylosoftworks.klex.context.AbstractKlexContext.repeat.<anonymous>' call
      this.o8(tmp0_safe_receiver);
    }
    // Inline function 'kotlin.Companion.success' call
    var value = new RepeatResult(hits, subTrees);
    return _Result___init__impl__xyqfz8(value);
  };
  protoOf(AbstractKlexContext).y8 = function () {
    return new KlexPlaceholder();
  };
  protoOf(AbstractKlexContext).z8 = function (propagateError, block) {
    return new KlexPlaceholderVal(propagateError, block);
  };
  protoOf(AbstractKlexContext).a9 = function (propagateError, block, $super) {
    propagateError = propagateError === VOID ? true : propagateError;
    return $super === VOID ? this.z8(propagateError, block) : $super.z8.call(this, propagateError, block);
  };
  protoOf(AbstractKlexContext).b9 = function (_this__u8e3s4, overridePropagateError) {
    return this.v8(_this__u8e3s4, Unit_instance, overridePropagateError);
  };
  protoOf(AbstractKlexContext).c9 = function (_this__u8e3s4, overridePropagateError, $super) {
    overridePropagateError = overridePropagateError === VOID ? null : overridePropagateError;
    return $super === VOID ? this.b9(_this__u8e3s4, overridePropagateError) : $super.b9.call(this, _this__u8e3s4, overridePropagateError).o7_1;
  };
  protoOf(AbstractKlexContext).v8 = function (_this__u8e3s4, given, overridePropagateError) {
    if (!(this.a8_1 == null)) {
      // Inline function 'kotlin.Companion.failure' call
      var exception = ensureNotNull(this.a8_1);
      return _Result___init__impl__xyqfz8(createFailure(exception));
    }
    var usedPGError = overridePropagateError == null ? _this__u8e3s4.i8_1 : overridePropagateError;
    var tmp = _get_self__ddlmyn(this);
    var tmp_0 = this.x7_1;
    // Inline function 'kotlin.getOrElse' call
    var this_0 = this.z7_1(tmp, tmp_0, AbstractKlexContext$invoke$lambda(_this__u8e3s4, given)).d8();
    var exception_0 = Result__exceptionOrNull_impl_p6xea9(this_0);
    var tmp_1;
    if (exception_0 == null) {
      var tmp_2 = _Result___get_value__impl__bjfvqg(this_0);
      tmp_1 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    } else {
      if (usedPGError) {
        this.n8(exception_0);
      }
      // Inline function 'kotlin.Companion.failure' call
      return _Result___init__impl__xyqfz8(createFailure(exception_0));
    }
    var _destruct__k2r9zo = tmp_1;
    var tree = _destruct__k2r9zo.r7();
    var end = _destruct__k2r9zo.s7();
    this.x7_1 = end;
    this.b8_1.o(tree);
    this.o8(tree);
    // Inline function 'kotlin.Companion.success' call
    var value = to(tree, this.x7_1);
    return _Result___init__impl__xyqfz8(value);
  };
  protoOf(AbstractKlexContext).d9 = function (_this__u8e3s4, block) {
    return this.x8(_this__u8e3s4, block);
  };
  function KlexContextList$_init_$lambda_qxqsb6(_this__u8e3s4, newRemainder, newBlock) {
    return new KlexContextList(newRemainder, newBlock);
  }
  function KlexContextList(remainder, block) {
    AbstractKlexContext.call(this, remainder, block, KlexContextList$_init_$lambda_qxqsb6);
  }
  protoOf(KlexContextList).k9 = function () {
    if (!(this.a8_1 == null)) {
      // Inline function 'kotlin.Companion.failure' call
      var exception = ensureNotNull(this.a8_1);
      return _Result___init__impl__xyqfz8(createFailure(exception));
    }
    if (this.x7_1.j()) {
      this.n8(new NoTokensLeftError('No tokens left to parse.'));
      // Inline function 'kotlin.Companion.failure' call
      var exception_0 = ensureNotNull(this.a8_1);
      return _Result___init__impl__xyqfz8(createFailure(exception_0));
    }
    // Inline function 'kotlin.Companion.success' call
    var value = this.x7_1.i(0);
    return _Result___init__impl__xyqfz8(value);
  };
  protoOf(KlexContextList).l9 = function (predicate) {
    if (!(this.a8_1 == null)) {
      // Inline function 'kotlin.Companion.failure' call
      var exception = ensureNotNull(this.a8_1);
      return _Result___init__impl__xyqfz8(createFailure(exception));
    }
    // Inline function 'kotlin.getOrElse' call
    var this_0 = this.k9();
    var exception_0 = Result__exceptionOrNull_impl_p6xea9(this_0);
    var tmp;
    if (exception_0 == null) {
      var tmp_0 = _Result___get_value__impl__bjfvqg(this_0);
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      // Inline function 'kotlin.Companion.failure' call
      return _Result___init__impl__xyqfz8(createFailure(exception_0));
    }
    var token = tmp;
    var match = predicate(token);
    if (!match) {
      this.n8(new NoMatchError("Token doesn't match predicate"));
      // Inline function 'kotlin.Companion.failure' call
      var exception_1 = ensureNotNull(this.a8_1);
      return _Result___init__impl__xyqfz8(createFailure(exception_1));
    }
    var tmp_1 = listOf(token);
    // Inline function 'kotlin.collections.listOf' call
    var tmp$ret$4 = emptyList();
    var treeItem = new KlexTree(tmp_1, null, tmp$ret$4);
    this.x7_1 = drop(this.x7_1, 1);
    this.b8_1.o(treeItem);
    // Inline function 'kotlin.Companion.success' call
    return _Result___init__impl__xyqfz8(token);
  };
  protoOf(KlexContextList).m9 = function () {
    this.y7_1(this);
    if (!(this.a8_1 == null)) {
      // Inline function 'kotlin.Companion.failure' call
      var exception = ensureNotNull(this.a8_1);
      return _Result___init__impl__xyqfz8(createFailure(exception));
    }
    // Inline function 'kotlin.collections.flatMap' call
    var tmp0 = this.b8_1;
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.e();
    while (_iterator__ex2g4s.f()) {
      var element = _iterator__ex2g4s.g();
      // Inline function 'com.mylosoftworks.klex.context.KlexContextList.parse.<anonymous>' call
      var list = element.n9_1;
      addAll(destination, list);
    }
    // Inline function 'kotlin.Companion.success' call
    var value = to(new KlexTree(destination, this.c8_1, this.b8_1), this.x7_1);
    return _Result___init__impl__xyqfz8(value);
  };
  protoOf(KlexContextList).d8 = function () {
    return this.m9();
  };
  function KlexContextString$_init_$lambda_57w6e7(_this__u8e3s4, newRemainder, newBlock) {
    return new KlexContextString(newRemainder, newBlock, _this__u8e3s4.x9_1);
  }
  function KlexContextString$parse$lambda(it) {
    return it.n9_1;
  }
  function KlexContextString(remainder, block, startIndex) {
    AbstractKlexContext.call(this, remainder, block, KlexContextString$_init_$lambda_57w6e7);
    this.w9_1 = startIndex;
    this.x9_1 = this.w9_1;
  }
  protoOf(KlexContextString).y9 = function (source) {
    this.x9_1 = source.da_1;
  };
  protoOf(KlexContextString).o8 = function (source) {
    return this.y9(source instanceof KlexStringTree ? source : THROW_CCE());
  };
  protoOf(KlexContextString).ea = function (literal) {
    if (!(this.a8_1 == null)) {
      // Inline function 'kotlin.Companion.failure' call
      var exception = ensureNotNull(this.a8_1);
      return _Result___init__impl__xyqfz8(createFailure(exception));
    }
    if (!startsWith(this.x7_1, literal)) {
      this.n8(new NoMatchError('String doesn\'t match literal "' + literal + '"'));
      // Inline function 'kotlin.Companion.failure' call
      var exception_0 = ensureNotNull(this.a8_1);
      return _Result___init__impl__xyqfz8(createFailure(exception_0));
    }
    var length = literal.length;
    // Inline function 'kotlin.collections.listOf' call
    var tmp$ret$2 = emptyList();
    var treeItem = new KlexStringTree(literal, null, tmp$ret$2, this.x9_1, this.x9_1 + length | 0);
    var tmp = this;
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.x7_1 = this.x7_1.substring(length);
    this.b8_1.o(treeItem);
    this.x9_1 = this.x9_1 + length | 0;
    // Inline function 'kotlin.Companion.success' call
    return _Result___init__impl__xyqfz8(treeItem);
  };
  protoOf(KlexContextString).fa = function (range, negate) {
    if (!(this.a8_1 == null)) {
      // Inline function 'kotlin.Companion.failure' call
      var exception = ensureNotNull(this.a8_1);
      return _Result___init__impl__xyqfz8(createFailure(exception));
    }
    // Inline function 'kotlin.text.isEmpty' call
    var this_0 = this.x7_1;
    if (charSequenceLength(this_0) === 0) {
      this.n8(new NoTokensLeftError('No text left to parse with this range.'));
      // Inline function 'kotlin.Companion.failure' call
      var exception_0 = ensureNotNull(this.a8_1);
      return _Result___init__impl__xyqfz8(createFailure(exception_0));
    }
    var char = charSequenceGet(this.x7_1, 0);
    if (RangeParser_getInstance().ha(char, range) === negate) {
      this.n8(new NoMatchError("Char doesn't match range [" + range + ']'));
      // Inline function 'kotlin.Companion.failure' call
      var exception_1 = ensureNotNull(this.a8_1);
      return _Result___init__impl__xyqfz8(createFailure(exception_1));
    }
    var tmp = toString_0(char);
    // Inline function 'kotlin.collections.listOf' call
    var tmp$ret$4 = emptyList();
    var treeItem = new KlexStringTree(tmp, null, tmp$ret$4, this.x9_1, this.x9_1 + 1 | 0);
    var tmp_0 = this;
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_0.x7_1 = this.x7_1.substring(1);
    this.b8_1.o(treeItem);
    this.x9_1 = this.x9_1 + 1 | 0;
    // Inline function 'kotlin.Companion.success' call
    return _Result___init__impl__xyqfz8(treeItem);
  };
  protoOf(KlexContextString).ia = function (range, negate, $super) {
    negate = negate === VOID ? false : negate;
    return $super === VOID ? this.fa(range, negate) : $super.fa.call(this, range, negate).o7_1;
  };
  protoOf(KlexContextString).ja = function (_this__u8e3s4) {
    return this.ea(_this__u8e3s4);
  };
  protoOf(KlexContextString).ka = function (_this__u8e3s4) {
    return this.ia(_this__u8e3s4);
  };
  protoOf(KlexContextString).la = function (_this__u8e3s4) {
    return to(_this__u8e3s4, true);
  };
  protoOf(KlexContextString).ma = function (_this__u8e3s4) {
    return this.fa(_this__u8e3s4.p7_1, _this__u8e3s4.q7_1);
  };
  protoOf(KlexContextString).na = function () {
    this.y7_1(this);
    if (!(this.a8_1 == null)) {
      // Inline function 'kotlin.Companion.failure' call
      var exception = ensureNotNull(this.a8_1);
      return _Result___init__impl__xyqfz8(createFailure(exception));
    }
    // Inline function 'kotlin.Companion.success' call
    var value = to(new KlexStringTree(joinToString(this.b8_1, '', VOID, VOID, VOID, VOID, KlexContextString$parse$lambda), this.c8_1, this.b8_1, this.w9_1, this.x9_1), this.x7_1);
    return _Result___init__impl__xyqfz8(value);
  };
  protoOf(KlexContextString).d8 = function () {
    return this.na();
  };
  function ManualFailError(message) {
    message = message === VOID ? null : message;
    ParseError.call(this, message);
    captureStack(this, ManualFailError);
  }
  function NoMatchError(message) {
    message = message === VOID ? null : message;
    ParseError.call(this, message);
    captureStack(this, NoMatchError);
  }
  function NoTokensLeftError(message) {
    message = message === VOID ? null : message;
    ParseError.call(this, message);
    captureStack(this, NoTokensLeftError);
  }
  function NotDoneParsingError(message) {
    message = message === VOID ? null : message;
    ParseError.call(this, message);
    captureStack(this, NotDoneParsingError);
  }
  function NotEnoughMatchesError(message) {
    message = message === VOID ? null : message;
    ParseError.call(this, message);
    captureStack(this, NotEnoughMatchesError);
  }
  function ParseError(message) {
    message = message === VOID ? null : message;
    RuntimeException_init_$Init$(message, this);
    captureStack(this, ParseError);
  }
  function AbstractKlexTree(content, value, children) {
    this.n9_1 = content;
    this.o9_1 = value;
    this.p9_1 = children;
  }
  protoOf(AbstractKlexTree).pa = function () {
    // Inline function 'kotlin.collections.flatMap' call
    var tmp0 = this.p9_1;
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.e();
    while (_iterator__ex2g4s.f()) {
      var element = _iterator__ex2g4s.g();
      // Inline function 'com.mylosoftworks.klex.parsing.AbstractKlexTree.flattenNullValues.<anonymous>' call
      var list = element.pa();
      addAll(destination, list);
    }
    var newChildren = destination;
    return this.o9_1 == null ? newChildren : listOf(this.oa(newChildren));
  };
  protoOf(AbstractKlexTree).toString = function () {
    return "KlexTree(strContent='" + toString_1(this.n9_1) + "', value=" + toString_1(this.o9_1) + ', children=' + toString(this.p9_1) + ')';
  };
  protoOf(AbstractKlexTree).qa = function () {
    var tmp0_safe_receiver = getOrNull(this.pa(), 0);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o9_1;
  };
  function KlexStringTree(content, value, children, sourceStartIndex, sourceEndIndex) {
    AbstractKlexTree.call(this, content, value, children);
    this.ca_1 = sourceStartIndex;
    this.da_1 = sourceEndIndex;
  }
  protoOf(KlexStringTree).ra = function (newChildren) {
    return new KlexStringTree(this.n9_1, this.o9_1, newChildren, this.ca_1, this.da_1);
  };
  protoOf(KlexStringTree).oa = function (newChildren) {
    return this.ra(newChildren);
  };
  protoOf(KlexStringTree).toString = function () {
    return 'KlexTree(start=' + this.ca_1 + ', end=' + this.da_1 + ", strContent='" + this.n9_1 + "', value=" + toString_1(this.o9_1) + ', children=' + toString(this.p9_1) + ')';
  };
  function KlexTree(content, value, children) {
    AbstractKlexTree.call(this, content, value, children);
  }
  protoOf(KlexTree).va = function (newChildren) {
    return new KlexTree(this.n9_1, this.o9_1, newChildren);
  };
  protoOf(KlexTree).oa = function (newChildren) {
    return this.va(newChildren);
  };
  function createRange($this, rangeDef) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var currentList = ArrayList_init_$Create$();
    var currentChars = '';
    var inductionVariable = 0;
    var last = rangeDef.length;
    $l$loop_1: while (inductionVariable < last) {
      var char = charSequenceGet(rangeDef, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      if (char === _Char___init__impl__6a9atx(45)) {
        // Inline function 'kotlin.text.isEmpty' call
        var this_0 = currentChars;
        if (charSequenceLength(this_0) === 0) {
          // Inline function 'kotlin.error' call
          var message = 'Range contains "-" but doesn\'t have start char and is not escaped.';
          throw IllegalStateException_init_$Create$(toString(message));
        }
        if (currentChars === '\\') {
          currentList.o(new CharRange(_Char___init__impl__6a9atx(45), _Char___init__impl__6a9atx(45)));
          currentChars = '';
          continue $l$loop_1;
        }
        currentChars = currentChars + toString_0(char);
        continue $l$loop_1;
      }
      if (endsWith(currentChars, '-')) {
        currentList.o(new CharRange(charSequenceGet(currentChars, 0), char));
        currentChars = '';
        continue $l$loop_1;
      }
      if (currentChars.length === 1) {
        var currentChar = charSequenceGet(currentChars, 0);
        currentList.o(new CharRange(currentChar, currentChar));
        currentChars = '';
      }
      currentChars = currentChars + toString_0(char);
    }
    // Inline function 'kotlin.text.isNotEmpty' call
    var this_1 = currentChars;
    if (charSequenceLength(this_1) > 0) {
      var char_0 = charSequenceGet(currentChars, 0);
      currentList.o(new CharRange(char_0, char_0));
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    return copyToArray(currentList);
  }
  function RangeParser() {
    RangeParser_instance = this;
    var tmp = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp.ga_1 = HashMap_init_$Create$();
  }
  protoOf(RangeParser).ha = function (char, rangeDef) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.ga_1;
    var value = this_0.g1(rangeDef);
    var tmp;
    if (value == null) {
      // Inline function 'com.mylosoftworks.klex.parsing.RangeParser.matchesRange.<anonymous>' call
      var answer = createRange(RangeParser_getInstance(), rangeDef);
      this_0.w2(rangeDef, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    var ranges = tmp;
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.collections.any' call
      var inductionVariable = 0;
      var last = ranges.length;
      while (inductionVariable < last) {
        var element = ranges[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'com.mylosoftworks.klex.parsing.RangeParser.matchesRange.<anonymous>' call
        if (element.s6(char)) {
          tmp$ret$3 = true;
          break $l$block;
        }
      }
      tmp$ret$3 = false;
    }
    return tmp$ret$3;
  };
  var RangeParser_instance;
  function RangeParser_getInstance() {
    if (RangeParser_instance == null)
      new RangeParser();
    return RangeParser_instance;
  }
  //region block: init
  Companion_instance_0 = new Companion();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = AnyCount_getInstance;
  _.$_$.b = Companion_instance_0;
  _.$_$.c = OneOrMore_getInstance;
  _.$_$.d = Optional_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=Klex.js.map
