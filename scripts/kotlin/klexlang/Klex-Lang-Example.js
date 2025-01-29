(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './Klex.js', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./Klex.js'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof Klex === 'undefined') {
      throw new Error("Error loading module 'com.mylosoftworks:Klex-Lang-Example'. Its dependency 'Klex' was not found. Please, check whether 'Klex' is loaded prior to 'com.mylosoftworks:Klex-Lang-Example'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'com.mylosoftworks:Klex-Lang-Example'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'com.mylosoftworks:Klex-Lang-Example'.");
    }
    globalThis['com.mylosoftworks:Klex-Lang-Example'] = factory(typeof globalThis['com.mylosoftworks:Klex-Lang-Example'] === 'undefined' ? {} : globalThis['com.mylosoftworks:Klex-Lang-Example'], Klex, globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_com_mylosoftworks_Klex, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var AnyCount_getInstance = kotlin_com_mylosoftworks_Klex.$_$.a;
  var Unit_instance = kotlin_kotlin.$_$.q;
  var OneOrMore_getInstance = kotlin_com_mylosoftworks_Klex.$_$.c;
  var Optional_getInstance = kotlin_com_mylosoftworks_Klex.$_$.d;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.l;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.o;
  var THROW_CCE = kotlin_kotlin.$_$.e2;
  var VOID = kotlin_kotlin.$_$.a;
  var toLongOrNull = kotlin_kotlin.$_$.b2;
  var toDoubleOrNull = kotlin_kotlin.$_$.a2;
  var KMutableProperty0 = kotlin_kotlin.$_$.x1;
  var THROW_ISE = kotlin_kotlin.$_$.f2;
  var getLocalDelegateReference = kotlin_kotlin.$_$.k1;
  var Result = kotlin_kotlin.$_$.c2;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.c;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.m;
  var Companion_instance = kotlin_com_mylosoftworks_Klex.$_$.b;
  var Companion_instance_0 = kotlin_kotlin.$_$.p;
  var createFailure = kotlin_kotlin.$_$.g2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.k;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.u;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.b;
  var ensureNotNull = kotlin_kotlin.$_$.h2;
  var protoOf = kotlin_kotlin.$_$.u1;
  var initMetadataForObject = kotlin_kotlin.$_$.p1;
  var initMetadataForClass = kotlin_kotlin.$_$.n1;
  var getStringHashCode = kotlin_kotlin.$_$.l1;
  var toString = kotlin_kotlin.$_$.m2;
  var isNumber = kotlin_kotlin.$_$.s1;
  var numberToDouble = kotlin_kotlin.$_$.t1;
  var equals = kotlin_kotlin.$_$.i1;
  var toString_0 = kotlin_kotlin.$_$.v1;
  var hashCode = kotlin_kotlin.$_$.m1;
  var getBooleanHashCode = kotlin_kotlin.$_$.j1;
  var listOf = kotlin_kotlin.$_$.c1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.d;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.f;
  var toMutableList = kotlin_kotlin.$_$.d1;
  var _Result___get_isSuccess__impl__sndoy8 = kotlin_kotlin.$_$.n;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.i2;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.h;
  var checkIndexOverflow = kotlin_kotlin.$_$.t;
  var printStackTrace = kotlin_kotlin.$_$.j2;
  var joinToString = kotlin_kotlin.$_$.z;
  var println = kotlin_kotlin.$_$.e1;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(KlexLang, 'KlexLang');
  initMetadataForClass(KlexToken, 'KlexToken');
  initMetadataForClass(ValToken, 'ValToken', VOID, KlexToken);
  initMetadataForObject(WhiteSpace, 'WhiteSpace', VOID, KlexToken);
  initMetadataForClass(Identifier, 'Identifier', VOID, ValToken);
  initMetadataForClass(Operator, 'Operator', VOID, KlexToken);
  initMetadataForObject(OperatorPlus, 'OperatorPlus', VOID, Operator);
  initMetadataForObject(OperatorMinus, 'OperatorMinus', VOID, Operator);
  initMetadataForObject(OperatorMultiply, 'OperatorMultiply', VOID, Operator);
  initMetadataForObject(OperatorDivide, 'OperatorDivide', VOID, Operator);
  initMetadataForObject(OperatorEquals, 'OperatorEquals', VOID, Operator);
  initMetadataForObject(OperatorLess, 'OperatorLess', VOID, Operator);
  initMetadataForObject(OperatorGreater, 'OperatorGreater', VOID, Operator);
  initMetadataForObject(OperatorLessEquals, 'OperatorLessEquals', VOID, Operator);
  initMetadataForObject(OperatorGreaterEquals, 'OperatorGreaterEquals', VOID, Operator);
  initMetadataForObject(OperatorOr, 'OperatorOr', VOID, Operator);
  initMetadataForObject(OperatorAnd, 'OperatorAnd', VOID, Operator);
  initMetadataForObject(Assign, 'Assign', VOID, KlexToken);
  initMetadataForClass(ValLiteralToken, 'ValLiteralToken', VOID, ValToken);
  initMetadataForClass(StringToken, 'StringToken', VOID, ValLiteralToken);
  initMetadataForClass(NumberToken, 'NumberToken', VOID, ValLiteralToken);
  initMetadataForClass(BoolToken, 'BoolToken', VOID, ValLiteralToken);
  initMetadataForObject(NullToken, 'NullToken', VOID, ValLiteralToken);
  initMetadataForObject(OpenParentheses, 'OpenParentheses', VOID, KlexToken);
  initMetadataForObject(CloseParentheses, 'CloseParentheses', VOID, KlexToken);
  initMetadataForObject(OpenCurly, 'OpenCurly', VOID, KlexToken);
  initMetadataForObject(CloseCurly, 'CloseCurly', VOID, KlexToken);
  initMetadataForObject(CommaSep, 'CommaSep', VOID, KlexToken);
  initMetadataForObject(Negate, 'Negate', VOID, KlexToken);
  initMetadataForClass(Comment, 'Comment', VOID, KlexToken);
  initMetadataForObject(Unknown, 'Unknown', VOID, KlexToken);
  initMetadataForClass(KlexLangToken, 'KlexLangToken');
  initMetadataForClass(Statement, 'Statement', VOID, KlexLangToken);
  initMetadataForClass(CodeScope, 'CodeScope', VOID, Statement);
  initMetadataForClass(Return, 'Return', VOID, Statement);
  initMetadataForClass(Assignment, 'Assignment', VOID, Statement);
  initMetadataForClass(Expression, 'Expression', VOID, Statement);
  initMetadataForClass(Function, 'Function', VOID, Expression);
  initMetadataForClass(Invoke, 'Invoke', VOID, Expression);
  initMetadataForClass(If, 'If', VOID, Statement);
  initMetadataForClass(OperatorExpr, 'OperatorExpr', VOID, Expression);
  initMetadataForClass(NegateExpr, 'NegateExpr', VOID, Expression);
  initMetadataForClass(ValueExpr, 'ValueExpr', VOID, Expression);
  initMetadataForClass(LiteralExpr, 'LiteralExpr', VOID, ValueExpr);
  initMetadataForClass(IdentifierExpr, 'IdentifierExpr', VOID, ValueExpr);
  initMetadataForClass(GroupExpr, 'GroupExpr', VOID, Expression);
  initMetadataForClass(CallableFunction, 'CallableFunction');
  initMetadataForClass(NativeFunction, 'NativeFunction', VOID, CallableFunction);
  initMetadataForClass(NativeFunctionVoid, 'NativeFunctionVoid', VOID, NativeFunction);
  initMetadataForClass(StatementFunction, 'StatementFunction', VOID, CallableFunction);
  initMetadataForClass(KlexVariableLookupTable, 'KlexVariableLookupTable', KlexVariableLookupTable);
  initMetadataForObject(NoReturn, 'NoReturn');
  initMetadataForClass(KlexExecutionContext, 'KlexExecutionContext', VOID, KlexVariableLookupTable);
  //endregion
  function KlexLang$klexTokenizer$lambda($this$create) {
    var tmp = AnyCount_getInstance();
    $this$create.d9(tmp, KlexLang$klexTokenizer$lambda$lambda);
    return Unit_instance;
  }
  function KlexLang$klexTokenizer$lambda$lambda($this$AnyCount) {
    var tmp = KlexLang$klexTokenizer$lambda$lambda$lambda;
    var tmp_0 = KlexLang$klexTokenizer$lambda$lambda$lambda_0;
    var tmp_1 = KlexLang$klexTokenizer$lambda$lambda$lambda_1;
    var tmp_2 = KlexLang$klexTokenizer$lambda$lambda$lambda_2;
    var tmp_3 = KlexLang$klexTokenizer$lambda$lambda$lambda_3;
    var tmp_4 = KlexLang$klexTokenizer$lambda$lambda$lambda_4;
    var tmp_5 = KlexLang$klexTokenizer$lambda$lambda$lambda_5;
    var tmp_6 = KlexLang$klexTokenizer$lambda$lambda$lambda_6;
    var tmp_7 = KlexLang$klexTokenizer$lambda$lambda$lambda_7;
    var tmp_8 = KlexLang$klexTokenizer$lambda$lambda$lambda_8;
    var tmp_9 = KlexLang$klexTokenizer$lambda$lambda$lambda_9;
    var tmp_10 = KlexLang$klexTokenizer$lambda$lambda$lambda_10;
    var tmp_11 = KlexLang$klexTokenizer$lambda$lambda$lambda_11;
    var tmp_12 = KlexLang$klexTokenizer$lambda$lambda$lambda_12;
    $this$AnyCount.t8([tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, tmp_12, KlexLang$klexTokenizer$lambda$lambda$lambda_13]);
    return Unit_instance;
  }
  function KlexLang$klexTokenizer$lambda$lambda$lambda($this$oneOf) {
    var tmp = OneOrMore_getInstance();
    $this$oneOf.d9(tmp, KlexLang$klexTokenizer$lambda$lambda$lambda$lambda);
    $this$oneOf.c8_1 = WhiteSpace_getInstance();
    return Unit_instance;
  }
  function KlexLang$klexTokenizer$lambda$lambda$lambda$lambda($this$OneOrMore) {
    $this$OneOrMore.ka(' \r\n\t');
    return Unit_instance;
  }
  function KlexLang$klexTokenizer$lambda$lambda$lambda_0($this$oneOf) {
    var closed = {_v: false};
    var tmp = KlexLang$klexTokenizer$lambda$lambda$lambda$lambda_0(closed);
    $this$oneOf.t8([tmp, KlexLang$klexTokenizer$lambda$lambda$lambda$lambda_1(closed)]);
    $this$oneOf.c8_1 = new Comment(closed._v);
    return Unit_instance;
  }
  function KlexLang$klexTokenizer$lambda$lambda$lambda$lambda$lambda($this$AnyCount) {
    $this$AnyCount.ma($this$AnyCount.la('\n'));
    return Unit_instance;
  }
  function KlexLang$klexTokenizer$lambda$lambda$lambda$lambda_0($closed) {
    return function ($this$oneOf) {
      $this$oneOf.ja('//');
      var tmp = AnyCount_getInstance();
      $this$oneOf.d9(tmp, KlexLang$klexTokenizer$lambda$lambda$lambda$lambda$lambda);
      $closed._v = true;
      return Unit_instance;
    };
  }
  function KlexLang$klexTokenizer$lambda$lambda$lambda$lambda$lambda_0($this$AnyCount) {
    var tmp = KlexLang$klexTokenizer$lambda$lambda$lambda$lambda$lambda$lambda;
    $this$AnyCount.t8([tmp, KlexLang$klexTokenizer$lambda$lambda$lambda$lambda$lambda$lambda_0]);
    return Unit_instance;
  }
  function KlexLang$klexTokenizer$lambda$lambda$lambda$lambda$lambda$lambda($this$oneOf) {
    $this$oneOf.ma($this$oneOf.la('*'));
    return Unit_instance;
  }
  function KlexLang$klexTokenizer$lambda$lambda$lambda$lambda$lambda$lambda_0($this$oneOf) {
    $this$oneOf.ja('*');
    $this$oneOf.ma($this$oneOf.la('/'));
    return Unit_instance;
  }
  function KlexLang$klexTokenizer$lambda$lambda$lambda$lambda$lambda_1($closed) {
    return function ($this$Optional) {
      $this$Optional.ja('*/');
      $closed._v = true;
      return Unit_instance;
    };
  }
  function KlexLang$klexTokenizer$lambda$lambda$lambda$lambda_1($closed) {
    return function ($this$oneOf) {
      $this$oneOf.ja('/*');
      var tmp = AnyCount_getInstance();
      $this$oneOf.d9(tmp, KlexLang$klexTokenizer$lambda$lambda$lambda$lambda$lambda_0);
      var tmp_0 = Optional_getInstance();
      $this$oneOf.d9(tmp_0, KlexLang$klexTokenizer$lambda$lambda$lambda$lambda$lambda_1($closed));
      return Unit_instance;
    };
  }
  function KlexLang$klexTokenizer$lambda$lambda$lambda_1($this$oneOf) {
    var tmp = KlexLang$klexTokenizer$lambda$lambda$lambda$lambda_2;
    // Inline function 'kotlin.getOrElse' call
    var this_0 = $this$oneOf.t8([tmp, KlexLang$klexTokenizer$lambda$lambda$lambda$lambda_3]);
    var exception = Result__exceptionOrNull_impl_p6xea9(this_0);
    var tmp_0;
    if (exception == null) {
      var tmp_1 = _Result___get_value__impl__bjfvqg(this_0);
      tmp_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      return Unit_instance;
    }
    var boolString = tmp_0.n9_1;
    $this$oneOf.c8_1 = new BoolToken(boolString === 'true');
    return Unit_instance;
  }
  function KlexLang$klexTokenizer$lambda$lambda$lambda$lambda_2($this$oneOf) {
    $this$oneOf.ja('true');
    return Unit_instance;
  }
  function KlexLang$klexTokenizer$lambda$lambda$lambda$lambda_3($this$oneOf) {
    $this$oneOf.ja('false');
    return Unit_instance;
  }
  function KlexLang$klexTokenizer$lambda$lambda$lambda_2($this$oneOf) {
    $this$oneOf.ja('null');
    $this$oneOf.c8_1 = NullToken_getInstance();
    return Unit_instance;
  }
  function KlexLang$klexTokenizer$lambda$lambda$lambda_3($this$oneOf) {
    // Inline function 'kotlin.getOrElse' call
    var this_0 = $this$oneOf.q8(VOID, KlexLang$klexTokenizer$lambda$lambda$lambda$lambda_4);
    var exception = Result__exceptionOrNull_impl_p6xea9(this_0);
    var tmp;
    if (exception == null) {
      var tmp_0 = _Result___get_value__impl__bjfvqg(this_0);
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      return Unit_instance;
    }
    var identifier = tmp.n9_1;
    $this$oneOf.c8_1 = new Identifier(identifier);
    return Unit_instance;
  }
  function KlexLang$klexTokenizer$lambda$lambda$lambda$lambda_4($this$group) {
    $this$group.ka('a-zA-Z');
    var tmp = AnyCount_getInstance();
    $this$group.d9(tmp, KlexLang$klexTokenizer$lambda$lambda$lambda$lambda$lambda_2);
    return Unit_instance;
  }
  function KlexLang$klexTokenizer$lambda$lambda$lambda$lambda$lambda_2($this$AnyCount) {
    $this$AnyCount.ka('a-zA-Z0-9');
    return Unit_instance;
  }
  function KlexLang$klexTokenizer$lambda$lambda$lambda_4($this$oneOf) {
    // Inline function 'kotlin.getOrElse' call
    var this_0 = $this$oneOf.q8(VOID, KlexLang$klexTokenizer$lambda$lambda$lambda$lambda_5);
    var exception = Result__exceptionOrNull_impl_p6xea9(this_0);
    var tmp;
    if (exception == null) {
      var tmp_0 = _Result___get_value__impl__bjfvqg(this_0);
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      return Unit_instance;
    }
    var strChar = tmp.n9_1;
    // Inline function 'kotlin.getOrElse' call
    var this_1 = $this$oneOf.q8(VOID, KlexLang$klexTokenizer$lambda$lambda$lambda$lambda_6(strChar));
    var exception_0 = Result__exceptionOrNull_impl_p6xea9(this_1);
    var tmp_1;
    if (exception_0 == null) {
      var tmp_2 = _Result___get_value__impl__bjfvqg(this_1);
      tmp_1 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    } else {
      return Unit_instance;
    }
    var content = tmp_1.n9_1;
    $this$oneOf.ja(strChar);
    $this$oneOf.c8_1 = new StringToken(content);
    return Unit_instance;
  }
  function KlexLang$klexTokenizer$lambda$lambda$lambda$lambda_5($this$group) {
    $this$group.ka('\'"`');
    return Unit_instance;
  }
  function KlexLang$klexTokenizer$lambda$lambda$lambda$lambda$lambda$lambda_1($this$oneOf) {
    $this$oneOf.ja('\\\\');
    return Unit_instance;
  }
  function KlexLang$klexTokenizer$lambda$lambda$lambda$lambda$lambda$lambda_2($strChar) {
    return function ($this$oneOf) {
      $this$oneOf.ja('\\' + $strChar);
      return Unit_instance;
    };
  }
  function KlexLang$klexTokenizer$lambda$lambda$lambda$lambda$lambda$lambda_3($strChar) {
    return function ($this$oneOf) {
      $this$oneOf.ma($this$oneOf.la($strChar));
      return Unit_instance;
    };
  }
  function KlexLang$klexTokenizer$lambda$lambda$lambda$lambda$lambda_3($strChar) {
    return function ($this$AnyCount) {
      var tmp = KlexLang$klexTokenizer$lambda$lambda$lambda$lambda$lambda$lambda_1;
      var tmp_0 = KlexLang$klexTokenizer$lambda$lambda$lambda$lambda$lambda$lambda_2($strChar);
      $this$AnyCount.t8([tmp, tmp_0, KlexLang$klexTokenizer$lambda$lambda$lambda$lambda$lambda$lambda_3($strChar)]);
      return Unit_instance;
    };
  }
  function KlexLang$klexTokenizer$lambda$lambda$lambda$lambda_6($strChar) {
    return function ($this$group) {
      var tmp = AnyCount_getInstance();
      $this$group.d9(tmp, KlexLang$klexTokenizer$lambda$lambda$lambda$lambda$lambda_3($strChar));
      return Unit_instance;
    };
  }
  function KlexLang$klexTokenizer$lambda$lambda$lambda_5($this$oneOf) {
    // Inline function 'kotlin.getOrElse' call
    var this_0 = $this$oneOf.q8(VOID, KlexLang$klexTokenizer$lambda$lambda$lambda$lambda_7);
    var exception = Result__exceptionOrNull_impl_p6xea9(this_0);
    var tmp;
    if (exception == null) {
      var tmp_0 = _Result___get_value__impl__bjfvqg(this_0);
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      return Unit_instance;
    }
    var numString = tmp.n9_1;
    var tmp0_elvis_lhs = toLongOrNull(numString);
    var parsed = tmp0_elvis_lhs == null ? toDoubleOrNull(numString) : tmp0_elvis_lhs;
    if (parsed == null) {
      $this$oneOf.r8('Unparsable number');
      return Unit_instance;
    }
    $this$oneOf.c8_1 = new NumberToken(parsed);
    return Unit_instance;
  }
  function KlexLang$klexTokenizer$lambda$lambda$lambda$lambda_7($this$group) {
    var tmp = AnyCount_getInstance();
    $this$group.d9(tmp, KlexLang$klexTokenizer$lambda$lambda$lambda$lambda$lambda_4);
    var tmp_0 = Optional_getInstance();
    $this$group.d9(tmp_0, KlexLang$klexTokenizer$lambda$lambda$lambda$lambda$lambda_5);
    var tmp_1 = AnyCount_getInstance();
    $this$group.d9(tmp_1, KlexLang$klexTokenizer$lambda$lambda$lambda$lambda$lambda_6);
    var tmp_2 = Optional_getInstance();
    $this$group.d9(tmp_2, KlexLang$klexTokenizer$lambda$lambda$lambda$lambda$lambda_7);
    return Unit_instance;
  }
  function KlexLang$klexTokenizer$lambda$lambda$lambda$lambda$lambda_4($this$AnyCount) {
    $this$AnyCount.ka('0-9');
    return Unit_instance;
  }
  function KlexLang$klexTokenizer$lambda$lambda$lambda$lambda$lambda_5($this$Optional) {
    $this$Optional.ja('.');
    return Unit_instance;
  }
  function KlexLang$klexTokenizer$lambda$lambda$lambda$lambda$lambda_6($this$AnyCount) {
    $this$AnyCount.ka('0-9');
    return Unit_instance;
  }
  function KlexLang$klexTokenizer$lambda$lambda$lambda$lambda$lambda_7($this$Optional) {
    $this$Optional.ka('eE');
    var tmp = AnyCount_getInstance();
    $this$Optional.d9(tmp, KlexLang$klexTokenizer$lambda$lambda$lambda$lambda$lambda$lambda_4);
    return Unit_instance;
  }
  function KlexLang$klexTokenizer$lambda$lambda$lambda$lambda$lambda$lambda_4($this$AnyCount) {
    $this$AnyCount.ka('0-9');
    return Unit_instance;
  }
  function KlexLang$klexTokenizer$lambda$lambda$lambda_6($this$oneOf) {
    // Inline function 'kotlin.getOrElse' call
    var this_0 = $this$oneOf.ka('+\\-*/(){},|&!');
    var exception = Result__exceptionOrNull_impl_p6xea9(this_0);
    var tmp;
    if (exception == null) {
      var tmp_0 = _Result___get_value__impl__bjfvqg(this_0);
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      return Unit_instance;
    }
    switch (tmp.n9_1) {
      case '+':
        $this$oneOf.c8_1 = OperatorPlus_getInstance();
        break;
      case '-':
        $this$oneOf.c8_1 = OperatorMinus_getInstance();
        break;
      case '*':
        $this$oneOf.c8_1 = OperatorMultiply_getInstance();
        break;
      case '/':
        $this$oneOf.c8_1 = OperatorDivide_getInstance();
        break;
      case '(':
        $this$oneOf.c8_1 = OpenParentheses_getInstance();
        break;
      case ')':
        $this$oneOf.c8_1 = CloseParentheses_getInstance();
        break;
      case '{':
        $this$oneOf.c8_1 = OpenCurly_getInstance();
        break;
      case '}':
        $this$oneOf.c8_1 = CloseCurly_getInstance();
        break;
      case ',':
        $this$oneOf.c8_1 = CommaSep_getInstance();
        break;
      case '|':
        $this$oneOf.ja('|');
        $this$oneOf.c8_1 = OperatorOr_getInstance();
        break;
      case '&':
        $this$oneOf.ja('&');
        $this$oneOf.c8_1 = OperatorAnd_getInstance();
        break;
      case '!':
        $this$oneOf.c8_1 = Negate_getInstance();
        break;
      default:
        $this$oneOf.s8();
        return Unit_instance;
    }
    return Unit_instance;
  }
  function KlexLang$klexTokenizer$lambda$lambda$lambda_7($this$oneOf) {
    $this$oneOf.ja('==');
    $this$oneOf.c8_1 = OperatorEquals_getInstance();
    return Unit_instance;
  }
  function KlexLang$klexTokenizer$lambda$lambda$lambda_8($this$oneOf) {
    $this$oneOf.ja('=');
    $this$oneOf.c8_1 = Assign_getInstance();
    return Unit_instance;
  }
  function KlexLang$klexTokenizer$lambda$lambda$lambda_9($this$oneOf) {
    $this$oneOf.ja('<');
    $this$oneOf.c8_1 = OperatorLess_getInstance();
    return Unit_instance;
  }
  function KlexLang$klexTokenizer$lambda$lambda$lambda_10($this$oneOf) {
    $this$oneOf.ja('>');
    $this$oneOf.c8_1 = OperatorGreater_getInstance();
    return Unit_instance;
  }
  function KlexLang$klexTokenizer$lambda$lambda$lambda_11($this$oneOf) {
    $this$oneOf.ja('<=');
    $this$oneOf.c8_1 = OperatorLessEquals_getInstance();
    return Unit_instance;
  }
  function KlexLang$klexTokenizer$lambda$lambda$lambda_12($this$oneOf) {
    $this$oneOf.ja('>=');
    $this$oneOf.c8_1 = OperatorGreaterEquals_getInstance();
    return Unit_instance;
  }
  function KlexLang$klexTokenizer$lambda$lambda$lambda_13($this$oneOf) {
    $this$oneOf.ma($this$oneOf.la(''));
    $this$oneOf.c8_1 = Unknown_getInstance();
    return Unit_instance;
  }
  function KlexLang$klexParser$lambda($this$create) {
    var whiteSpace = $this$create.a9(VOID, KlexLang$klexParser$lambda$lambda);
    var optWS = $this$create.a9(VOID, KlexLang$klexParser$lambda$lambda_0(whiteSpace));
    var commaSep = $this$create.a9(VOID, KlexLang$klexParser$lambda$lambda_1(optWS));
    var statement$delegate = $this$create.y8();
    var expression$delegate = $this$create.y8();
    var codeScope$delegate = $this$create.y8();
    var wrappedCodeScope$delegate = $this$create.y8();
    var assignment = $this$create.a9(VOID, KlexLang$klexParser$lambda$lambda_2(optWS, expression$delegate));
    var returnV = $this$create.a9(VOID, KlexLang$klexParser$lambda$lambda_3(optWS, expression$delegate));
    var basicExpression = $this$create.a9(VOID, KlexLang$klexParser$lambda$lambda_4(optWS, expression$delegate));
    invoke$lambda_2(expression$delegate, $this$create.a9(VOID, KlexLang$klexParser$lambda$lambda_5(optWS, expression$delegate, basicExpression, commaSep, statement$delegate)));
    var ifStatement = $this$create.a9(VOID, KlexLang$klexParser$lambda$lambda_6(optWS, expression$delegate, statement$delegate));
    invoke$lambda_0(statement$delegate, $this$create.a9(VOID, KlexLang$klexParser$lambda$lambda_7(optWS, ifStatement, returnV, assignment, wrappedCodeScope$delegate, expression$delegate)));
    invoke$lambda_4(codeScope$delegate, $this$create.a9(VOID, KlexLang$klexParser$lambda$lambda_8(optWS, statement$delegate)));
    invoke$lambda_6(wrappedCodeScope$delegate, $this$create.a9(VOID, KlexLang$klexParser$lambda$lambda_9(codeScope$delegate)));
    $this$create.c9(optWS);
    $this$create.c9(invoke$lambda_3(codeScope$delegate));
    $this$create.c9(optWS);
    return Unit_instance;
  }
  function invoke$lambda($statement$delegate) {
    return $statement$delegate.l8(null, getLocalDelegateReference('statement', KMutableProperty0, true, function () {
      return THROW_ISE();
    }));
  }
  function invoke$lambda_0($statement$delegate, _set____db54di) {
    return $statement$delegate.m8(null, getLocalDelegateReference('statement', KMutableProperty0, true, function () {
      return THROW_ISE();
    }), _set____db54di);
  }
  function invoke$lambda_1($expression$delegate) {
    return $expression$delegate.l8(null, getLocalDelegateReference('expression', KMutableProperty0, true, function () {
      return THROW_ISE();
    }));
  }
  function invoke$lambda_2($expression$delegate, _set____db54di) {
    return $expression$delegate.m8(null, getLocalDelegateReference('expression', KMutableProperty0, true, function () {
      return THROW_ISE();
    }), _set____db54di);
  }
  function invoke$lambda_3($codeScope$delegate) {
    return $codeScope$delegate.l8(null, getLocalDelegateReference('codeScope', KMutableProperty0, true, function () {
      return THROW_ISE();
    }));
  }
  function invoke$lambda_4($codeScope$delegate, _set____db54di) {
    return $codeScope$delegate.m8(null, getLocalDelegateReference('codeScope', KMutableProperty0, true, function () {
      return THROW_ISE();
    }), _set____db54di);
  }
  function invoke$lambda_5($wrappedCodeScope$delegate) {
    return $wrappedCodeScope$delegate.l8(null, getLocalDelegateReference('wrappedCodeScope', KMutableProperty0, true, function () {
      return THROW_ISE();
    }));
  }
  function invoke$lambda_6($wrappedCodeScope$delegate, _set____db54di) {
    return $wrappedCodeScope$delegate.m8(null, getLocalDelegateReference('wrappedCodeScope', KMutableProperty0, true, function () {
      return THROW_ISE();
    }), _set____db54di);
  }
  function KlexLang$klexParser$lambda$lambda($this$define, it) {
    var tmp = KlexLang$klexParser$lambda$lambda$lambda;
    $this$define.t8([tmp, KlexLang$klexParser$lambda$lambda$lambda_0]);
    return Unit_instance;
  }
  function KlexLang$klexParser$lambda$lambda$lambda($this$oneOf) {
    // Inline function 'com.mylosoftworks.klex.context.KlexContextList.match' call
    var tmp = $this$oneOf.l9(KlexLang$klexParser$lambda$lambda$lambda$lambda);
    new Result(tmp) instanceof Result || THROW_CCE();
    return Unit_instance;
  }
  function KlexLang$klexParser$lambda$lambda$lambda$lambda($this$match) {
    return $this$match instanceof WhiteSpace;
  }
  function KlexLang$klexParser$lambda$lambda$lambda_0($this$oneOf) {
    // Inline function 'com.mylosoftworks.klex.context.KlexContextList.match' call
    var tmp = $this$oneOf.l9(KlexLang$klexParser$lambda$lambda$lambda$lambda_0);
    new Result(tmp) instanceof Result || THROW_CCE();
    return Unit_instance;
  }
  function KlexLang$klexParser$lambda$lambda$lambda$lambda_0($this$match) {
    return $this$match instanceof Comment;
  }
  function KlexLang$klexParser$lambda$lambda$lambda_1($whiteSpace) {
    return function ($this$AnyCount) {
      $this$AnyCount.c9($whiteSpace);
      return Unit_instance;
    };
  }
  function KlexLang$klexParser$lambda$lambda_0($whiteSpace) {
    return function ($this$define, it) {
      var tmp = AnyCount_getInstance();
      $this$define.d9(tmp, KlexLang$klexParser$lambda$lambda$lambda_1($whiteSpace));
      return Unit_instance;
    };
  }
  function KlexLang$klexParser$lambda$lambda$lambda_2($this$match) {
    return $this$match instanceof CommaSep;
  }
  function KlexLang$klexParser$lambda$lambda_1($optWS) {
    return function ($this$define, it) {
      $this$define.c9($optWS);
      // Inline function 'com.mylosoftworks.klex.context.KlexContextList.match' call
      var tmp = $this$define.l9(KlexLang$klexParser$lambda$lambda$lambda_2);
      new Result(tmp) instanceof Result || THROW_CCE();
      $this$define.c9($optWS);
      return Unit_instance;
    };
  }
  function KlexLang$klexParser$lambda$lambda$lambda_3($this$match) {
    return $this$match instanceof Identifier;
  }
  function KlexLang$klexParser$lambda$lambda$lambda_4($this$match) {
    return $this$match instanceof Assign;
  }
  function KlexLang$klexParser$lambda$lambda_2($optWS, $expression$delegate) {
    return function ($this$define, it) {
      // Inline function 'com.mylosoftworks.klex.context.KlexContextList.match' call
      var tmp = $this$define.l9(KlexLang$klexParser$lambda$lambda$lambda_3);
      // Inline function 'kotlin.getOrElse' call
      var this_0 = new Result(tmp) instanceof Result ? tmp : THROW_CCE();
      var exception = Result__exceptionOrNull_impl_p6xea9(this_0);
      var tmp_0;
      if (exception == null) {
        var tmp_1 = _Result___get_value__impl__bjfvqg(this_0);
        tmp_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      } else {
        return Unit_instance;
      }
      var iden = tmp_0;
      $this$define.c9($optWS);
      // Inline function 'com.mylosoftworks.klex.context.KlexContextList.match' call
      var tmp_2 = $this$define.l9(KlexLang$klexParser$lambda$lambda$lambda_4);
      new Result(tmp_2) instanceof Result || THROW_CCE();
      $this$define.c9($optWS);
      // Inline function 'kotlin.getOrElse' call
      var this_1 = $this$define.c9(invoke$lambda_1($expression$delegate));
      var exception_0 = Result__exceptionOrNull_impl_p6xea9(this_1);
      var tmp_3;
      if (exception_0 == null) {
        var tmp_4 = _Result___get_value__impl__bjfvqg(this_1);
        tmp_3 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      } else {
        return Unit_instance;
      }
      var tmp_5 = tmp_3.p7_1.qa();
      var expr = tmp_5 instanceof Expression ? tmp_5 : THROW_CCE();
      $this$define.c8_1 = new Assignment(iden.xa_1, expr);
      return Unit_instance;
    };
  }
  function KlexLang$klexParser$lambda$lambda$lambda_5($this$match) {
    return $this$match instanceof Identifier;
  }
  function KlexLang$klexParser$lambda$lambda_3($optWS, $expression$delegate) {
    return function ($this$define, it) {
      // Inline function 'com.mylosoftworks.klex.context.KlexContextList.match' call
      var tmp = $this$define.l9(KlexLang$klexParser$lambda$lambda$lambda_5);
      // Inline function 'kotlin.getOrElse' call
      var this_0 = new Result(tmp) instanceof Result ? tmp : THROW_CCE();
      var exception = Result__exceptionOrNull_impl_p6xea9(this_0);
      var tmp_0;
      if (exception == null) {
        var tmp_1 = _Result___get_value__impl__bjfvqg(this_0);
        tmp_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      } else {
        return Unit_instance;
      }
      var iden = tmp_0.xa_1;
      var tmp_2;
      if (!(iden === 'return')) {
        $this$define.s8();
        return Unit_instance;
      }
      $this$define.c9($optWS);
      // Inline function 'kotlin.getOrElse' call
      var this_1 = $this$define.c9(invoke$lambda_1($expression$delegate));
      var exception_0 = Result__exceptionOrNull_impl_p6xea9(this_1);
      var tmp_3;
      if (exception_0 == null) {
        var tmp_4 = _Result___get_value__impl__bjfvqg(this_1);
        tmp_3 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      } else {
        return Unit_instance;
      }
      var tmp_5 = tmp_3.p7_1.qa();
      var expr = tmp_5 instanceof Expression ? tmp_5 : THROW_CCE();
      $this$define.c8_1 = new Return(expr);
      return Unit_instance;
    };
  }
  function KlexLang$klexParser$lambda$lambda$lambda_6($this$oneOf) {
    // Inline function 'com.mylosoftworks.klex.context.KlexContextList.match' call
    var tmp = $this$oneOf.l9(KlexLang$klexParser$lambda$lambda$lambda$lambda_1);
    // Inline function 'kotlin.getOrElse' call
    var this_0 = new Result(tmp) instanceof Result ? tmp : THROW_CCE();
    var exception = Result__exceptionOrNull_impl_p6xea9(this_0);
    var tmp_0;
    if (exception == null) {
      var tmp_1 = _Result___get_value__impl__bjfvqg(this_0);
      tmp_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      return Unit_instance;
    }
    var valToken = tmp_0;
    if (valToken instanceof ValLiteralToken) {
      $this$oneOf.c8_1 = new LiteralExpr(valToken.ab());
    } else {
      if (valToken instanceof Identifier) {
        $this$oneOf.c8_1 = new IdentifierExpr(valToken.xa_1);
      } else {
        $this$oneOf.s8();
        return Unit_instance;
      }
    }
    return Unit_instance;
  }
  function KlexLang$klexParser$lambda$lambda$lambda$lambda_1($this$match) {
    return $this$match instanceof ValToken;
  }
  function KlexLang$klexParser$lambda$lambda$lambda$lambda_2($this$match) {
    return $this$match instanceof OpenParentheses;
  }
  function KlexLang$klexParser$lambda$lambda$lambda$lambda_3($this$match) {
    return $this$match instanceof CloseParentheses;
  }
  function KlexLang$klexParser$lambda$lambda$lambda_7($optWS, $expression$delegate) {
    return function ($this$oneOf) {
      // Inline function 'com.mylosoftworks.klex.context.KlexContextList.match' call
      var tmp = $this$oneOf.l9(KlexLang$klexParser$lambda$lambda$lambda$lambda_2);
      // Inline function 'kotlin.getOrElse' call
      var this_0 = new Result(tmp) instanceof Result ? tmp : THROW_CCE();
      var exception = Result__exceptionOrNull_impl_p6xea9(this_0);
      var tmp_0;
      if (exception == null) {
        var tmp_1 = _Result___get_value__impl__bjfvqg(this_0);
        tmp_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      } else {
        return Unit_instance;
      }
      $this$oneOf.c9($optWS);
      // Inline function 'kotlin.getOrElse' call
      var this_1 = $this$oneOf.c9(invoke$lambda_1($expression$delegate));
      var exception_0 = Result__exceptionOrNull_impl_p6xea9(this_1);
      var tmp_2;
      if (exception_0 == null) {
        var tmp_3 = _Result___get_value__impl__bjfvqg(this_1);
        tmp_2 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      } else {
        return Unit_instance;
      }
      var tmp_4 = tmp_2.p7_1.qa();
      var expr = tmp_4 instanceof Expression ? tmp_4 : THROW_CCE();
      $this$oneOf.c9($optWS);
      // Inline function 'com.mylosoftworks.klex.context.KlexContextList.match' call
      var tmp_5 = $this$oneOf.l9(KlexLang$klexParser$lambda$lambda$lambda$lambda_3);
      new Result(tmp_5) instanceof Result || THROW_CCE();
      $this$oneOf.c8_1 = new GroupExpr(expr);
      return Unit_instance;
    };
  }
  function KlexLang$klexParser$lambda$lambda_4($optWS, $expression$delegate) {
    return function ($this$define, it) {
      var tmp = KlexLang$klexParser$lambda$lambda$lambda_6;
      $this$define.t8([tmp, KlexLang$klexParser$lambda$lambda$lambda_7($optWS, $expression$delegate)]);
      return Unit_instance;
    };
  }
  function KlexLang$klexParser$lambda$lambda$lambda$lambda_4($this$match) {
    return $this$match instanceof Negate;
  }
  function KlexLang$klexParser$lambda$lambda$lambda_8($optWS, $expression$delegate) {
    return function ($this$oneOf) {
      // Inline function 'com.mylosoftworks.klex.context.KlexContextList.match' call
      var tmp = $this$oneOf.l9(KlexLang$klexParser$lambda$lambda$lambda$lambda_4);
      // Inline function 'kotlin.getOrElse' call
      var this_0 = new Result(tmp) instanceof Result ? tmp : THROW_CCE();
      var exception = Result__exceptionOrNull_impl_p6xea9(this_0);
      var tmp_0;
      if (exception == null) {
        var tmp_1 = _Result___get_value__impl__bjfvqg(this_0);
        tmp_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      } else {
        return Unit_instance;
      }
      $this$oneOf.c9($optWS);
      // Inline function 'kotlin.getOrElse' call
      var this_1 = $this$oneOf.c9(invoke$lambda_1($expression$delegate));
      var exception_0 = Result__exceptionOrNull_impl_p6xea9(this_1);
      var tmp_2;
      if (exception_0 == null) {
        var tmp_3 = _Result___get_value__impl__bjfvqg(this_1);
        tmp_2 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      } else {
        return Unit_instance;
      }
      var tmp_4 = tmp_2.p7_1.qa();
      var expr = tmp_4 instanceof Expression ? tmp_4 : THROW_CCE();
      $this$oneOf.c8_1 = new NegateExpr(expr);
      return Unit_instance;
    };
  }
  function KlexLang$klexParser$lambda$lambda$lambda$lambda_5($this$match) {
    return $this$match instanceof Operator;
  }
  function KlexLang$klexParser$lambda$lambda$lambda_9($basicExpression, $optWS, $expression$delegate) {
    return function ($this$oneOf) {
      // Inline function 'kotlin.getOrElse' call
      var this_0 = $this$oneOf.c9($basicExpression);
      var exception = Result__exceptionOrNull_impl_p6xea9(this_0);
      var tmp;
      if (exception == null) {
        var tmp_0 = _Result___get_value__impl__bjfvqg(this_0);
        tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      } else {
        return Unit_instance;
      }
      var tmp_1 = tmp.p7_1.qa();
      var basic = tmp_1 instanceof Expression ? tmp_1 : THROW_CCE();
      $this$oneOf.c9($optWS);
      // Inline function 'com.mylosoftworks.klex.context.KlexContextList.match' call
      var tmp_2 = $this$oneOf.l9(KlexLang$klexParser$lambda$lambda$lambda$lambda_5);
      // Inline function 'kotlin.getOrElse' call
      var this_1 = new Result(tmp_2) instanceof Result ? tmp_2 : THROW_CCE();
      var exception_0 = Result__exceptionOrNull_impl_p6xea9(this_1);
      var tmp_3;
      if (exception_0 == null) {
        var tmp_4 = _Result___get_value__impl__bjfvqg(this_1);
        tmp_3 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      } else {
        return Unit_instance;
      }
      var op = tmp_3;
      $this$oneOf.c9($optWS);
      // Inline function 'kotlin.getOrElse' call
      var this_2 = $this$oneOf.c9(invoke$lambda_1($expression$delegate));
      var exception_1 = Result__exceptionOrNull_impl_p6xea9(this_2);
      var tmp_5;
      if (exception_1 == null) {
        var tmp_6 = _Result___get_value__impl__bjfvqg(this_2);
        tmp_5 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      } else {
        return Unit_instance;
      }
      var tmp_7 = tmp_5.p7_1.qa();
      var extended = tmp_7 instanceof Expression ? tmp_7 : THROW_CCE();
      $this$oneOf.c8_1 = new OperatorExpr(basic, extended, op);
      return Unit_instance;
    };
  }
  function KlexLang$klexParser$lambda$lambda$lambda$lambda_6($this$match) {
    return $this$match instanceof OpenParentheses;
  }
  function KlexLang$klexParser$lambda$lambda$lambda$lambda$lambda($this$match) {
    return $this$match instanceof Identifier;
  }
  function KlexLang$klexParser$lambda$lambda$lambda$lambda_7($optWS, $params) {
    return function ($this$Optional) {
      $this$Optional.c9($optWS);
      // Inline function 'com.mylosoftworks.klex.context.KlexContextList.match' call
      var tmp = $this$Optional.l9(KlexLang$klexParser$lambda$lambda$lambda$lambda$lambda);
      // Inline function 'kotlin.getOrElse' call
      var this_0 = new Result(tmp) instanceof Result ? tmp : THROW_CCE();
      var exception = Result__exceptionOrNull_impl_p6xea9(this_0);
      var tmp_0;
      if (exception == null) {
        var tmp_1 = _Result___get_value__impl__bjfvqg(this_0);
        tmp_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      } else {
        return Unit_instance;
      }
      var paramIden = tmp_0.xa_1;
      $params.o(paramIden);
      return Unit_instance;
    };
  }
  function KlexLang$klexParser$lambda$lambda$lambda$lambda$lambda_0($this$match) {
    return $this$match instanceof Identifier;
  }
  function KlexLang$klexParser$lambda$lambda$lambda$lambda_8($commaSep, $params) {
    return function ($this$AnyCount) {
      $this$AnyCount.c9($commaSep);
      // Inline function 'com.mylosoftworks.klex.context.KlexContextList.match' call
      var tmp = $this$AnyCount.l9(KlexLang$klexParser$lambda$lambda$lambda$lambda$lambda_0);
      // Inline function 'kotlin.getOrElse' call
      var this_0 = new Result(tmp) instanceof Result ? tmp : THROW_CCE();
      var exception = Result__exceptionOrNull_impl_p6xea9(this_0);
      var tmp_0;
      if (exception == null) {
        var tmp_1 = _Result___get_value__impl__bjfvqg(this_0);
        tmp_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      } else {
        return Unit_instance;
      }
      var paramIden = tmp_0.xa_1;
      $params.o(paramIden);
      return Unit_instance;
    };
  }
  function KlexLang$klexParser$lambda$lambda$lambda$lambda_9($this$match) {
    return $this$match instanceof CloseParentheses;
  }
  function KlexLang$klexParser$lambda$lambda$lambda$lambda_10($optWS, $params, $expression$delegate) {
    return function ($this$Optional) {
      $this$Optional.c9($optWS);
      // Inline function 'kotlin.getOrElse' call
      var this_0 = $this$Optional.c9(invoke$lambda_1($expression$delegate));
      var exception = Result__exceptionOrNull_impl_p6xea9(this_0);
      var tmp;
      if (exception == null) {
        var tmp_0 = _Result___get_value__impl__bjfvqg(this_0);
        tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      } else {
        return Unit_instance;
      }
      var tmp_1 = tmp.p7_1.qa();
      var expr = tmp_1 instanceof Expression ? tmp_1 : THROW_CCE();
      $params.o(expr);
      return Unit_instance;
    };
  }
  function KlexLang$klexParser$lambda$lambda$lambda$lambda_11($commaSep, $params, $expression$delegate) {
    return function ($this$AnyCount) {
      $this$AnyCount.c9($commaSep);
      // Inline function 'kotlin.getOrElse' call
      var this_0 = $this$AnyCount.c9(invoke$lambda_1($expression$delegate));
      var exception = Result__exceptionOrNull_impl_p6xea9(this_0);
      var tmp;
      if (exception == null) {
        var tmp_0 = _Result___get_value__impl__bjfvqg(this_0);
        tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      } else {
        return Unit_instance;
      }
      var tmp_1 = tmp.p7_1.qa();
      var expr = tmp_1 instanceof Expression ? tmp_1 : THROW_CCE();
      $params.o(expr);
      return Unit_instance;
    };
  }
  function KlexLang$klexParser$lambda$lambda$lambda$lambda_12($this$match) {
    return $this$match instanceof CloseParentheses;
  }
  function KlexLang$klexParser$lambda$lambda$lambda_10($basicExpression, $optWS, $commaSep, $statement$delegate, $expression$delegate) {
    return function ($this$oneOf) {
      // Inline function 'kotlin.getOrElse' call
      var this_0 = $this$oneOf.c9($basicExpression);
      var exception = Result__exceptionOrNull_impl_p6xea9(this_0);
      var tmp;
      if (exception == null) {
        var tmp_0 = _Result___get_value__impl__bjfvqg(this_0);
        tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      } else {
        return Unit_instance;
      }
      var tmp_1 = tmp.p7_1.qa();
      var target = tmp_1 instanceof Expression ? tmp_1 : THROW_CCE();
      // Inline function 'com.mylosoftworks.klex.context.KlexContextList.match' call
      var tmp_2 = $this$oneOf.l9(KlexLang$klexParser$lambda$lambda$lambda$lambda_6);
      new Result(tmp_2) instanceof Result || THROW_CCE();
      $this$oneOf.c9($optWS);
      var tmp_3;
      var tmp_4;
      if (target instanceof IdentifierExpr) {
        tmp_4 = target.bb_1 === 'function';
      } else {
        tmp_4 = false;
      }
      if (tmp_4) {
        // Inline function 'kotlin.collections.mutableListOf' call
        var params = ArrayList_init_$Create$();
        var tmp_5 = Optional_getInstance();
        $this$oneOf.d9(tmp_5, KlexLang$klexParser$lambda$lambda$lambda$lambda_7($optWS, params));
        var tmp_6 = AnyCount_getInstance();
        $this$oneOf.d9(tmp_6, KlexLang$klexParser$lambda$lambda$lambda$lambda_8($commaSep, params));
        $this$oneOf.c9($optWS);
        // Inline function 'com.mylosoftworks.klex.context.KlexContextList.match' call
        var tmp_7 = $this$oneOf.l9(KlexLang$klexParser$lambda$lambda$lambda$lambda_9);
        new Result(tmp_7) instanceof Result || THROW_CCE();
        // Inline function 'kotlin.getOrElse' call
        var this_1 = $this$oneOf.c9(invoke$lambda($statement$delegate));
        var exception_0 = Result__exceptionOrNull_impl_p6xea9(this_1);
        var tmp_8;
        if (exception_0 == null) {
          var tmp_9 = _Result___get_value__impl__bjfvqg(this_1);
          tmp_8 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
        } else {
          return Unit_instance;
        }
        var tmp_10 = tmp_8.p7_1.qa();
        var block = tmp_10 instanceof Statement ? tmp_10 : THROW_CCE();
        $this$oneOf.c8_1 = new Function(params, block);
        tmp_3 = Unit_instance;
      } else {
        // Inline function 'kotlin.collections.mutableListOf' call
        var params_0 = ArrayList_init_$Create$();
        var tmp_11 = Optional_getInstance();
        $this$oneOf.d9(tmp_11, KlexLang$klexParser$lambda$lambda$lambda$lambda_10($optWS, params_0, $expression$delegate));
        var tmp_12 = AnyCount_getInstance();
        $this$oneOf.d9(tmp_12, KlexLang$klexParser$lambda$lambda$lambda$lambda_11($commaSep, params_0, $expression$delegate));
        $this$oneOf.c9($optWS);
        // Inline function 'com.mylosoftworks.klex.context.KlexContextList.match' call
        var tmp_13 = $this$oneOf.l9(KlexLang$klexParser$lambda$lambda$lambda$lambda_12);
        new Result(tmp_13) instanceof Result || THROW_CCE();
        $this$oneOf.c8_1 = new Invoke(target, params_0);
        tmp_3 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function KlexLang$klexParser$lambda$lambda$lambda_11($basicExpression) {
    return function ($this$oneOf) {
      $this$oneOf.c9($basicExpression);
      return Unit_instance;
    };
  }
  function KlexLang$klexParser$lambda$lambda_5($optWS, $expression$delegate, $basicExpression, $commaSep, $statement$delegate) {
    return function ($this$define, it) {
      var tmp = KlexLang$klexParser$lambda$lambda$lambda_8($optWS, $expression$delegate);
      var tmp_0 = KlexLang$klexParser$lambda$lambda$lambda_9($basicExpression, $optWS, $expression$delegate);
      var tmp_1 = KlexLang$klexParser$lambda$lambda$lambda_10($basicExpression, $optWS, $commaSep, $statement$delegate, $expression$delegate);
      $this$define.t8([tmp, tmp_0, tmp_1, KlexLang$klexParser$lambda$lambda$lambda_11($basicExpression)]);
      return Unit_instance;
    };
  }
  function KlexLang$klexParser$lambda$lambda$lambda_12($this$match) {
    return $this$match instanceof Identifier;
  }
  function KlexLang$klexParser$lambda$lambda$lambda_13($this$match) {
    return $this$match instanceof OpenParentheses;
  }
  function KlexLang$klexParser$lambda$lambda$lambda_14($this$match) {
    return $this$match instanceof CloseParentheses;
  }
  function KlexLang$klexParser$lambda$lambda$lambda_15($this$match) {
    return $this$match instanceof Identifier;
  }
  function KlexLang$klexParser$lambda$lambda_6($optWS, $expression$delegate, $statement$delegate) {
    return function ($this$define, it) {
      // Inline function 'com.mylosoftworks.klex.context.KlexContextList.match' call
      var tmp = $this$define.l9(KlexLang$klexParser$lambda$lambda$lambda_12);
      // Inline function 'kotlin.getOrElse' call
      var this_0 = new Result(tmp) instanceof Result ? tmp : THROW_CCE();
      var exception = Result__exceptionOrNull_impl_p6xea9(this_0);
      var tmp_0;
      if (exception == null) {
        var tmp_1 = _Result___get_value__impl__bjfvqg(this_0);
        tmp_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      } else {
        return Unit_instance;
      }
      var ifIden = tmp_0.xa_1 === 'if';
      var tmp_2;
      if (!ifIden) {
        $this$define.s8();
        return Unit_instance;
      }
      $this$define.c9($optWS);
      // Inline function 'com.mylosoftworks.klex.context.KlexContextList.match' call
      var tmp_3 = $this$define.l9(KlexLang$klexParser$lambda$lambda$lambda_13);
      new Result(tmp_3) instanceof Result || THROW_CCE();
      $this$define.c9($optWS);
      // Inline function 'kotlin.getOrElse' call
      var this_1 = $this$define.c9(invoke$lambda_1($expression$delegate));
      var exception_0 = Result__exceptionOrNull_impl_p6xea9(this_1);
      var tmp_4;
      if (exception_0 == null) {
        var tmp_5 = _Result___get_value__impl__bjfvqg(this_1);
        tmp_4 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      } else {
        return Unit_instance;
      }
      var tmp_6 = tmp_4.p7_1.qa();
      var expr = tmp_6 instanceof Expression ? tmp_6 : THROW_CCE();
      $this$define.c9($optWS);
      // Inline function 'com.mylosoftworks.klex.context.KlexContextList.match' call
      var tmp_7 = $this$define.l9(KlexLang$klexParser$lambda$lambda$lambda_14);
      new Result(tmp_7) instanceof Result || THROW_CCE();
      // Inline function 'kotlin.getOrElse' call
      var this_2 = $this$define.c9(invoke$lambda($statement$delegate));
      var exception_1 = Result__exceptionOrNull_impl_p6xea9(this_2);
      var tmp_8;
      if (exception_1 == null) {
        var tmp_9 = _Result___get_value__impl__bjfvqg(this_2);
        tmp_8 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
      } else {
        return Unit_instance;
      }
      var tmp_10 = tmp_8.p7_1.qa();
      var block = tmp_10 instanceof Statement ? tmp_10 : THROW_CCE();
      // Inline function 'com.mylosoftworks.klex.context.KlexContextList.match' call
      var tmp_11 = $this$define.l9(KlexLang$klexParser$lambda$lambda$lambda_15);
      // Inline function 'kotlin.Result.getOrNull' call
      var this_3 = new Result(tmp_11) instanceof Result ? tmp_11 : THROW_CCE();
      var tmp_12;
      if (_Result___get_isFailure__impl__jpiriv(this_3)) {
        tmp_12 = null;
      } else {
        var tmp_13 = _Result___get_value__impl__bjfvqg(this_3);
        tmp_12 = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
      }
      var tmp0_safe_receiver = tmp_12;
      var elseIden = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.xa_1) === 'else';
      var tmp_14;
      if (elseIden) {
        // Inline function 'kotlin.getOrElse' call
        var this_4 = $this$define.c9(invoke$lambda($statement$delegate));
        var exception_2 = Result__exceptionOrNull_impl_p6xea9(this_4);
        var tmp_15;
        if (exception_2 == null) {
          var tmp_16 = _Result___get_value__impl__bjfvqg(this_4);
          tmp_15 = (tmp_16 == null ? true : !(tmp_16 == null)) ? tmp_16 : THROW_CCE();
        } else {
          return Unit_instance;
        }
        var tmp_17 = tmp_15.p7_1.qa();
        var elseBlock = tmp_17 instanceof Statement ? tmp_17 : THROW_CCE();
        $this$define.c8_1 = new If(expr, block, elseBlock);
        tmp_14 = Unit_instance;
      } else {
        $this$define.c8_1 = new If(expr, block, null);
        tmp_14 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function KlexLang$klexParser$lambda$lambda_7($optWS, $ifStatement, $returnV, $assignment, $wrappedCodeScope$delegate, $expression$delegate) {
    return function ($this$define, it) {
      $this$define.c9($optWS);
      $this$define.w8([invoke$lambda_5($wrappedCodeScope$delegate), $ifStatement, $returnV, $assignment, invoke$lambda_1($expression$delegate)]);
      $this$define.c9($optWS);
      return Unit_instance;
    };
  }
  function KlexLang$klexParser$lambda$lambda$lambda_16($optWS, $statements, $statement$delegate) {
    return function ($this$AnyCount) {
      $this$AnyCount.c9($optWS);
      // Inline function 'kotlin.getOrElse' call
      var this_0 = $this$AnyCount.c9(invoke$lambda($statement$delegate));
      var exception = Result__exceptionOrNull_impl_p6xea9(this_0);
      var tmp;
      if (exception == null) {
        var tmp_0 = _Result___get_value__impl__bjfvqg(this_0);
        tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      } else {
        return Unit_instance;
      }
      var tmp_1 = tmp.p7_1.qa();
      var st = tmp_1 instanceof Statement ? tmp_1 : THROW_CCE();
      $this$AnyCount.c9($optWS);
      $statements.o(st);
      return Unit_instance;
    };
  }
  function KlexLang$klexParser$lambda$lambda_8($optWS, $statement$delegate) {
    return function ($this$define, it) {
      // Inline function 'kotlin.collections.mutableListOf' call
      var statements = ArrayList_init_$Create$();
      var tmp = AnyCount_getInstance();
      $this$define.d9(tmp, KlexLang$klexParser$lambda$lambda$lambda_16($optWS, statements, $statement$delegate));
      $this$define.c8_1 = new CodeScope(statements);
      return Unit_instance;
    };
  }
  function KlexLang$klexParser$lambda$lambda$lambda_17($this$match) {
    return $this$match instanceof OpenCurly;
  }
  function KlexLang$klexParser$lambda$lambda$lambda_18($this$match) {
    return $this$match instanceof CloseCurly;
  }
  function KlexLang$klexParser$lambda$lambda_9($codeScope$delegate) {
    return function ($this$define, it) {
      // Inline function 'com.mylosoftworks.klex.context.KlexContextList.match' call
      var tmp = $this$define.l9(KlexLang$klexParser$lambda$lambda$lambda_17);
      new Result(tmp) instanceof Result || THROW_CCE();
      // Inline function 'kotlin.getOrElse' call
      var this_0 = $this$define.c9(invoke$lambda_3($codeScope$delegate));
      var exception = Result__exceptionOrNull_impl_p6xea9(this_0);
      var tmp_0;
      if (exception == null) {
        var tmp_1 = _Result___get_value__impl__bjfvqg(this_0);
        tmp_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      } else {
        return Unit_instance;
      }
      var tmp_2 = tmp_0.p7_1.qa();
      var cs = tmp_2 instanceof CodeScope ? tmp_2 : THROW_CCE();
      // Inline function 'com.mylosoftworks.klex.context.KlexContextList.match' call
      var tmp_3 = $this$define.l9(KlexLang$klexParser$lambda$lambda$lambda_18);
      new Result(tmp_3) instanceof Result || THROW_CCE();
      $this$define.c8_1 = cs;
      return Unit_instance;
    };
  }
  function KlexLang() {
    KlexLang_instance = this;
    var tmp = this;
    var tmp_0 = Companion_instance;
    tmp.cb_1 = tmp_0.t7(KlexLang$klexTokenizer$lambda);
    var tmp_1 = this;
    var tmp_2 = Companion_instance;
    tmp_1.db_1 = tmp_2.createSource(KlexLang$klexParser$lambda);
  }
  protoOf(KlexLang).eb = function (code) {
    // Inline function 'kotlin.getOrElse' call
    var this_0 = this.cb_1.w7(code);
    var exception = Result__exceptionOrNull_impl_p6xea9(this_0);
    var tmp;
    if (exception == null) {
      var tmp_0 = _Result___get_value__impl__bjfvqg(this_0);
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      // Inline function 'kotlin.Companion.failure' call
      return _Result___init__impl__xyqfz8(createFailure(exception));
    }
    // Inline function 'kotlin.collections.map' call
    var this_1 = tmp.pa();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_1, 10));
    var _iterator__ex2g4s = this_1.e();
    while (_iterator__ex2g4s.f()) {
      var item = _iterator__ex2g4s.g();
      // Inline function 'KlexLang.parseToTree.<anonymous>' call
      var tmp$ret$2 = ensureNotNull(item.o9_1);
      destination.o(tmp$ret$2);
    }
    var tokens = destination;
    // Inline function 'kotlin.getOrElse' call
    var this_2 = this.db_1.w7(tokens);
    var exception_0 = Result__exceptionOrNull_impl_p6xea9(this_2);
    var tmp_1;
    if (exception_0 == null) {
      var tmp_2 = _Result___get_value__impl__bjfvqg(this_2);
      tmp_1 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    } else {
      // Inline function 'kotlin.Companion.failure' call
      return _Result___init__impl__xyqfz8(createFailure(exception_0));
    }
    var tmp_3 = tmp_1.qa();
    var ast = tmp_3 instanceof CodeScope ? tmp_3 : THROW_CCE();
    // Inline function 'kotlin.Companion.success' call
    return _Result___init__impl__xyqfz8(ast);
  };
  protoOf(KlexLang).fb = function (code, variableDef) {
    // Inline function 'kotlin.getOrElse' call
    var this_0 = this.eb(code);
    var exception = Result__exceptionOrNull_impl_p6xea9(this_0);
    var tmp;
    if (exception == null) {
      var tmp_0 = _Result___get_value__impl__bjfvqg(this_0);
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      // Inline function 'kotlin.Companion.failure' call
      return _Result___init__impl__xyqfz8(createFailure(exception));
    }
    var tree = tmp;
    // Inline function 'kotlin.apply' call
    var this_1 = new KlexVariableLookupTable();
    variableDef(this_1);
    var rootVars = this_1;
    return (new KlexExecutionContext(rootVars)).jb(tree);
  };
  var KlexLang_instance;
  function KlexLang_getInstance() {
    if (KlexLang_instance == null)
      new KlexLang();
    return KlexLang_instance;
  }
  function get_keywords() {
    _init_properties_KlexToken_kt__cdq1w3();
    return keywords;
  }
  var keywords;
  function KlexToken(colorHex) {
    colorHex = colorHex === VOID ? null : colorHex;
    this.kb_1 = colorHex;
  }
  protoOf(KlexToken).lb = function () {
    return this.kb_1;
  };
  function ValToken(colorHex) {
    colorHex = colorHex === VOID ? null : colorHex;
    KlexToken.call(this, colorHex);
  }
  function WhiteSpace() {
    WhiteSpace_instance = this;
    KlexToken.call(this);
  }
  protoOf(WhiteSpace).toString = function () {
    return 'WhiteSpace';
  };
  protoOf(WhiteSpace).hashCode = function () {
    return -2054143363;
  };
  protoOf(WhiteSpace).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WhiteSpace))
      return false;
    other instanceof WhiteSpace || THROW_CCE();
    return true;
  };
  var WhiteSpace_instance;
  function WhiteSpace_getInstance() {
    if (WhiteSpace_instance == null)
      new WhiteSpace();
    return WhiteSpace_instance;
  }
  function Identifier(name) {
    ValToken.call(this);
    this.xa_1 = name;
  }
  protoOf(Identifier).lb = function () {
    return get_keywords().b1(this.xa_1) ? '#F86700' : '#DDD';
  };
  protoOf(Identifier).toString = function () {
    return 'Identifier(name=' + this.xa_1 + ')';
  };
  protoOf(Identifier).hashCode = function () {
    return getStringHashCode(this.xa_1);
  };
  protoOf(Identifier).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Identifier))
      return false;
    var tmp0_other_with_cast = other instanceof Identifier ? other : THROW_CCE();
    if (!(this.xa_1 === tmp0_other_with_cast.xa_1))
      return false;
    return true;
  };
  function Operator() {
    KlexToken.call(this);
  }
  function OperatorPlus() {
    OperatorPlus_instance = this;
    Operator.call(this);
  }
  protoOf(OperatorPlus).nb = function (left, right) {
    var tmp;
    if (!(left == null) ? typeof left === 'string' : false) {
      tmp = true;
    } else {
      tmp = !(right == null) ? typeof right === 'string' : false;
    }
    if (tmp)
      return toString(left) + toString(right);
    var tmp_0;
    if (isNumber(left)) {
      tmp_0 = isNumber(right);
    } else {
      tmp_0 = false;
    }
    if (tmp_0)
      return numberToDouble(left) + numberToDouble(right);
    return null;
  };
  protoOf(OperatorPlus).toString = function () {
    return 'OperatorPlus';
  };
  protoOf(OperatorPlus).hashCode = function () {
    return 63868030;
  };
  protoOf(OperatorPlus).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OperatorPlus))
      return false;
    other instanceof OperatorPlus || THROW_CCE();
    return true;
  };
  var OperatorPlus_instance;
  function OperatorPlus_getInstance() {
    if (OperatorPlus_instance == null)
      new OperatorPlus();
    return OperatorPlus_instance;
  }
  function OperatorMinus() {
    OperatorMinus_instance = this;
    Operator.call(this);
  }
  protoOf(OperatorMinus).nb = function (left, right) {
    var tmp;
    if (isNumber(left)) {
      tmp = isNumber(right);
    } else {
      tmp = false;
    }
    if (tmp)
      return numberToDouble(left) - numberToDouble(right);
    return null;
  };
  protoOf(OperatorMinus).toString = function () {
    return 'OperatorMinus';
  };
  protoOf(OperatorMinus).hashCode = function () {
    return 1977042444;
  };
  protoOf(OperatorMinus).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OperatorMinus))
      return false;
    other instanceof OperatorMinus || THROW_CCE();
    return true;
  };
  var OperatorMinus_instance;
  function OperatorMinus_getInstance() {
    if (OperatorMinus_instance == null)
      new OperatorMinus();
    return OperatorMinus_instance;
  }
  function OperatorMultiply() {
    OperatorMultiply_instance = this;
    Operator.call(this);
  }
  protoOf(OperatorMultiply).nb = function (left, right) {
    var tmp;
    if (isNumber(left)) {
      tmp = isNumber(right);
    } else {
      tmp = false;
    }
    if (tmp)
      return numberToDouble(left) * numberToDouble(right);
    return null;
  };
  protoOf(OperatorMultiply).toString = function () {
    return 'OperatorMultiply';
  };
  protoOf(OperatorMultiply).hashCode = function () {
    return -1108307192;
  };
  protoOf(OperatorMultiply).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OperatorMultiply))
      return false;
    other instanceof OperatorMultiply || THROW_CCE();
    return true;
  };
  var OperatorMultiply_instance;
  function OperatorMultiply_getInstance() {
    if (OperatorMultiply_instance == null)
      new OperatorMultiply();
    return OperatorMultiply_instance;
  }
  function OperatorDivide() {
    OperatorDivide_instance = this;
    Operator.call(this);
  }
  protoOf(OperatorDivide).nb = function (left, right) {
    var tmp;
    if (isNumber(left)) {
      tmp = isNumber(right);
    } else {
      tmp = false;
    }
    if (tmp)
      return numberToDouble(left) / numberToDouble(right);
    return null;
  };
  protoOf(OperatorDivide).toString = function () {
    return 'OperatorDivide';
  };
  protoOf(OperatorDivide).hashCode = function () {
    return 901337693;
  };
  protoOf(OperatorDivide).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OperatorDivide))
      return false;
    other instanceof OperatorDivide || THROW_CCE();
    return true;
  };
  var OperatorDivide_instance;
  function OperatorDivide_getInstance() {
    if (OperatorDivide_instance == null)
      new OperatorDivide();
    return OperatorDivide_instance;
  }
  function jsBool(_this__u8e3s4) {
    _init_properties_KlexToken_kt__cdq1w3();
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = !!_this__u8e3s4;
    return (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE();
  }
  function OperatorEquals() {
    OperatorEquals_instance = this;
    Operator.call(this);
  }
  protoOf(OperatorEquals).nb = function (left, right) {
    return equals(left, right);
  };
  protoOf(OperatorEquals).toString = function () {
    return 'OperatorEquals';
  };
  protoOf(OperatorEquals).hashCode = function () {
    return 937317795;
  };
  protoOf(OperatorEquals).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OperatorEquals))
      return false;
    other instanceof OperatorEquals || THROW_CCE();
    return true;
  };
  var OperatorEquals_instance;
  function OperatorEquals_getInstance() {
    if (OperatorEquals_instance == null)
      new OperatorEquals();
    return OperatorEquals_instance;
  }
  function OperatorLess() {
    OperatorLess_instance = this;
    Operator.call(this);
  }
  protoOf(OperatorLess).nb = function (left, right) {
    var tmp;
    if (isNumber(left)) {
      tmp = isNumber(right);
    } else {
      tmp = false;
    }
    if (tmp)
      return numberToDouble(left) < numberToDouble(right);
    return null;
  };
  protoOf(OperatorLess).toString = function () {
    return 'OperatorLess';
  };
  protoOf(OperatorLess).hashCode = function () {
    return 63742077;
  };
  protoOf(OperatorLess).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OperatorLess))
      return false;
    other instanceof OperatorLess || THROW_CCE();
    return true;
  };
  var OperatorLess_instance;
  function OperatorLess_getInstance() {
    if (OperatorLess_instance == null)
      new OperatorLess();
    return OperatorLess_instance;
  }
  function OperatorGreater() {
    OperatorGreater_instance = this;
    Operator.call(this);
  }
  protoOf(OperatorGreater).nb = function (left, right) {
    var tmp;
    if (isNumber(left)) {
      tmp = isNumber(right);
    } else {
      tmp = false;
    }
    if (tmp)
      return numberToDouble(left) > numberToDouble(right);
    return null;
  };
  protoOf(OperatorGreater).toString = function () {
    return 'OperatorGreater';
  };
  protoOf(OperatorGreater).hashCode = function () {
    return 780948118;
  };
  protoOf(OperatorGreater).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OperatorGreater))
      return false;
    other instanceof OperatorGreater || THROW_CCE();
    return true;
  };
  var OperatorGreater_instance;
  function OperatorGreater_getInstance() {
    if (OperatorGreater_instance == null)
      new OperatorGreater();
    return OperatorGreater_instance;
  }
  function OperatorLessEquals() {
    OperatorLessEquals_instance = this;
    Operator.call(this);
  }
  protoOf(OperatorLessEquals).nb = function (left, right) {
    var tmp;
    if (isNumber(left)) {
      tmp = isNumber(right);
    } else {
      tmp = false;
    }
    if (tmp)
      return numberToDouble(left) <= numberToDouble(right);
    return null;
  };
  protoOf(OperatorLessEquals).toString = function () {
    return 'OperatorLessEquals';
  };
  protoOf(OperatorLessEquals).hashCode = function () {
    return 812448412;
  };
  protoOf(OperatorLessEquals).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OperatorLessEquals))
      return false;
    other instanceof OperatorLessEquals || THROW_CCE();
    return true;
  };
  var OperatorLessEquals_instance;
  function OperatorLessEquals_getInstance() {
    if (OperatorLessEquals_instance == null)
      new OperatorLessEquals();
    return OperatorLessEquals_instance;
  }
  function OperatorGreaterEquals() {
    OperatorGreaterEquals_instance = this;
    Operator.call(this);
  }
  protoOf(OperatorGreaterEquals).nb = function (left, right) {
    var tmp;
    if (isNumber(left)) {
      tmp = isNumber(right);
    } else {
      tmp = false;
    }
    if (tmp)
      return numberToDouble(left) >= numberToDouble(right);
    return null;
  };
  protoOf(OperatorGreaterEquals).toString = function () {
    return 'OperatorGreaterEquals';
  };
  protoOf(OperatorGreaterEquals).hashCode = function () {
    return 1335555573;
  };
  protoOf(OperatorGreaterEquals).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OperatorGreaterEquals))
      return false;
    other instanceof OperatorGreaterEquals || THROW_CCE();
    return true;
  };
  var OperatorGreaterEquals_instance;
  function OperatorGreaterEquals_getInstance() {
    if (OperatorGreaterEquals_instance == null)
      new OperatorGreaterEquals();
    return OperatorGreaterEquals_instance;
  }
  function OperatorOr() {
    OperatorOr_instance = this;
    Operator.call(this);
  }
  protoOf(OperatorOr).nb = function (left, right) {
    return jsBool(left) || jsBool(right);
  };
  protoOf(OperatorOr).toString = function () {
    return 'OperatorOr';
  };
  protoOf(OperatorOr).hashCode = function () {
    return 1997829575;
  };
  protoOf(OperatorOr).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OperatorOr))
      return false;
    other instanceof OperatorOr || THROW_CCE();
    return true;
  };
  var OperatorOr_instance;
  function OperatorOr_getInstance() {
    if (OperatorOr_instance == null)
      new OperatorOr();
    return OperatorOr_instance;
  }
  function OperatorAnd() {
    OperatorAnd_instance = this;
    Operator.call(this);
  }
  protoOf(OperatorAnd).nb = function (left, right) {
    return jsBool(left) && jsBool(right);
  };
  protoOf(OperatorAnd).toString = function () {
    return 'OperatorAnd';
  };
  protoOf(OperatorAnd).hashCode = function () {
    return 1803161203;
  };
  protoOf(OperatorAnd).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OperatorAnd))
      return false;
    other instanceof OperatorAnd || THROW_CCE();
    return true;
  };
  var OperatorAnd_instance;
  function OperatorAnd_getInstance() {
    if (OperatorAnd_instance == null)
      new OperatorAnd();
    return OperatorAnd_instance;
  }
  function Assign() {
    Assign_instance = this;
    KlexToken.call(this);
  }
  protoOf(Assign).toString = function () {
    return 'Assign';
  };
  protoOf(Assign).hashCode = function () {
    return 1970629903;
  };
  protoOf(Assign).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Assign))
      return false;
    other instanceof Assign || THROW_CCE();
    return true;
  };
  var Assign_instance;
  function Assign_getInstance() {
    if (Assign_instance == null)
      new Assign();
    return Assign_instance;
  }
  function ValLiteralToken(content, colorHex) {
    colorHex = colorHex === VOID ? null : colorHex;
    ValToken.call(this, colorHex);
    this.za_1 = content;
  }
  protoOf(ValLiteralToken).ab = function () {
    return this.za_1;
  };
  function StringToken(content) {
    ValLiteralToken.call(this, content, '#00FF00');
    this.bc_1 = content;
  }
  protoOf(StringToken).ab = function () {
    return this.bc_1;
  };
  protoOf(StringToken).toString = function () {
    return 'StringToken(content=' + this.bc_1 + ')';
  };
  protoOf(StringToken).hashCode = function () {
    return getStringHashCode(this.bc_1);
  };
  protoOf(StringToken).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StringToken))
      return false;
    var tmp0_other_with_cast = other instanceof StringToken ? other : THROW_CCE();
    if (!(this.bc_1 === tmp0_other_with_cast.bc_1))
      return false;
    return true;
  };
  function NumberToken(content) {
    ValLiteralToken.call(this, content);
    this.ec_1 = content;
  }
  protoOf(NumberToken).ab = function () {
    return this.ec_1;
  };
  protoOf(NumberToken).toString = function () {
    return 'NumberToken(content=' + toString_0(this.ec_1) + ')';
  };
  protoOf(NumberToken).hashCode = function () {
    return hashCode(this.ec_1);
  };
  protoOf(NumberToken).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NumberToken))
      return false;
    var tmp0_other_with_cast = other instanceof NumberToken ? other : THROW_CCE();
    if (!equals(this.ec_1, tmp0_other_with_cast.ec_1))
      return false;
    return true;
  };
  function BoolToken(content) {
    ValLiteralToken.call(this, content, '#FE9900');
    this.hc_1 = content;
  }
  protoOf(BoolToken).ab = function () {
    return this.hc_1;
  };
  protoOf(BoolToken).toString = function () {
    return 'BoolToken(content=' + this.hc_1 + ')';
  };
  protoOf(BoolToken).hashCode = function () {
    return getBooleanHashCode(this.hc_1);
  };
  protoOf(BoolToken).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BoolToken))
      return false;
    var tmp0_other_with_cast = other instanceof BoolToken ? other : THROW_CCE();
    if (!(this.hc_1 === tmp0_other_with_cast.hc_1))
      return false;
    return true;
  };
  function NullToken() {
    NullToken_instance = this;
    ValLiteralToken.call(this, null, '#FE9900');
  }
  protoOf(NullToken).toString = function () {
    return 'NullToken';
  };
  protoOf(NullToken).hashCode = function () {
    return -1258061678;
  };
  protoOf(NullToken).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NullToken))
      return false;
    other instanceof NullToken || THROW_CCE();
    return true;
  };
  var NullToken_instance;
  function NullToken_getInstance() {
    if (NullToken_instance == null)
      new NullToken();
    return NullToken_instance;
  }
  function OpenParentheses() {
    OpenParentheses_instance = this;
    KlexToken.call(this);
  }
  protoOf(OpenParentheses).toString = function () {
    return 'OpenParentheses';
  };
  protoOf(OpenParentheses).hashCode = function () {
    return -1809233136;
  };
  protoOf(OpenParentheses).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OpenParentheses))
      return false;
    other instanceof OpenParentheses || THROW_CCE();
    return true;
  };
  var OpenParentheses_instance;
  function OpenParentheses_getInstance() {
    if (OpenParentheses_instance == null)
      new OpenParentheses();
    return OpenParentheses_instance;
  }
  function CloseParentheses() {
    CloseParentheses_instance = this;
    KlexToken.call(this);
  }
  protoOf(CloseParentheses).toString = function () {
    return 'CloseParentheses';
  };
  protoOf(CloseParentheses).hashCode = function () {
    return -1354815774;
  };
  protoOf(CloseParentheses).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CloseParentheses))
      return false;
    other instanceof CloseParentheses || THROW_CCE();
    return true;
  };
  var CloseParentheses_instance;
  function CloseParentheses_getInstance() {
    if (CloseParentheses_instance == null)
      new CloseParentheses();
    return CloseParentheses_instance;
  }
  function OpenCurly() {
    OpenCurly_instance = this;
    KlexToken.call(this);
  }
  protoOf(OpenCurly).toString = function () {
    return 'OpenCurly';
  };
  protoOf(OpenCurly).hashCode = function () {
    return -770480253;
  };
  protoOf(OpenCurly).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OpenCurly))
      return false;
    other instanceof OpenCurly || THROW_CCE();
    return true;
  };
  var OpenCurly_instance;
  function OpenCurly_getInstance() {
    if (OpenCurly_instance == null)
      new OpenCurly();
    return OpenCurly_instance;
  }
  function CloseCurly() {
    CloseCurly_instance = this;
    KlexToken.call(this);
  }
  protoOf(CloseCurly).toString = function () {
    return 'CloseCurly';
  };
  protoOf(CloseCurly).hashCode = function () {
    return -93910827;
  };
  protoOf(CloseCurly).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CloseCurly))
      return false;
    other instanceof CloseCurly || THROW_CCE();
    return true;
  };
  var CloseCurly_instance;
  function CloseCurly_getInstance() {
    if (CloseCurly_instance == null)
      new CloseCurly();
    return CloseCurly_instance;
  }
  function CommaSep() {
    CommaSep_instance = this;
    KlexToken.call(this);
  }
  protoOf(CommaSep).toString = function () {
    return 'CommaSep';
  };
  protoOf(CommaSep).hashCode = function () {
    return -537917079;
  };
  protoOf(CommaSep).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CommaSep))
      return false;
    other instanceof CommaSep || THROW_CCE();
    return true;
  };
  var CommaSep_instance;
  function CommaSep_getInstance() {
    if (CommaSep_instance == null)
      new CommaSep();
    return CommaSep_instance;
  }
  function Negate() {
    Negate_instance = this;
    KlexToken.call(this);
  }
  protoOf(Negate).toString = function () {
    return 'Negate';
  };
  protoOf(Negate).hashCode = function () {
    return -1965452510;
  };
  protoOf(Negate).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Negate))
      return false;
    other instanceof Negate || THROW_CCE();
    return true;
  };
  var Negate_instance;
  function Negate_getInstance() {
    if (Negate_instance == null)
      new Negate();
    return Negate_instance;
  }
  function Comment(closed) {
    KlexToken.call(this, '#AAA');
    this.jc_1 = closed;
  }
  protoOf(Comment).toString = function () {
    return 'Comment(closed=' + this.jc_1 + ')';
  };
  protoOf(Comment).hashCode = function () {
    return getBooleanHashCode(this.jc_1);
  };
  protoOf(Comment).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Comment))
      return false;
    var tmp0_other_with_cast = other instanceof Comment ? other : THROW_CCE();
    if (!(this.jc_1 === tmp0_other_with_cast.jc_1))
      return false;
    return true;
  };
  function Unknown() {
    Unknown_instance = this;
    KlexToken.call(this, '#F00');
  }
  protoOf(Unknown).toString = function () {
    return 'Unknown';
  };
  protoOf(Unknown).hashCode = function () {
    return 1379812394;
  };
  protoOf(Unknown).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Unknown))
      return false;
    other instanceof Unknown || THROW_CCE();
    return true;
  };
  var Unknown_instance;
  function Unknown_getInstance() {
    if (Unknown_instance == null)
      new Unknown();
    return Unknown_instance;
  }
  var properties_initialized_KlexToken_kt_9yydnv;
  function _init_properties_KlexToken_kt__cdq1w3() {
    if (!properties_initialized_KlexToken_kt_9yydnv) {
      properties_initialized_KlexToken_kt_9yydnv = true;
      keywords = listOf(['function', 'return', 'if', 'else']);
    }
  }
  function KlexLangToken() {
  }
  function CodeScope(statements) {
    Statement.call(this);
    this.kc_1 = statements;
  }
  protoOf(CodeScope).toString = function () {
    return 'CodeScope(statements=' + toString_0(this.kc_1) + ')';
  };
  protoOf(CodeScope).hashCode = function () {
    return hashCode(this.kc_1);
  };
  protoOf(CodeScope).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CodeScope))
      return false;
    var tmp0_other_with_cast = other instanceof CodeScope ? other : THROW_CCE();
    if (!equals(this.kc_1, tmp0_other_with_cast.kc_1))
      return false;
    return true;
  };
  function Statement() {
    KlexLangToken.call(this);
  }
  function Return(value) {
    Statement.call(this);
    this.lc_1 = value;
  }
  protoOf(Return).toString = function () {
    return 'Return(value=' + toString_0(this.lc_1) + ')';
  };
  protoOf(Return).hashCode = function () {
    return hashCode(this.lc_1);
  };
  protoOf(Return).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Return))
      return false;
    var tmp0_other_with_cast = other instanceof Return ? other : THROW_CCE();
    if (!equals(this.lc_1, tmp0_other_with_cast.lc_1))
      return false;
    return true;
  };
  function Assignment(target, value) {
    Statement.call(this);
    this.mc_1 = target;
    this.nc_1 = value;
  }
  protoOf(Assignment).toString = function () {
    return 'Assignment(target=' + this.mc_1 + ', value=' + toString_0(this.nc_1) + ')';
  };
  protoOf(Assignment).hashCode = function () {
    var result = getStringHashCode(this.mc_1);
    result = imul(result, 31) + hashCode(this.nc_1) | 0;
    return result;
  };
  protoOf(Assignment).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Assignment))
      return false;
    var tmp0_other_with_cast = other instanceof Assignment ? other : THROW_CCE();
    if (!(this.mc_1 === tmp0_other_with_cast.mc_1))
      return false;
    if (!equals(this.nc_1, tmp0_other_with_cast.nc_1))
      return false;
    return true;
  };
  function Expression() {
    Statement.call(this);
  }
  function Function(params, code) {
    Expression.call(this);
    this.oc_1 = params;
    this.pc_1 = code;
  }
  protoOf(Function).toString = function () {
    return 'Function(params=' + toString_0(this.oc_1) + ', code=' + toString_0(this.pc_1) + ')';
  };
  protoOf(Function).hashCode = function () {
    var result = hashCode(this.oc_1);
    result = imul(result, 31) + hashCode(this.pc_1) | 0;
    return result;
  };
  protoOf(Function).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Function))
      return false;
    var tmp0_other_with_cast = other instanceof Function ? other : THROW_CCE();
    if (!equals(this.oc_1, tmp0_other_with_cast.oc_1))
      return false;
    if (!equals(this.pc_1, tmp0_other_with_cast.pc_1))
      return false;
    return true;
  };
  function Invoke(function_0, params) {
    Expression.call(this);
    this.qc_1 = function_0;
    this.rc_1 = params;
  }
  protoOf(Invoke).toString = function () {
    return 'Invoke(function=' + toString_0(this.qc_1) + ', params=' + toString_0(this.rc_1) + ')';
  };
  protoOf(Invoke).hashCode = function () {
    var result = hashCode(this.qc_1);
    result = imul(result, 31) + hashCode(this.rc_1) | 0;
    return result;
  };
  protoOf(Invoke).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Invoke))
      return false;
    var tmp0_other_with_cast = other instanceof Invoke ? other : THROW_CCE();
    if (!equals(this.qc_1, tmp0_other_with_cast.qc_1))
      return false;
    if (!equals(this.rc_1, tmp0_other_with_cast.rc_1))
      return false;
    return true;
  };
  function If(cond, scope, elseScope) {
    Statement.call(this);
    this.sc_1 = cond;
    this.tc_1 = scope;
    this.uc_1 = elseScope;
  }
  protoOf(If).toString = function () {
    return 'If(cond=' + toString_0(this.sc_1) + ', scope=' + toString_0(this.tc_1) + ', elseScope=' + toString(this.uc_1) + ')';
  };
  protoOf(If).hashCode = function () {
    var result = hashCode(this.sc_1);
    result = imul(result, 31) + hashCode(this.tc_1) | 0;
    result = imul(result, 31) + (this.uc_1 == null ? 0 : hashCode(this.uc_1)) | 0;
    return result;
  };
  protoOf(If).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof If))
      return false;
    var tmp0_other_with_cast = other instanceof If ? other : THROW_CCE();
    if (!equals(this.sc_1, tmp0_other_with_cast.sc_1))
      return false;
    if (!equals(this.tc_1, tmp0_other_with_cast.tc_1))
      return false;
    if (!equals(this.uc_1, tmp0_other_with_cast.uc_1))
      return false;
    return true;
  };
  function OperatorExpr(left, right, operator) {
    Expression.call(this);
    this.vc_1 = left;
    this.wc_1 = right;
    this.xc_1 = operator;
  }
  protoOf(OperatorExpr).toString = function () {
    return 'OperatorExpr(left=' + toString_0(this.vc_1) + ', right=' + toString_0(this.wc_1) + ', operator=' + toString_0(this.xc_1) + ')';
  };
  protoOf(OperatorExpr).hashCode = function () {
    var result = hashCode(this.vc_1);
    result = imul(result, 31) + hashCode(this.wc_1) | 0;
    result = imul(result, 31) + hashCode(this.xc_1) | 0;
    return result;
  };
  protoOf(OperatorExpr).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OperatorExpr))
      return false;
    var tmp0_other_with_cast = other instanceof OperatorExpr ? other : THROW_CCE();
    if (!equals(this.vc_1, tmp0_other_with_cast.vc_1))
      return false;
    if (!equals(this.wc_1, tmp0_other_with_cast.wc_1))
      return false;
    if (!equals(this.xc_1, tmp0_other_with_cast.xc_1))
      return false;
    return true;
  };
  function NegateExpr(value) {
    Expression.call(this);
    this.yc_1 = value;
  }
  protoOf(NegateExpr).toString = function () {
    return 'NegateExpr(value=' + toString_0(this.yc_1) + ')';
  };
  protoOf(NegateExpr).hashCode = function () {
    return hashCode(this.yc_1);
  };
  protoOf(NegateExpr).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NegateExpr))
      return false;
    var tmp0_other_with_cast = other instanceof NegateExpr ? other : THROW_CCE();
    if (!equals(this.yc_1, tmp0_other_with_cast.yc_1))
      return false;
    return true;
  };
  function ValueExpr() {
    Expression.call(this);
  }
  function LiteralExpr(value) {
    ValueExpr.call(this);
    this.zc_1 = value;
  }
  protoOf(LiteralExpr).toString = function () {
    return 'LiteralExpr(value=' + toString(this.zc_1) + ')';
  };
  protoOf(LiteralExpr).hashCode = function () {
    return this.zc_1 == null ? 0 : hashCode(this.zc_1);
  };
  protoOf(LiteralExpr).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LiteralExpr))
      return false;
    var tmp0_other_with_cast = other instanceof LiteralExpr ? other : THROW_CCE();
    if (!equals(this.zc_1, tmp0_other_with_cast.zc_1))
      return false;
    return true;
  };
  function IdentifierExpr(identifier) {
    ValueExpr.call(this);
    this.bb_1 = identifier;
  }
  protoOf(IdentifierExpr).toString = function () {
    return 'IdentifierExpr(identifier=' + this.bb_1 + ')';
  };
  protoOf(IdentifierExpr).hashCode = function () {
    return getStringHashCode(this.bb_1);
  };
  protoOf(IdentifierExpr).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof IdentifierExpr))
      return false;
    var tmp0_other_with_cast = other instanceof IdentifierExpr ? other : THROW_CCE();
    if (!(this.bb_1 === tmp0_other_with_cast.bb_1))
      return false;
    return true;
  };
  function GroupExpr(expression) {
    Expression.call(this);
    this.ad_1 = expression;
  }
  protoOf(GroupExpr).toString = function () {
    return 'GroupExpr(expression=' + toString_0(this.ad_1) + ')';
  };
  protoOf(GroupExpr).hashCode = function () {
    return hashCode(this.ad_1);
  };
  protoOf(GroupExpr).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GroupExpr))
      return false;
    var tmp0_other_with_cast = other instanceof GroupExpr ? other : THROW_CCE();
    if (!equals(this.ad_1, tmp0_other_with_cast.ad_1))
      return false;
    return true;
  };
  function CallableFunction() {
  }
  function NativeFunction(onInvoke) {
    CallableFunction.call(this);
    this.bd_1 = onInvoke;
  }
  function NativeFunctionVoid$_init_$lambda_hvf16g($onInvoke) {
    return function (_this__u8e3s4, it) {
      $onInvoke(_this__u8e3s4, it);
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(NoReturn_instance);
      return new Result(tmp$ret$0);
    };
  }
  function NativeFunctionVoid(onInvoke) {
    NativeFunction.call(this, NativeFunctionVoid$_init_$lambda_hvf16g(onInvoke));
  }
  function StatementFunction(scope, varNames, code) {
    CallableFunction.call(this);
    this.cd_1 = scope;
    this.dd_1 = varNames;
    this.ed_1 = code;
  }
  function KlexVariableLookupTable() {
    var tmp = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp.fd_1 = HashMap_init_$Create$();
  }
  protoOf(KlexVariableLookupTable).gd = function (identifier) {
    if (!this.fd_1.v2().b1(identifier)) {
      // Inline function 'kotlin.Companion.failure' call
      var exception = NoSuchElementException_init_$Create$();
      return _Result___init__impl__xyqfz8(createFailure(exception));
    }
    // Inline function 'kotlin.Companion.success' call
    var value = this.fd_1.g1(identifier);
    return _Result___init__impl__xyqfz8(value);
  };
  protoOf(KlexVariableLookupTable).hd = function (identifier, value) {
    // Inline function 'kotlin.collections.set' call
    this.fd_1.w2(identifier, value);
  };
  protoOf(KlexVariableLookupTable).id = function (identifier) {
    return this.gd(identifier);
  };
  function NoReturn() {
  }
  protoOf(NoReturn).toString = function () {
    return 'NoReturn';
  };
  protoOf(NoReturn).hashCode = function () {
    return -1115635938;
  };
  protoOf(NoReturn).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NoReturn))
      return false;
    other instanceof NoReturn || THROW_CCE();
    return true;
  };
  var NoReturn_instance;
  function NoReturn_getInstance() {
    return NoReturn_instance;
  }
  function KlexExecutionContext(parent, functionScope) {
    functionScope = functionScope === VOID ? false : functionScope;
    KlexVariableLookupTable.call(this);
    this.hb_1 = parent;
    this.ib_1 = functionScope;
  }
  protoOf(KlexExecutionContext).jd = function () {
    // Inline function 'kotlin.also' call
    var this_0 = toMutableList(this.fd_1.v2());
    // Inline function 'execution.KlexExecutionContext.getAllCurrentContextVariables.<anonymous>' call
    var tmp;
    var tmp_0 = this.hb_1;
    if (tmp_0 instanceof KlexExecutionContext) {
      tmp = this.hb_1.jd();
    } else {
      tmp = this.hb_1.fd_1.v2();
    }
    this_0.a2(tmp);
    return this_0;
  };
  protoOf(KlexExecutionContext).id = function (identifier) {
    // Inline function 'kotlin.getOrElse' call
    var this_0 = protoOf(KlexVariableLookupTable).gd.call(this, identifier);
    var exception = Result__exceptionOrNull_impl_p6xea9(this_0);
    var tmp;
    if (exception == null) {
      var tmp_0 = _Result___get_value__impl__bjfvqg(this_0);
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      return this.hb_1.id(identifier);
    }
    // Inline function 'kotlin.Companion.success' call
    var value = tmp;
    return _Result___init__impl__xyqfz8(value);
  };
  protoOf(KlexExecutionContext).kd = function (identifier, value) {
    var parent = this;
    $l$loop: while (!(parent == null) && !_Result___get_isSuccess__impl__sndoy8(parent.gd(identifier))) {
      var tmp;
      if (parent instanceof KlexExecutionContext) {
        tmp = parent.hb_1;
      } else {
        tmp = null;
      }
      parent = tmp;
    }
    var tmp0_elvis_lhs = parent;
    var target = tmp0_elvis_lhs == null ? this : tmp0_elvis_lhs;
    target.hd(identifier, value);
  };
  protoOf(KlexExecutionContext).jb = function (statement) {
    if (statement instanceof Assignment) {
      // Inline function 'kotlin.getOrElse' call
      var this_0 = this.ld(statement.nc_1);
      var exception = Result__exceptionOrNull_impl_p6xea9(this_0);
      var tmp;
      if (exception == null) {
        var tmp_0 = _Result___get_value__impl__bjfvqg(this_0);
        tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      } else {
        // Inline function 'kotlin.Companion.failure' call
        return _Result___init__impl__xyqfz8(createFailure(exception));
      }
      var tmp$ret$1 = tmp;
      this.kd(statement.mc_1, tmp$ret$1);
      // Inline function 'kotlin.Companion.success' call
      return _Result___init__impl__xyqfz8(NoReturn_instance);
    } else {
      if (statement instanceof Expression) {
        // Inline function 'kotlin.getOrElse' call
        var this_1 = this.ld(statement);
        var exception_0 = Result__exceptionOrNull_impl_p6xea9(this_1);
        var tmp_1;
        if (exception_0 == null) {
          var tmp_2 = _Result___get_value__impl__bjfvqg(this_1);
          tmp_1 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        } else {
          // Inline function 'kotlin.Companion.failure' call
          return _Result___init__impl__xyqfz8(createFailure(exception_0));
        }
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.Companion.success' call
        return _Result___init__impl__xyqfz8(NoReturn_instance);
      } else {
        if (statement instanceof CodeScope) {
          // Inline function 'kotlin.let' call
          // Inline function 'execution.KlexExecutionContext.execute.<anonymous>' call
          var it = new KlexExecutionContext(this);
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s = statement.kc_1.e();
          while (_iterator__ex2g4s.f()) {
            var element = _iterator__ex2g4s.g();
            // Inline function 'execution.KlexExecutionContext.execute.<anonymous>.<anonymous>' call
            // Inline function 'kotlin.getOrElse' call
            var this_2 = it.jb(element);
            var exception_1 = Result__exceptionOrNull_impl_p6xea9(this_2);
            var tmp_3;
            if (exception_1 == null) {
              var tmp_4 = _Result___get_value__impl__bjfvqg(this_2);
              tmp_3 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
            } else {
              // Inline function 'kotlin.Companion.failure' call
              return _Result___init__impl__xyqfz8(createFailure(exception_1));
            }
            // Inline function 'kotlin.also' call
            var this_3 = tmp_3;
            // Inline function 'execution.KlexExecutionContext.execute.<anonymous>.<anonymous>.<anonymous>' call
            if (!(this_3 instanceof NoReturn)) {
              // Inline function 'kotlin.Companion.success' call
              return _Result___init__impl__xyqfz8(this_3);
            }
          }
          // Inline function 'kotlin.Companion.success' call
          return _Result___init__impl__xyqfz8(NoReturn_instance);
        } else {
          if (statement instanceof If) {
            // Inline function 'kotlin.getOrElse' call
            var this_4 = this.ld(statement.sc_1);
            var exception_2 = Result__exceptionOrNull_impl_p6xea9(this_4);
            var tmp_5;
            if (exception_2 == null) {
              var tmp_6 = _Result___get_value__impl__bjfvqg(this_4);
              tmp_5 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
            } else {
              // Inline function 'kotlin.Companion.failure' call
              return _Result___init__impl__xyqfz8(createFailure(exception_2));
            }
            var tmp1_elvis_lhs = tmp_5;
            if (!equals(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs, false)) {
              // Inline function 'kotlin.getOrElse' call
              var this_5 = this.jb(statement.tc_1);
              var exception_3 = Result__exceptionOrNull_impl_p6xea9(this_5);
              var tmp_7;
              if (exception_3 == null) {
                var tmp_8 = _Result___get_value__impl__bjfvqg(this_5);
                tmp_7 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
              } else {
                // Inline function 'kotlin.Companion.failure' call
                return _Result___init__impl__xyqfz8(createFailure(exception_3));
              }
            } else {
              var tmp2_safe_receiver = statement.uc_1;
              if (tmp2_safe_receiver == null)
                null;
              else {
                // Inline function 'kotlin.let' call
                // Inline function 'execution.KlexExecutionContext.execute.<anonymous>' call
                // Inline function 'kotlin.getOrElse' call
                var this_6 = this.jb(tmp2_safe_receiver);
                var exception_4 = Result__exceptionOrNull_impl_p6xea9(this_6);
                var tmp_9;
                if (exception_4 == null) {
                  var tmp_10 = _Result___get_value__impl__bjfvqg(this_6);
                  tmp_9 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
                } else {
                  // Inline function 'kotlin.Companion.failure' call
                  return _Result___init__impl__xyqfz8(createFailure(exception_4));
                }
              }
            }
            // Inline function 'kotlin.Companion.success' call
            return _Result___init__impl__xyqfz8(NoReturn_instance);
          } else {
            if (statement instanceof Return) {
              // Inline function 'kotlin.getOrElse' call
              var this_7 = this.ld(statement.lc_1);
              var exception_5 = Result__exceptionOrNull_impl_p6xea9(this_7);
              var tmp_11;
              if (exception_5 == null) {
                var tmp_12 = _Result___get_value__impl__bjfvqg(this_7);
                tmp_11 = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
              } else {
                // Inline function 'kotlin.Companion.failure' call
                return _Result___init__impl__xyqfz8(createFailure(exception_5));
              }
              // Inline function 'kotlin.Companion.success' call
              var value = tmp_11;
              return _Result___init__impl__xyqfz8(value);
            } else {
              noWhenBranchMatchedException();
            }
          }
        }
      }
    }
  };
  protoOf(KlexExecutionContext).ld = function (expr) {
    var tmp;
    if (expr instanceof GroupExpr) {
      // Inline function 'kotlin.getOrElse' call
      var this_0 = this.ld(expr.ad_1);
      var exception = Result__exceptionOrNull_impl_p6xea9(this_0);
      var tmp_0;
      if (exception == null) {
        var tmp_1 = _Result___get_value__impl__bjfvqg(this_0);
        tmp_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      } else {
        // Inline function 'kotlin.Companion.failure' call
        return _Result___init__impl__xyqfz8(createFailure(exception));
      }
      // Inline function 'kotlin.Companion.success' call
      var value = tmp_0;
      tmp = _Result___init__impl__xyqfz8(value);
    } else {
      if (expr instanceof Function) {
        // Inline function 'kotlin.Companion.success' call
        var value_0 = new StatementFunction(this, expr.oc_1, expr.pc_1);
        tmp = _Result___init__impl__xyqfz8(value_0);
      } else {
        if (expr instanceof Invoke) {
          // Inline function 'kotlin.getOrElse' call
          var this_1 = this.ld(expr.qc_1);
          var exception_0 = Result__exceptionOrNull_impl_p6xea9(this_1);
          var tmp_2;
          if (exception_0 == null) {
            var tmp_3 = _Result___get_value__impl__bjfvqg(this_1);
            tmp_2 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
          } else {
            // Inline function 'kotlin.Companion.failure' call
            return _Result___init__impl__xyqfz8(createFailure(exception_0));
          }
          var target = tmp_2;
          if (target instanceof CallableFunction) {
            // Inline function 'kotlin.collections.map' call
            var this_2 = expr.rc_1;
            // Inline function 'kotlin.collections.mapTo' call
            var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_2, 10));
            var _iterator__ex2g4s = this_2.e();
            while (_iterator__ex2g4s.f()) {
              var item = _iterator__ex2g4s.g();
              // Inline function 'execution.KlexExecutionContext.executeExpression.<anonymous>' call
              // Inline function 'kotlin.getOrElse' call
              var this_3 = this.ld(item);
              var exception_1 = Result__exceptionOrNull_impl_p6xea9(this_3);
              var tmp_4;
              if (exception_1 == null) {
                var tmp_5 = _Result___get_value__impl__bjfvqg(this_3);
                tmp_4 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
              } else {
                // Inline function 'kotlin.Companion.failure' call
                return _Result___init__impl__xyqfz8(createFailure(exception_1));
              }
              var tmp$ret$8 = tmp_4;
              destination.o(tmp$ret$8);
            }
            var params = destination;
            if (target instanceof NativeFunction) {
              return target.bd_1(this, params).o7_1;
            }
            if (target instanceof StatementFunction) {
              if (params.h() > target.dd_1.h()) {
                // Inline function 'kotlin.Companion.failure' call
                var exception_2 = RuntimeException_init_$Create$('Attempted to invoke target function but too many variables were given.');
                return _Result___init__impl__xyqfz8(createFailure(exception_2));
              }
              // Inline function 'kotlin.also' call
              var this_4 = new KlexExecutionContext(target.cd_1, true);
              // Inline function 'execution.KlexExecutionContext.executeExpression.<anonymous>' call
              // Inline function 'kotlin.collections.forEachIndexed' call
              var index = 0;
              var _iterator__ex2g4s_0 = params.e();
              while (_iterator__ex2g4s_0.f()) {
                var item_0 = _iterator__ex2g4s_0.g();
                var _unary__edvuaz = index;
                index = _unary__edvuaz + 1 | 0;
                // Inline function 'execution.KlexExecutionContext.executeExpression.<anonymous>.<anonymous>' call
                var i = checkIndexOverflow(_unary__edvuaz);
                this_4.hd(target.dd_1.i(i), item_0);
              }
              // Inline function 'kotlin.getOrElse' call
              var this_5 = this_4.jb(target.ed_1);
              var exception_3 = Result__exceptionOrNull_impl_p6xea9(this_5);
              var tmp_6;
              if (exception_3 == null) {
                var tmp_7 = _Result___get_value__impl__bjfvqg(this_5);
                tmp_6 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
              } else {
                // Inline function 'kotlin.Companion.failure' call
                return _Result___init__impl__xyqfz8(createFailure(exception_3));
              }
              var result = tmp_6;
              var tmp_8;
              if (result instanceof NoReturn) {
                tmp_8 = null;
              } else {
                tmp_8 = result;
              }
              // Inline function 'kotlin.Companion.success' call
              var value_1 = tmp_8;
              return _Result___init__impl__xyqfz8(value_1);
            }
          }
          // Inline function 'kotlin.Companion.failure' call
          var exception_4 = RuntimeException_init_$Create$('Value ' + toString(target) + ' is not a function.');
          tmp = _Result___init__impl__xyqfz8(createFailure(exception_4));
        } else {
          if (expr instanceof NegateExpr) {
            // Inline function 'kotlin.getOrElse' call
            var this_6 = this.ld(expr.yc_1);
            var exception_5 = Result__exceptionOrNull_impl_p6xea9(this_6);
            var tmp_9;
            if (exception_5 == null) {
              var tmp_10 = _Result___get_value__impl__bjfvqg(this_6);
              tmp_9 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
            } else {
              // Inline function 'kotlin.Companion.failure' call
              return _Result___init__impl__xyqfz8(createFailure(exception_5));
            }
            var tmp$ret$18 = tmp_9;
            // Inline function 'kotlin.Companion.success' call
            var value_2 = !jsBool(tmp$ret$18);
            tmp = _Result___init__impl__xyqfz8(value_2);
          } else {
            if (expr instanceof OperatorExpr) {
              // Inline function 'kotlin.getOrElse' call
              var this_7 = this.ld(expr.vc_1);
              var exception_6 = Result__exceptionOrNull_impl_p6xea9(this_7);
              var tmp_11;
              if (exception_6 == null) {
                var tmp_12 = _Result___get_value__impl__bjfvqg(this_7);
                tmp_11 = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
              } else {
                // Inline function 'kotlin.Companion.failure' call
                return _Result___init__impl__xyqfz8(createFailure(exception_6));
              }
              var tmp_13 = tmp_11;
              // Inline function 'kotlin.getOrElse' call
              var this_8 = this.ld(expr.wc_1);
              var exception_7 = Result__exceptionOrNull_impl_p6xea9(this_8);
              var tmp_14;
              if (exception_7 == null) {
                var tmp_15 = _Result___get_value__impl__bjfvqg(this_8);
                tmp_14 = (tmp_15 == null ? true : !(tmp_15 == null)) ? tmp_15 : THROW_CCE();
              } else {
                // Inline function 'kotlin.Companion.failure' call
                return _Result___init__impl__xyqfz8(createFailure(exception_7));
              }
              var tmp$ret$23 = tmp_14;
              var tmp1_elvis_lhs = expr.xc_1.nb(tmp_13, tmp$ret$23);
              var tmp_16;
              if (tmp1_elvis_lhs == null) {
                // Inline function 'kotlin.Companion.failure' call
                var exception_8 = RuntimeException_init_$Create$('Operator ' + expr.toString() + ' not implemented for types.');
                return _Result___init__impl__xyqfz8(createFailure(exception_8));
              } else {
                tmp_16 = tmp1_elvis_lhs;
              }
              // Inline function 'kotlin.Companion.success' call
              var value_3 = tmp_16;
              tmp = _Result___init__impl__xyqfz8(value_3);
            } else {
              if (expr instanceof IdentifierExpr) {
                tmp = this.id(expr.bb_1);
              } else {
                if (expr instanceof LiteralExpr) {
                  // Inline function 'kotlin.Companion.success' call
                  var value_4 = expr.zc_1;
                  tmp = _Result___init__impl__xyqfz8(value_4);
                } else {
                  noWhenBranchMatchedException();
                }
              }
            }
          }
        }
      }
    }
    return tmp;
  };
  function main() {
    var tmp = document;
    tmp.addEventListener('jsReadySignal', main$lambda);
  }
  function executeCode(code) {
    var tmp = KlexLang_getInstance();
    // Inline function 'kotlin.getOrElse' call
    var this_0 = tmp.fb(code, executeCode$lambda);
    var exception = Result__exceptionOrNull_impl_p6xea9(this_0);
    var tmp_0;
    if (exception == null) {
      var tmp_1 = _Result___get_value__impl__bjfvqg(this_0);
      tmp_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      printStackTrace(exception);
      tmp_0 = Unit_instance;
    }
  }
  function createTextEdit() {
    // Inline function 'kotlin.apply' call
    var this_0 = document.createElement('div');
    // Inline function 'createTextEdit.<anonymous>' call
    this_0.classList.add('fullwindow', 'large');
    // Inline function 'kotlin.apply' call
    var this_1 = document.createElement('pre');
    // Inline function 'createTextEdit.<anonymous>.<anonymous>' call
    this_1.classList.add('editor-shared', 'fullsize', 'no-margin', 'no-event');
    var displayBox = this_1;
    var tmp = document.createElement('textarea');
    // Inline function 'kotlin.apply' call
    var this_2 = tmp instanceof HTMLTextAreaElement ? tmp : THROW_CCE();
    // Inline function 'createTextEdit.<anonymous>.<anonymous>' call
    this_2.classList.add('editor-shared', 'fullsize', 'no-margin', 'invisible');
    this_2.addEventListener('input', createTextEdit$lambda(this_2, displayBox));
    this_2.value = '// Press ctrl + enter to execute, check javascript console for results\n// To simplify, this language doesn\'t care about the order of operations in math, except for parentheses.\n// Actual order (if not manually enforced through parentheses) will likely be from right to left\n\ngreet = function(value) { // Functions are defined like variables\n return "Hello " + value + "!"\n}\n\nname = "world"\n\nprint(greet(name))';
    this_2.dispatchEvent(new Event('input'));
    this_2.addEventListener('scroll', createTextEdit$lambda_0(displayBox, this_2));
    this_2.addEventListener('keydown', createTextEdit$lambda_1(this_2));
    var inputBox = this_2;
    this_0.appendChild(displayBox);
    this_0.appendChild(inputBox);
    return this_0;
  }
  function getSyntaxColors(input) {
    // Inline function 'kotlin.getOrElse' call
    var this_0 = KlexLang_getInstance().cb_1.w7(input);
    var exception = Result__exceptionOrNull_impl_p6xea9(this_0);
    var tmp;
    if (exception == null) {
      var tmp_0 = _Result___get_value__impl__bjfvqg(this_0);
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      return input;
    }
    var result = tmp.pa();
    return joinToString(result, '', VOID, VOID, VOID, VOID, getSyntaxColors$lambda);
  }
  function main$lambda(it) {
    createDesktopIcon('Klex lang demo', 'assets/img/KlexLogo.png', main$lambda$lambda);
    return Unit_instance;
  }
  function main$lambda$lambda() {
    var window_0 = new Window('Klex language demo', createTextEdit());
    window_0.show();
    return Unit_instance;
  }
  function executeCode$lambda($this$runCode) {
    $this$runCode.hd('print', new NativeFunctionVoid(executeCode$lambda$lambda));
    $this$runCode.hd('printAvailableDebug', new NativeFunctionVoid(executeCode$lambda$lambda_0));
    return Unit_instance;
  }
  function executeCode$lambda$lambda($this$NativeFunctionVoid, it) {
    var tmp0_elvis_lhs = it.i(0);
    println(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs);
    return Unit_instance;
  }
  function executeCode$lambda$lambda_0($this$NativeFunctionVoid, it) {
    console.log($this$NativeFunctionVoid.jd());
    return Unit_instance;
  }
  function createTextEdit$lambda($$this$apply, $displayBox) {
    return function (it) {
      var contentRaw = $$this$apply.value;
      $displayBox.innerHTML = getSyntaxColors(contentRaw);
      return Unit_instance;
    };
  }
  function createTextEdit$lambda_0($displayBox, $$this$apply) {
    return function (it) {
      $displayBox.scrollTop = $$this$apply.scrollTop;
      $displayBox.scrollLeft = $$this$apply.scrollLeft;
      return Unit_instance;
    };
  }
  function createTextEdit$lambda_1($$this$apply) {
    return function (it) {
      var tmp;
      if (!(it instanceof KeyboardEvent)) {
        return Unit_instance;
      }
      var tmp_0;
      if (it.key === 'Enter' && it.ctrlKey) {
        executeCode($$this$apply.value);
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function getSyntaxColors$lambda(it) {
    var color = ensureNotNull(it.o9_1).lb();
    return color == null ? it.n9_1 : '<span style="color: ' + color + ';">' + it.n9_1 + '<\/span>';
  }
  function mainWrapper() {
    main();
  }
  //region block: init
  NoReturn_instance = new NoReturn();
  //endregion
  mainWrapper();
  return _;
}));

//# sourceMappingURL=Klex-Lang-Example.js.map
