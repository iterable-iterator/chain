import test from 'ava';

import {list} from '@iterable-iterator/list';
import {range} from '@iterable-iterator/range';
import {chain} from '../../src/index.js';

const repr = (x) => JSON.stringify(x);

const macro = (t, iterables, expected) => {
	t.deepEqual(list(chain(iterables)), list(expected));
};

macro.title = (title, iterables, output) =>
	title ?? `chain(${repr(iterables)}) is ${repr(output)}`;

test(macro, [], []);
test(macro, [[1]], [1]);
test(macro, [[1, 2, 3]], [1, 2, 3]);
test(
	macro,
	[
		[1, 2, 3],
		[4, 5, 6],
	],
	[1, 2, 3, 4, 5, 6],
);
test(macro, [[1, 2, 3], [], [4, 5, 6]], [1, 2, 3, 4, 5, 6]);

test(macro, [range(3)], range(3));
test(macro, [range(7), range(7, 15)], range(15));
