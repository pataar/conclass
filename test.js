import test from "ava";
import conclass from ".";

test("simple", async t => {
	let classlist = conclass("main", "second", ["more", "classes"]);

	t.is(classlist, "main second more classes");
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
