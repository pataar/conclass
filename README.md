# conclass
Conditional classlist generator
>A modern and lightweight >1kb alternative to [classnames](https://github.com/JedWatson/classnames).

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

conclass("Wow!", [
	[
		[
			"this",
			"is",
			{
				"deep" true
			}
		]
	]
]);
// Outputs: Wow! this is deep
```