module.exports={

	entry:{

		main:"./index.js",
		vendor:["babel-polyfill"]

	},
	output:{

		path:"./dist/",
		filename:"[name].js"
	},
	module:{

		rules:[

			{
				test:/\.js/,
				use:[
					"babel-loader"
				],
				exclude: /node_modules/
				
			},
			{
				test:/\.json/,
				use:[
					"json-loader"
				]
			}
		]
	}

}