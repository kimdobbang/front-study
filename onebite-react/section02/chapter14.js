// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 키워드

// 서버에서 userdata 받아오는 함수
// async 에 의해 비동기함수로 바뀌고, 객체를 그대로 반환하는게 아니라
// 유저 객체를 결과값(resolve)으로 갖는 새로운 promise 반환하는 함수로 변환됨
async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "김도이",
        id: "thisisdoi",
      });
    }, 1500);
  });
}

// await
// async 함수 내부에서만 사용이 가능 한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

async function printData() {
  const data = await getData();
  console.log(data);
}

printData();
