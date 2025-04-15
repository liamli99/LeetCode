// Promise是一个对象，代表一个异步操作的最终成功或者失败
// Promise有三种状态：1. pending(待定)：初始状态 2. fulfilled(已兑现)：执行成功 3. rejected(已拒绝)：执行失败
// Promise的参数是一个回调函数executor，会立即执行；这个回调函数有两个参数resolve和reject，它们也是函数
// 在回调函数executor的执行过程中，如果遇到resolve，表示Promise执行成功(已兑现)，传递一个兑现值；如果遇到reject，表示Promise执行失败(已拒绝)，传递一个错误原因；因此函数resolve和reject都可以更改Promise的状态并设置结果，注意同时调用resolve和reject时只有第一次生效！
// 在回调函数executor的执行的过程中，如果抛出错误，那么Promise执行失败，会调用reject

// Promise.then有两个参数onFulfilled和onRejected，它们都是函数；一旦Promise执行成功/失败，它会异步的调用Promise.then，执行成功就调用onFulfilled，参数是兑现值；反之调用onRejected，参数是错误原因！
// Promise.then返回一个新的Promise

// 参考：https://github.com/yuanyuanbyte/Promise/blob/main/myPromiseNotes.js
// https://juejin.cn/post/6850037281206566919#heading-8

class MyPromise {
  // 私有属性
  #state = 'pending';
  #result = undefined;
  #onFulfilledCallbacks = [];
  #onRejectedCallbacks = [];

  // 构造函数
  constructor(executor) {
    const resolve = (value) => {
      if (this.#state !== 'pending') return;
      this.#state = 'fulfilled';
      this.#result = value;
      this.#onFulfilledCallbacks.forEach(fn => fn(value));
    }

    const reject = (reason) => {
      if (this.#state !== 'pending') return;
      this.#state = 'rejected';
      this.#result = reason;
      this.#onRejectedCallbacks.forEach(fn => fn(reason));
    }

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }


  // 实例方法


  // Promise.prototype.then()
  // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      if (this.#state === 'fulfilled') {

      } else if (this.#state === 'pending') {

      } else if (this.#state === 'pending') {

      }

    })
  }



  // Promise.prototype.catch()
  // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch
  catch(onRejected) {
    return this.then(undefined, onRejected);
  }

  // Promise.prototype.finally()
  // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally
  finally(onFinally) {
    return this.then(onFinally, onFinally);
  }


  // 静态方法


  // Promise.resolve()
  // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
  static resolve(value) {
    if (value instanceof Promise) {
      return value;
    
    } else if (value instanceof Object && 'then' in value) {
      return new Promise((resolve, reject) => {
        value.then(resolve, reject);
      })
    
    } else {
      return new Promise((resolve) => {
        resolve(value);
      })
    }
  }

  // Promise.reject()
  // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject
  static reject(reason) {
    return new Promise((_, reject) => {
      reject(reason);
    })
  }

  // Promise.all()
  // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
  // 如果iterable中所有Promise都执行成功，那么返回的Promise也执行成功，兑现值是一个数组，里面的元素是iterable中Promise的兑现值，并且顺序也一致！
  // 如果iterable中有一个Promise执行失败，那么返回的Promise也执行失败，错误原因是iterable中执行失败的那个Promise的错误原因！
  // 如果iterable为空，那么返回的Promise执行成功，兑现值就是空数组
  static all(iterable) {
    return new Promise((resolve, reject) => {
      const result = [];
      let count = 0;

      if (iterable.length === 0) {
        resolve([]);
      }

      iterable.forEach((item, index) => {
        // 注意iterable也允许有非Promise！所以要用Promise.resolve转化！
        Promise.resolve(item).then(
          (value) => {
            count++;
            result[index] = value;
            
            if (count === iterable.length) {
              resolve(result);
            }
          }, 
          
          (reason) => {
            reject(reason);
          })
      })
    })
  }

  // Promise.allSettled()
  // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled
  // 如果iterable中所有Promise都执行完毕(成功/失败)，那么返回的Promise就执行成功，兑现值是一个数组，里面的元素是iterable中Promise的结果对象，并且顺序也一致！
  // 如果iterable为空，那么返回的Promise执行成功，兑现值就是空数组
  static allSettled(iterable) {
    return new Promise((resolve, reject) => {
      const result = [];
      let count = 0;

      if (iterable.length === 0) {
        resolve([]);
      }

      iterable.forEach((item, index) => {
        Promise.resolve(item).then(
          (value) => {
            count++;
            result[index] = {
              status: 'fulfilled',
              value
            };

            if (count === iterable.length) {
              resolve(result);
            }
          }, 
          
          (reason) => {
            count++;
            result[index] = {
              status: 'rejected',
              reason
            };

            if (count === iterable.length) {
              resolve(result)
            }
          })
      })
    })
  }

  // Promise.any()
  // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/any
  // 如果iterable中有任何一个Promise执行成功，那么返回的Promise就执行成功，兑现值是iterable中第一个执行成功的Promise的兑现值！
  // 如果iterable中所有Promise都执行失败，那么返回的Promise也执行失败，错误原因是一个AggregateError，参数是一个数组，里面的元素是iterable中所有执行失败的Promise的错误原因，顺序不需要一致！
  // 如果iterable为空，那么返回的Promise执行失败，错误原因是一个AggregateError，参数是一个空数组
  static any(iterable) {
    return new Promise((resolve, reject) => {
      const result = [];
      let count = 0;

      if (iterable.length === 0) {
        reject(new AggregateError([]));
      }

      iterable.forEach((item) => {
        Promise.resolve(item).then(
          (value) => {
            resolve(value);
          }, 
          
          (reason) => {
            count ++;
            result.push(reason);

            if (count == iterable.length) {
              reject(new AggregateError(result))
            }
          })
      })
    })
  }


  // Promise.race()
  // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/race
  // 如果iterable中有任何一个Promise执行完毕(成功/失败)，那么返回的Promise就执行完毕(成功/失败)，兑现值/错误原因是iterable中第一个执行完毕的Promise的兑现值/错误原因！
  // 如果iterable为空，那么返回的Promise的状态一直是pending
  static race(iterable) {
    return new Promise((resolve, reject) => {
      if (iterable.length > 0) {
        iterable.forEach((item) => {
          Promise.resolve(item).then(
            (value) => {
              resolve(value)
            }, 
            (error) => {
              reject(error)
            })
        })
      }
    })
  }







}
