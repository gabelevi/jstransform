/*
* WARNING: This file is autogenerated by visitors/__tests__/gen/generate-type-syntax-test.js
* Do NOT modify this file directly! Instead, add your tests to 
* visitors/__tests__/type-syntax-test.js and run visitors/__tests__/gen/generate-type-syntax-test.js
*/

module.exports = {
    'TypeAnnotations': {
        'function foo(numVal: any){}': {
            raworiginal: 'function foo(numVal: any){}',
            transformed: 'function foo(numVal     ){}',
            eval: 'No error',

        },
        'function foo(numVal: number){}': {
            raworiginal: 'function foo(numVal: number){}',
            transformed: 'function foo(numVal        ){}',
            eval: 'No error',

        },
        'function foo(numVal: number, strVal: string){}': {
            raworiginal: 'function foo(numVal: number, strVal: string){}',
            transformed: 'function foo(numVal        , strVal        ){}',
            eval: 'No error',

        },
        'function foo(numVal: number, untypedVal){}': {
            raworiginal: 'function foo(numVal: number, untypedVal){}',
            transformed: 'function foo(numVal        , untypedVal){}',
            eval: 'No error',

        },
        'function foo(untypedVal, numVal: number){}': {
            raworiginal: 'function foo(untypedVal, numVal: number){}',
            transformed: 'function foo(untypedVal, numVal        ){}',
            eval: 'No error',

        },
        'function foo(nullableNum: ?number){}': {
            raworiginal: 'function foo(nullableNum: ?number){}',
            transformed: 'function foo(nullableNum         ){}',
            eval: 'No error',

        },
        'function foo(callback: () => void){}': {
            raworiginal: 'function foo(callback: () => void){}',
            transformed: 'function foo(callback            ){}',
            eval: 'No error',

        },
        'function foo(callback: () => number){}': {
            raworiginal: 'function foo(callback: () => number){}',
            transformed: 'function foo(callback              ){}',
            eval: 'No error',

        },
        'function foo(callback: (_:bool) => number){}': {
            raworiginal: 'function foo(callback: (_:bool) => number){}',
            transformed: 'function foo(callback                    ){}',
            eval: 'No error',

        },
        'function foo(callback: (_1:bool, _2:string) => number){}': {
            raworiginal: 'function foo(callback: (_1:bool, _2:string) => number){}',
            transformed: 'function foo(callback                                ){}',
            eval: 'No error',

        },
        'function foo(callback: (_1:bool, ...foo:Array<number>) => number){}': {
            raworiginal: 'function foo(callback: (_1:bool, ...foo:Array<number>) => number){}',
            transformed: 'function foo(callback                                           ){}',
            eval: 'No error',

        },
        'function foo():number{}': {
            raworiginal: 'function foo():number{}',
            transformed: 'function foo()       {}',
            eval: 'No error',

        },
        'function foo():() => void{}': {
            raworiginal: 'function foo():() => void{}',
            transformed: 'function foo()           {}',
            eval: 'No error',

        },
        'function foo():(_:bool) => number{}': {
            raworiginal: 'function foo():(_:bool) => number{}',
            transformed: 'function foo()                   {}',
            eval: 'No error',

        },
        'function foo():(_?:bool) => number{}': {
            raworiginal: 'function foo():(_?:bool) => number{}',
            transformed: 'function foo()                    {}',
            eval: 'No error',

        },
        'function foo(): {} {}': {
            raworiginal: 'function foo(): {} {}',
            transformed: 'function foo()     {}',
            eval: 'No error',

        },
        'function foo<T>() {}': {
            raworiginal: 'function foo<T>() {}',
            transformed: 'function foo   () {}',
            eval: 'No error',

        },
        'function foo<T,S>() {}': {
            raworiginal: 'function foo<T,S>() {}',
            transformed: 'function foo     () {}',
            eval: 'No error',

        },
        'a=function<T,S>() {}': {
            raworiginal: 'a=function<T,S>() {}',
            transformed: 'a=function     () {}',
            eval: 'No error',

        },
        'a={set fooProp(value:number){}}': {
            raworiginal: 'a={set fooProp(value:number){}}',
            transformed: 'a={set fooProp(value       ){}}',
            eval: 'No error',

        },
        'a={set fooProp(value:number): void{}}': {
            raworiginal: 'a={set fooProp(value:number): void{}}',
            transformed: 'a={set fooProp(value       )      {}}',
            eval: 'No error',

        },
        'a={get fooProp(): number {}}': {
            raworiginal: 'a={get fooProp(): number {}}',
            transformed: 'a={get fooProp()         {}}',
            eval: 'No error',

        },
        'class Foo {set fooProp(value:number){}}': {
            raworiginal: 'class Foo {set fooProp(value:number){}}',
            transformed: 'class Foo {set fooProp(value       ){}}',
            eval: 'Unexpected reserved word',

        },
        'class Foo {set fooProp(value:number): void{}}': {
            raworiginal: 'class Foo {set fooProp(value:number): void{}}',
            transformed: 'class Foo {set fooProp(value       )      {}}',
            eval: 'Unexpected reserved word',

        },
        'class Foo {get fooProp(): number{}}': {
            raworiginal: 'class Foo {get fooProp(): number{}}',
            transformed: 'class Foo {get fooProp()        {}}',
            eval: 'Unexpected reserved word',

        },
        'var numVal:number;': {
            raworiginal: 'var numVal:number;',
            transformed: 'var numVal       ;',
            eval: 'No error',

        },
        'var numVal:number = otherNumVal;': {
            raworiginal: 'var numVal:number = otherNumVal;',
            transformed: 'var numVal        = otherNumVal;',
            eval: 'otherNumVal is not defined',

        },
        'var a: {numVal: number};': {
            raworiginal: 'var a: {numVal: number};',
            transformed: 'var a                  ;',
            eval: 'No error',

        },
        'var a: {numVal: number;};': {
            raworiginal: 'var a: {numVal: number;};',
            transformed: 'var a                   ;',
            eval: 'No error',

        },
        'var a: {numVal: number; [indexer: string]: number};': {
            raworiginal: 'var a: {numVal: number; [indexer: string]: number};',
            transformed: 'var a                                             ;',
            eval: 'No error',

        },
        'var a: ?{numVal: number};': {
            raworiginal: 'var a: ?{numVal: number};',
            transformed: 'var a                   ;',
            eval: 'No error',

        },
        'var a: {numVal: number; strVal: string}': {
            raworiginal: 'var a: {numVal: number; strVal: string}',
            transformed: 'var a                                  ',
            eval: 'No error',

        },
        'var a: {subObj: {strVal: string}}': {
            raworiginal: 'var a: {subObj: {strVal: string}}',
            transformed: 'var a                            ',
            eval: 'No error',

        },
        'var a: {subObj: ?{strVal: string}}': {
            raworiginal: 'var a: {subObj: ?{strVal: string}}',
            transformed: 'var a                             ',
            eval: 'No error',

        },
        'var a: {param1: number; param2: string}': {
            raworiginal: 'var a: {param1: number; param2: string}',
            transformed: 'var a                                  ',
            eval: 'No error',

        },
        'var a: {param1: number; param2?: string}': {
            raworiginal: 'var a: {param1: number; param2?: string}',
            transformed: 'var a                                   ',
            eval: 'No error',

        },
        'var a: {add(x:number, ...y:Array<string>): void}': {
            raworiginal: 'var a: {add(x:number, ...y:Array<string>): void}',
            transformed: 'var a                                           ',
            eval: 'No error',

        },
        'var a: { id<T>(x: T): T; }': {
            raworiginal: 'var a: { id<T>(x: T): T; }',
            transformed: 'var a                     ',
            eval: 'No error',

        },
        'var a:Array<number> = [1, 2, 3]': {
            raworiginal: 'var a:Array<number> = [1, 2, 3]',
            transformed: 'var a               = [1, 2, 3]',
            eval: 'No error',

        },
        'a = class Foo<T> { }': {
            raworiginal: 'a = class Foo<T> { }',
            transformed: 'a = class Foo<T> { }',
            eval: 'Unexpected reserved word',

        },
        'a = class Foo<T> extends Bar<T> { }': {
            raworiginal: 'a = class Foo<T> extends Bar<T> { }',
            transformed: 'a = class Foo<T> extends Bar<T> { }',
            eval: 'Unexpected reserved word',

        },
        'class Foo<T> {}': {
            raworiginal: 'class Foo<T> {}',
            transformed: 'class Foo<T> {}',
            eval: 'Unexpected reserved word',

        },
        'class Foo<T> extends Bar<T> { }': {
            raworiginal: 'class Foo<T> extends Bar<T> { }',
            transformed: 'class Foo<T> extends Bar<T> { }',
            eval: 'Unexpected reserved word',

        },
        'class Foo<T> extends mixin(Bar) { }': {
            raworiginal: 'class Foo<T> extends mixin(Bar) { }',
            transformed: 'class Foo<T> extends mixin(Bar) { }',
            eval: 'Unexpected reserved word',

        },
        'class Foo<T> { bar<U>():number { return 42; }}': {
            raworiginal: 'class Foo<T> { bar<U>():number { return 42; }}',
            transformed: 'class Foo<T> { bar<U>()        { return 42; }}',
            eval: 'Unexpected reserved word',

        },
        'class Foo { "bar"<T>() { } }': {
            raworiginal: 'class Foo { "bar"<T>() { } }',
            transformed: 'class Foo { "bar"<T>() { } }',
            eval: 'Unexpected reserved word',

        },
        'function foo(requiredParam, optParam?) {}': {
            raworiginal: 'function foo(requiredParam, optParam?) {}',
            transformed: 'function foo(requiredParam, optParam ) {}',
            eval: 'No error',

        },
        'class Foo { prop1:string; prop2:number; }': {
            raworiginal: 'class Foo { prop1:string; prop2:number; }',
            transformed: 'class Foo {                             }',
            eval: 'Unexpected reserved word',

        },
        'var x : number | string = 4;': {
            raworiginal: 'var x : number | string = 4;',
            transformed: 'var x                   = 4;',
            eval: 'No error',

        },
        'class Array { concat(items:number | string) {}; }': {
            raworiginal: 'class Array { concat(items:number | string) {}; }',
            transformed: 'class Array { concat(items                ) {}; }',
            eval: 'Unexpected reserved word',

        },
        'var x : () => number | () => string = fn;': {
            raworiginal: 'var x : () => number | () => string = fn;',
            transformed: 'var x                               = fn;',
            eval: 'fn is not defined',

        },
        'var x: typeof Y = Y;': {
            raworiginal: 'var x: typeof Y = Y;',
            transformed: 'var x           = Y;',
            eval: 'Y is not defined',

        },
        'var x: typeof Y | number = Y;': {
            raworiginal: 'var x: typeof Y | number = Y;',
            transformed: 'var x                    = Y;',
            eval: 'Y is not defined',

        },
        'var {x}: {x: string; } = { x: "hello" };': {
            raworiginal: 'var {x}: {x: string; } = { x: "hello" };',
            transformed: 'var {x}                = { x: "hello" };',
            eval: 'Unexpected token {',

        },
        'var {x}: {x: string } = { x: "hello" };': {
            raworiginal: 'var {x}: {x: string } = { x: "hello" };',
            transformed: 'var {x}               = { x: "hello" };',
            eval: 'Unexpected token {',

        },
        'var [x]: Array<string> = [ "hello" ];': {
            raworiginal: 'var [x]: Array<string> = [ "hello" ];',
            transformed: 'var [x]                = [ "hello" ];',
            eval: 'Unexpected token [',

        },
        'function foo({x}: { x: string; }) {}': {
            raworiginal: 'function foo({x}: { x: string; }) {}',
            transformed: 'function foo({x}                ) {}',
            eval: 'Unexpected token {',

        },
        'function foo([x]: Array<string>) {}': {
            raworiginal: 'function foo([x]: Array<string>) {}',
            transformed: 'function foo([x]               ) {}',
            eval: 'Unexpected token [',

        },
        'function foo(...rest: Array<number>) {}': {
            raworiginal: 'function foo(...rest: Array<number>) {}',
            transformed: 'function foo(...rest               ) {}',
            eval: 'Unexpected token .',

        },
        '(function (...rest: Array<number>) {})': {
            raworiginal: '(function (...rest: Array<number>) {})',
            transformed: '(function (...rest               ) {})',
            eval: 'Unexpected token .',

        },
        '((...rest: Array<number>) => rest)': {
            raworiginal: '((...rest: Array<number>) => rest)',
            transformed: '((...rest               ) => rest)',
            eval: 'Unexpected token .',

        },
        'var a: Map<string, Array<string> >': {
            raworiginal: 'var a: Map<string, Array<string> >',
            transformed: 'var a                             ',
            eval: 'No error',

        },
        'var a: Map<string, Array<string>>': {
            raworiginal: 'var a: Map<string, Array<string>>',
            transformed: 'var a                            ',
            eval: 'No error',

        },
        'var a: number[]': {
            raworiginal: 'var a: number[]',
            transformed: 'var a          ',
            eval: 'No error',

        },
        'var a: ?string[]': {
            raworiginal: 'var a: ?string[]',
            transformed: 'var a           ',
            eval: 'No error',

        },
        'var a: Promise<bool>[]': {
            raworiginal: 'var a: Promise<bool>[]',
            transformed: 'var a                 ',
            eval: 'No error',

        },
        'var a:(...rest:Array<number>) => number': {
            raworiginal: 'var a:(...rest:Array<number>) => number',
            transformed: 'var a                                  ',
            eval: 'No error',

        },
    },
    'Type Alias': {
        'type FBID = number;': {
            raworiginal: 'type FBID = number;',
            transformed: '                   ',
            eval: 'No error',

        },
        'type Foo<T> = Bar<T>': {
            raworiginal: 'type Foo<T> = Bar<T>',
            transformed: '                    ',
            eval: 'No error',

        },
    },
    'Interfaces': {
        'interface A {}': {
            raworiginal: 'interface A {}',
            transformed: '              ',
            eval: 'No error',

        },
        'interface A extends B {}': {
            raworiginal: 'interface A extends B {}',
            transformed: '                        ',
            eval: 'No error',

        },
        'interface A<T> extends B<T>, C<T> {}': {
            raworiginal: 'interface A<T> extends B<T>, C<T> {}',
            transformed: '                                    ',
            eval: 'No error',

        },
        'interface A { foo: () => number; }': {
            raworiginal: 'interface A { foo: () => number; }',
            transformed: '                                  ',
            eval: 'No error',

        },
        'interface Dictionary { [index: string]: string; length: number; }': {
            raworiginal: 'interface Dictionary { [index: string]: string; length: number; }',
            transformed: '                                                                 ',
            eval: 'No error',

        },
        'class Foo implements Bar {}': {
            raworiginal: 'class Foo implements Bar {}',
            transformed: 'class Foo implements Bar {}',
            eval: 'Unexpected reserved word',

        },
        'class Foo extends Bar implements Bat, Man<number> {}': {
            raworiginal: 'class Foo extends Bar implements Bat, Man<number> {}',
            transformed: 'class Foo extends Bar implements Bat, Man<number> {}',
            eval: 'Unexpected reserved word',

        },
        'class Foo extends class Bar implements Bat {} {}': {
            raworiginal: 'class Foo extends class Bar implements Bat {} {}',
            transformed: 'class Foo extends class Bar implements Bat {} {}',
            eval: 'Unexpected reserved word',

        },
        'class Foo extends class Bar implements Bat {} implements Man {}': {
            raworiginal: 'class Foo extends class Bar implements Bat {} implements Man {}',
            transformed: 'class Foo extends class Bar implements Bat {} implements Man {}',
            eval: 'Unexpected reserved word',

        },
    },
    'Type Grouping': {
        'var a: (number)': {
            raworiginal: 'var a: (number)',
            transformed: 'var a          ',
            eval: 'No error',

        },
        'var a: (() => number) | () => string': {
            raworiginal: 'var a: (() => number) | () => string',
            transformed: 'var a                               ',
            eval: 'No error',

        },
        'var a: number & (string | bool)': {
            raworiginal: 'var a: number & (string | bool)',
            transformed: 'var a                          ',
            eval: 'No error',

        },
        'var a: (typeof A)': {
            raworiginal: 'var a: (typeof A)',
            transformed: 'var a            ',
            eval: 'No error',

        },
    },
    'XJS': {
        '<a />': {
            raworiginal: '<a />',
            transformed: '<a />',
            eval: 'Unexpected token <',

        },
        '<n:a n:v />': {
            raworiginal: '<n:a n:v />',
            transformed: '<n:a n:v />',
            eval: 'Unexpected token <',

        },
        '<a n:foo="bar"> {value} <b><c /></b></a>': {
            raworiginal: '<a n:foo="bar"> {value} <b><c /></b></a>',
            transformed: '<a n:foo="bar"> {value} <b><c /></b></a>',
            eval: 'Unexpected token <',

        },
        '<a b={" "} c=" " d="&amp;" e="id=1&group=2" f="&#123456789" g="&#123*;" h="&#x;" />': {
            raworiginal: '<a b={" "} c=" " d="&amp;" e="id=1&group=2" f="&#123456789" g="&#123*;" h="&#x;" />',
            transformed: '<a b={" "} c=" " d="&amp;" e="id=1&group=2" f="&#123456789" g="&#123*;" h="&#x;" />',
            eval: 'Unexpected token <',

        },
        '<a\n/>': {
            raworiginal: '<a\n/>',
            transformed: '<a\n/>',
            eval: 'Unexpected token <',

        },
        '<日本語></日本語>': {
            raworiginal: '<日本語></日本語>',
            transformed: '<日本語></日本語>',
            eval: 'Unexpected token <',

        },
        '<AbC-def\n  test="&#x0026;&#38;">\nbar\nbaz\r\n</AbC-def>': {
            raworiginal: '<AbC-def\n  test="&#x0026;&#38;">\nbar\nbaz\r\n</AbC-def>',
            transformed: '<AbC-def\n  test="&#x0026;&#38;">\nbar\nbaz\r\n</AbC-def>',
            eval: 'Unexpected token <',

        },
        '<a b={x ? <c /> : <d />} />': {
            raworiginal: '<a b={x ? <c /> : <d />} />',
            transformed: '<a b={x ? <c /> : <d />} />',
            eval: 'Unexpected token <',

        },
        '<a>{}</a>': {
            raworiginal: '<a>{}</a>',
            transformed: '<a>{}</a>',
            eval: 'Unexpected token <',

        },
        '<a>{/* this is a comment */}</a>': {
            raworiginal: '<a>{/* this is a comment */}</a>',
            transformed: '<a>{/* this is a comment */}</a>',
            eval: 'Unexpected token <',

        },
        '<div>@test content</div>': {
            raworiginal: '<div>@test content</div>',
            transformed: '<div>@test content</div>',
            eval: 'Unexpected token <',

        },
        '<div><br />7x invalid-js-identifier</div>': {
            raworiginal: '<div><br />7x invalid-js-identifier</div>',
            transformed: '<div><br />7x invalid-js-identifier</div>',
            eval: 'Unexpected token <',

        },
        '<LeftRight left=<a /> right=<b>monkeys</b> />': {
            raworiginal: '<LeftRight left=<a /> right=<b>monkeys</b> />',
            transformed: '<LeftRight left=<a /> right=<b>monkeys</b> />',
            eval: 'Unexpected token <',

        },
        '<a.b></a.b>': {
            raworiginal: '<a.b></a.b>',
            transformed: '<a.b></a.b>',
            eval: 'Unexpected token <',

        },
        '<a.b.c></a.b.c>': {
            raworiginal: '<a.b.c></a.b.c>',
            transformed: '<a.b.c></a.b.c>',
            eval: 'Unexpected token <',

        },
        '(<div />) < x;': {
            raworiginal: '(<div />) < x;',
            transformed: '(<div />) < x;',
            eval: 'Unexpected token <',

        },
        '<div {...props} />': {
            raworiginal: '<div {...props} />',
            transformed: '<div {...props} />',
            eval: 'Unexpected token <',

        },
        '<div {...props} post="attribute" />': {
            raworiginal: '<div {...props} post="attribute" />',
            transformed: '<div {...props} post="attribute" />',
            eval: 'Unexpected token <',

        },
        '<div pre="leading" pre2="attribute" {...props}></div>': {
            raworiginal: '<div pre="leading" pre2="attribute" {...props}></div>',
            transformed: '<div pre="leading" pre2="attribute" {...props}></div>',
            eval: 'Unexpected token <',

        },
        '<a>    </a>': {
            raworiginal: '<a>    </a>',
            transformed: '<a>    </a>',
            eval: 'Unexpected token <',

        },
    },
    'Call Properties': {
        'var a : { (): number }': {
            raworiginal: 'var a : { (): number }',
            transformed: 'var a                 ',
            eval: 'No error',

        },
        'var a : { (): number; }': {
            raworiginal: 'var a : { (): number; }',
            transformed: 'var a                  ',
            eval: 'No error',

        },
        'var a : { (): number; y: string; (x: string): string }': {
            raworiginal: 'var a : { (): number; y: string; (x: string): string }',
            transformed: 'var a                                                 ',
            eval: 'No error',

        },
        'var a : { <T>(x: T): number; }': {
            raworiginal: 'var a : { <T>(x: T): number; }',
            transformed: 'var a                         ',
            eval: 'No error',

        },
        'interface A { (): number; }': {
            raworiginal: 'interface A { (): number; }',
            transformed: '                           ',
            eval: 'No error',

        },
    },
    'String Literal Types': {
        'function createElement(tagName: "div"): HTMLDivElement {}': {
            raworiginal: 'function createElement(tagName: "div"): HTMLDivElement {}',
            transformed: 'function createElement(tagName       )                 {}',
            eval: 'No error',

        },
        'function createElement(tagName: \'div\'): HTMLDivElement {}': {
            raworiginal: 'function createElement(tagName: \'div\'): HTMLDivElement {}',
            transformed: 'function createElement(tagName       )                 {}',
            eval: 'No error',

        },
    },
    'Qualified Generic Type': {
        'var a : A.B': {
            raworiginal: 'var a : A.B',
            transformed: 'var a      ',
            eval: 'No error',

        },
        'var a : A.B.C': {
            raworiginal: 'var a : A.B.C',
            transformed: 'var a        ',
            eval: 'No error',

        },
        'var a : A.B<T>': {
            raworiginal: 'var a : A.B<T>',
            transformed: 'var a         ',
            eval: 'No error',

        },
        'var a : typeof A.B<T>': {
            raworiginal: 'var a : typeof A.B<T>',
            transformed: 'var a                ',
            eval: 'No error',

        },
    },
    'Declare Statements': {
        'declare var foo': {
            raworiginal: 'declare var foo',
            transformed: '               ',
            eval: 'No error',

        },
        'declare var foo;': {
            raworiginal: 'declare var foo;',
            transformed: '                ',
            eval: 'No error',

        },
        'declare function foo(): void': {
            raworiginal: 'declare function foo(): void',
            transformed: '                            ',
            eval: 'No error',

        },
        'declare function foo(): void;': {
            raworiginal: 'declare function foo(): void;',
            transformed: '                             ',
            eval: 'No error',

        },
        'declare function foo<T>(): void;': {
            raworiginal: 'declare function foo<T>(): void;',
            transformed: '                                ',
            eval: 'No error',

        },
        'declare function foo(x: number, y: string): void;': {
            raworiginal: 'declare function foo(x: number, y: string): void;',
            transformed: '                                                 ',
            eval: 'No error',

        },
        'declare class A {}': {
            raworiginal: 'declare class A {}',
            transformed: '                  ',
            eval: 'No error',

        },
        'declare class A<T> extends B<T> { x: number }': {
            raworiginal: 'declare class A<T> extends B<T> { x: number }',
            transformed: '                                             ',
            eval: 'No error',

        },
        'declare class A { static foo(): number; static x : string }': {
            raworiginal: 'declare class A { static foo(): number; static x : string }',
            transformed: '                                                           ',
            eval: 'No error',

        },
        'declare class A { static [ indexer: number]: string }': {
            raworiginal: 'declare class A { static [ indexer: number]: string }',
            transformed: '                                                     ',
            eval: 'No error',

        },
        'declare class A { static () : number }': {
            raworiginal: 'declare class A { static () : number }',
            transformed: '                                      ',
            eval: 'No error',

        },
    },
    'Declare Module': {
        'declare module A {}': {
            raworiginal: 'declare module A {}',
            transformed: '                   ',
            eval: 'No error',

        },
        'declare module "./a/b.js" {}': {
            raworiginal: 'declare module "./a/b.js" {}',
            transformed: '                            ',
            eval: 'No error',

        },
        'declare module A { declare var x: number; }': {
            raworiginal: 'declare module A { declare var x: number; }',
            transformed: '                                           ',
            eval: 'No error',

        },
        'declare module A { declare function foo(): number; }': {
            raworiginal: 'declare module A { declare function foo(): number; }',
            transformed: '                                                    ',
            eval: 'No error',

        },
        'declare module A { declare class B { foo(): number; } }': {
            raworiginal: 'declare module A { declare class B { foo(): number; } }',
            transformed: '                                                       ',
            eval: 'No error',

        },
    },
    'Typecasts': {
        '(xxx: number)': {
            raworiginal: '(xxx: number)',
            transformed: '(xxx        )',
            eval: 'xxx is not defined',

        },
        '({xxx: 0, yyy: "hey"}: {xxx: number; yyy: string})': {
            raworiginal: '({xxx: 0, yyy: "hey"}: {xxx: number; yyy: string})',
            transformed: '({xxx: 0, yyy: "hey"}                            )',
            eval: 'No error',

        },
        '((xxx) => xxx + 1: (xxx: number) => number)': {
            raworiginal: '((xxx) => xxx + 1: (xxx: number) => number)',
            transformed: '((xxx) => xxx + 1                         )',
            eval: 'Unexpected token >',

        },
        '((xxx: number), (yyy: string))': {
            raworiginal: '((xxx: number), (yyy: string))',
            transformed: '((xxx        ), (yyy        ))',
            eval: 'xxx is not defined',

        },
        '((xxx: any): number)': {
            raworiginal: '((xxx: any): number)',
            transformed: '((xxx     )        )',
            eval: 'xxx is not defined',

        },
    },
};
