/* global module, console, describe, expect, it, before, beforeEach, inject, spyOn, WebCodeBeauty*/

'use strict';

describe('WebCodeBeauty', function(){


   describe('JSON', function() {

      it('should minify json', function() {
          var out = WebCodeBeauty.jsonmin('{"Data":"Test",\n "Foo":123,\n "bar": [ "baz", "baa", "boo"]\n }');
          expect(out).toBe('{"Data":"Test","Foo":123,"bar":["baz","baa","boo"]}');
      });


      it('should pretty print json', function() {
            var out = WebCodeBeauty.json('{"Data":"Test", "Foo":123, "bar": [ "baz", "baa", "boo"] }');
            expect(out).toBe('{\n    "Data": "Test",\n    "Foo": 123,\n    "bar": [\n        "baz",\n        "baa",\n        "boo"\n    ]\n}');
      });
  });

});
