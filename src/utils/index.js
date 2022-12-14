/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-09-24 10:37:33
 * @FilePath: /devNews-web-view/src/utils/index.js
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-09-24 10:38:36
 */
function debounce(func, wait, immediate) {
	let timeout, args, context, timestamp, result;

	const later = function () {
		// 据上一次触发时间间隔
		const last = +new Date() - timestamp;

		// 上次被包装函数被调用时间间隔last小于设定时间间隔wait
		if (last < wait && last > 0) {
			timeout = setTimeout(later, wait - last);
		} else {
			timeout = null;
			// 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
			if (!immediate) {
				result = func.apply(context, args);
				if (!timeout) {
					args = null;
					context = null;
				}
			}
		}
	};

	return function (...args) {
		context = this;
		timestamp = +new Date();
		const callNow = immediate && !timeout;
		// 如果延时不存在，重新设定延时
		if (!timeout) timeout = setTimeout(later, wait);
		if (callNow) {
			result = func.apply(context, args);
			context = args = null;
		}

		return result;
	};
}

// 数组去重
const unique = arr => {
	const res = [];
	const json = {};
	for (let i = 0; i < arr.length; i++) {
		if (!json[arr[i]]) {
			res.push(arr[i]);
			json[arr[i]] = 1;
		}
	}
	return res;
};

export { unique, debounce };
