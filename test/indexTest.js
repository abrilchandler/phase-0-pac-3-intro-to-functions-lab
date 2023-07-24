require ( './root.js' );


describe('shout(string)', function() {
  it('receives one argument and returns it in all caps', function() {
    expect(shout('hello')).toEqual('HELLO');
  })
})
function shout(hello) {
  return hello.toUpperCase();
}

describe('whisper(string)', function() {
  it('receives one argument and returns it in all lowercase', function() {
    expect(whisper('HELLO')).toEqual('hello');
  })
})
function whisper(hello) {
  return hello.toLowerCase();
}

describe('logShout(hello)', function shout(hello) {
  it('takes a string argument and logs it in all caps using console.log()', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough();

    logShout('hello');

    expect(spy).toHaveBeenCalledWith('HELLO');

    console.log.restore();
  })
})
function logShout (hello) {
  console.log(hello.toUpperCase());
}


describe('logWhisper(string)', function() {
  
  it('takes a string argument and logs it in all lowercase using console.log()', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough();

    logWhisper('HELLO');

    expect(spy).toHaveBeenCalledWith('hello');

    console.log.restore();
  })
})
function logWhisper (hello) {
  console.log(hello.toLowerCase());
}

describe('sayHiToHeadphonedRoommate(string)', function() {
  it('returns "I can\'t hear you!" if `string` is lowercase', function() {
    expect(sayHiToHeadphonedRoommate('hello')).toEqual("I can't hear you!");
  })

  it('returns "YES INDEED!" if `string` is uppercase', function() {
    expect(sayHiToHeadphonedRoommate('HELLO')).toEqual("YES INDEED!");
  })

  it('returns "I would love to!" if `string` is "Let\'s have dinner together!"`', function () {
    expect(sayHiToHeadphonedRoommate("Let's have dinner together!")).toEqual(
      "I would love to!"
    );
  });
})
function sayHiToHeadphonedRoommate (hello) {
 var cantUnswer = "I can't hear you!";
 var yesUnswer = "YES INDEED!";
 var loveUnswer = "I would love to!";
 if (hello.toLowerCase(hello) === hello) {
  return cantUnswer;
 }
 else if (hello.toUpperCase(hello) === hello) {
  return yesUnswer;
 }
 else if ("Let\'s have dinner together!" === hello) {
  return loveUnswer;
 }
}