import test from "ava";
import conclass from ".";

test("simple", async t => {
	let classlist = conclass("main", "second", ["more", "classes"]);

	t.is(classlist, "main second more classes");
});

test("rest", async t => {
	const otherClasses = ["rest", "items"];

	let classlist = conclass("main", ...otherClasses);

	t.is(classlist, "main rest items");
});

test("advanced", async t => {
	let classlist = conclass(
		"main",
		{
			conditional: true,
			not_in_list: false,
		},
		"second",
	);

	t.is(classlist, "main conditional second");
});

test("complex", async t => {
	let classlist = conclass(
		"main",
		{
			conditional: true,
			not_in_list: false,
		},
		[
			"first",
			[
				[
					{
						nested: true,
						invalid: false,
					},
					"",
					null,
					undefined,
					"true",
					"false",
				],
			],
			{
				addition: true,
			},
		],
		"second",
	);

	t.is(classlist, "main conditional first nested true false addition second");
});

test("complex 2", async t => {
	let classlist = conclass(
		"main",
		{
			conditional: true,
			not_in_list: false,
		},
		"mid string",
		[
			"first",
			[
				[
					{
						nested: true,
						invalid: false,
						quoted: 1,
						sav: "string as value",
					},
					"",
					null,
					undefined,
					"true",
					"false",
				],
			],
			"third",
			["fourth", "fifth"],
			{
				addition: true,
			},
		],
		undefined,
		null,
		false,
		0,
		"second",
	);

	t.is(classlist, "main conditional mid string first nested quoted sav true false third fourth fifth addition second");
});
