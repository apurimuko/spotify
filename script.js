"use strict";

PetiteVue.createApp({
  async init() {
    const query = new URLSearchParams({
      zipcode: this.zipcode,
    });

    const res = await fetch("http://localhost:8000?" + query, {
      headers: {},
    }); // 仲介プログラムにfetch
    const obj = await res.json();
    console.log(JSON.stringify(obj, null, 2));
    this.data = obj.results[0];
  },

  zipcode: "6620842",
  data: false,
}).mount();
