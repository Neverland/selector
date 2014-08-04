/**!
 *@license
 * enix@foxmail.com
 */
define('$', [], function (){
	var doc = document,
		qsa = doc.querySelectorAll;

	return function $ (n) {
		if(n.nodeType) return n;
		var t = qsa.call(doc, n);
		return t.length === 0 ? false : (t.length > 1 ? [].slice.call(t) : t[0]);
	}
})