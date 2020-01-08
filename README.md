# conclass

[![Build Status](https://travis-ci.com/pataar/conclass.svg?branch=master)](https://travis-ci.com/pataar/conclass)

Conditional classlist generator
>A modern and lightweight <1kb drop-in replacement for [classnames](https://github.com/JedWatson/classnames).

## Install
```console
npm install conclass
```

## Usage
```javascript
import conclass from 'conclass';

const color = "red";
const enableColor = true;

const classList = conclass("button", {
	"large": true,
	[color]: enableColor
});

// which would output 'button large red'

```

Conclass is really flexible. You can put in pretty much anything in any format and it will generate a classlist.

### Some examples
```javascript
import conclass from 'conclass';

conclass("fa", { "fa-fw": true });
// Outputs: fa fa-fw

conclass("button", ["key1", {conditional: false, truthy: true}]);
// Outputs: button key1 truthy

const otherClasses = ["rest", "items"];
conclass("button", ["key1", {conditional: false, truthy: true}], ...otherClasses);
// Outputs: button key1 truthy rest items

conclass("Wow!", [
	[
		[
			"this",
			"is",
			{
				deep: true,
			},
		],
	],
]);
// Outputs: Wow! this is deep
```

### Example in React
Conclass is a perfect match with React!
```jsx
import conclass from 'conclass';

const Button = ({ large, primary, children }) => (
	<button className={conclass("button", { large, primary })}>{children}</button>
);

// So you can use:

const MyForm = () => (
	<div>
		{/* ... */}
		<Button large primary>
			Click me!
		</Button>

		<Button large>
			Or click me!
		</Button>
	</div>
);

```
Which would be rendered to HTML as:
```html
<div>
	<button class="button large primary">
		Click me!
	</button>

	<button class="button large">
		Or click me!
	</button>
</div>
```

