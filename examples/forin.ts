var strings:string[] = ['one', 'two', 'three'];

for (var item in strings) {
  var itemValue = strings[item];
  console.log(`strings[${item}]=${itemValue}`);
}

for (var item of strings) {
  console.log(item);
}
