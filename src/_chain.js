/**
 * Chains input iterables one after the other. Returns an iterable iterator
 * that yields all values of the first input iterable, then all values of the
 * second, etc.
 *
 * @example
 * // returns [ 0 , 1 , 0 , 1 , 2 ]
 * list( _chain( [ range( 2 ) , range( 3 ) ] ) ) ;
 *
 * @param {Iterable[]} iterables - The input iterables to chain.
 * @returns {IterableIterator}
 */
export default function* _chain(iterables) {
	for (const iterable of iterables) {
		yield* iterable;
	}
}
