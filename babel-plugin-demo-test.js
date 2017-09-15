//Babylon 是 Babel 的解析器
import * as babylon from "babylon";

/*Babel Types模块是一个用于 AST 节点的 Lodash 式工具库（译注：Lodash 是一个 JavaScript 函数工具库，
提供了基于函数式编程风格的众多工具函数）， 它包含了构造、验证以及变换 AST 节点的方法*/
import * as t from 'babel-types';


/*Babel Traverse（遍历）模块维护了整棵树的状态，并且负责替换、移除和添加节点。*/
import traverse from "babel-traverse";

/*
Babel Generator模块是 Babel 的代码生成器，
它读取AST并将其转换为代码和源码映射（sourcemaps）。
*/
import generate from 'babel-generator'


/*babel-template 是另一个虽然很小但却非常有用的模块。 
它能让你编写字符串形式且带有占位符的代码来代替手动编码，
 尤其是生成的大规模 AST的时候。 在计算机科学中，这种能力被称为准引用（quasiquotes）。*/

import template from "babel-template";


const code = `function square(n) {
  return n * n;
}`;
const ast = babylon.parse(code);

traverse(ast, {

  enter(path) {
/*    if ( path.node.type === "Identifier" && path.node.name === "n" ){

      path.node.name = "x";
    }*/


    if (t.isIdentifier(path.node, { name: "n" })) {
      path.node.name = "x";
    //  path.node.

    }

    if(path.type=="BinaryExpression" && path.node.operator=="*"){

    	path.node.operator='/'
    }



  }
});


//console.log( t.isBinaryExpression( t.binaryExpression( "*", t.identifier( "a"), t.identifier( "b" ) ) ) )


var r_code = generate( ast ,{  compact: "auto" ,  retainLines: false } , code ) 

console.log(r_code.code)
//console.log( t.BindExpression())



/*const buildRequire = template(`
  var IMPORT_NAME = require(SOURCE);
`);

const ast2 = buildRequire({
  IMPORT_NAME: t.identifier("myModule"),
  SOURCE: t.stringLiteral("my-module")
});

console.log(generate(ast2).code);*/

/*
var fn_code=` let fn = ( x ) =>{ return x * x } `;


var ast_fn = babylon.parse(fn_code);


var ast_code=generate(ast_fn,{},code)

console.log(ast_code.code);*/
