const conclass = (...args) => {
	if (typeof args === "undefined" || !args) {
		return "";
	}

	const classList = [];

	for (let i = 0; i < args.length; i++) {
		let arg = args[i];
		if (!arg) {
			continue;
		}

		if (typeof arg === "string" || typeof arg === "number") {
			classList.push(arg);
		} else if (Array.isArray(arg)) {
			arg.forEach(c => !!c && classList.push(conclass(c)));
		} else if (typeof arg === "object") {
			Object.keys(arg).forEach(key => {
				let value = arg[key];
				if (!!value) {
					classList.push(key);
				}
			});
		}
	}

	return classList.join(" ");
};

export default conclass;
