# vue-note
the note when I learn Vue

---

### install

* cdn的版本用 https://unpkg.com/vue 比較穩
* js 記得用在dom後面或ready後執行

### 給值

* 由于 JavaScript 的限制，Vue 不能检测以下变动的数组：

	```javascript
	// wrong: > vue won't change

	vm.items[indexOfItem] = newValue
	vm.items.length = newLength

	// right:

	Vue.set(example1.items, index, newValue)
	example1.items.splice(index, 1, newValue)
	```

### v-for

* 語法:  `v-for: item in items` , item 用於變數為之後所用，items可以是array也可以是object
* 可以加上第二個參數作為index所用: `v-for="(item, index) in items`,如果對象是Object, index會變成鍵名，第三個參數才是索引
* v-for的時候建議提供唯一的key



```html
	<ul id="example-2">
		<li v-for="(item, index) in items">
			 {{ item.message }} - {{ index }}
		</li>
	</ul>
	```


 ```html

	data: {
		object: {
			firstName: 'John',
			lastName: 'Doe',
			age: 30
		}
	}

	<div v-for="(value, key, index) in object">
	  {{ index }}. {{ key }}: {{ value }}
	</div>

	output:
	0. firstName: John
	1. lastName: Doe
	2. age: 30
 	```

### form

* #### checkbox
	checkbox 如果直接指定v-model，v-model的變數會代表勾選的true/false
	如果有給指定value且v-model的變數是array型態，變數會變成value的集合

	```html
	<!-- 当选中时，`picked` 为字符串 "a" -->
	<input type="radio" v-model="picked" value="a">

	<!-- `toggle` 为 true 或 false -->
	<input type="checkbox" v-model="toggle">

	<!-- 当选中时，`selected` 为字符串 "abc" -->
	<select v-model="selected">
	  <option value="abc">ABC</option>
	</select>
	```
* #### select
	ios 在選擇option的第一個選項會有問題，建議設預設文字選項
	 `<option disabled value ='' >請選擇</option>`

* #### 修飾符 v-model.xxxx
	* v-model.lazy='name' 變成change事件才會更新 name 變數
	* v-model.number='age' 變數會為 number 的方式儲存
	* v-model.trim='msg' 變數會自動過濾首尾空格

## components

* global/local
 ```javascript
 // global
 Vue.component('hello-msg',{
   template: '<li>123</li>'
 })

 // local
 var app = new Vue({
   el : '#app',
   components: {
     'hello-msg': {
       template: '<li>123</li>'
      }
    }
 })

 ```


* `ul li table select` 有DOM解析限制必須要用is 指定: `<tr is="my-row"></tr>`

* components 內部的data屬性必須要用function return 不然全部 components 會共用同一個data
 ```javascript

	Vue.component('simple-counter', {
		// wrong : all component use the same data
		data: {
			counter: 0
		},
		// right
		data: function() {
			return {
				counter: 0
			}
		}
	})
 ```

* #### 變數
 * components 裡的 props 如果要跟 parent 變數綁定，要注意位置
```html
<child :child-message="parentMsg"></child>
```
 * 變數要用 kebab-case 命名，因為要用在 DOM 的 tag 內
