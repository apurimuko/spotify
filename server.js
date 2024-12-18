Deno.serve(async (req) => {
  // リクエストのクエリー（?より後ろの部分）を取得する
  const { searchParams } = new URL(req.url);

  // 特定のクエリーの値を取得する
  const zipcode = searchParams.get("zipcode");

  // サードパーティー製のAPIのURLを組み立てる（URLSearchParamsも使える）
  const url = `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipcode}`;

  // 以下、さきほどと同じ
  const res = await fetch(url);
  const obj = await res.json();

  const body = JSON.stringify(obj);
  return new Response(body, {
    headers: {
      "Content-type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
    },
  });
});
