/* global module, console, describe, expect, it, before, beforeEach, inject, spyOn, WebCodeBeauty*/

'use strict';

describe('WebCodeBeauty', function () {


    describe('JSON', function () {

        it('should minify json', function () {
            var out = WebCodeBeauty.jsonmin('{"Data":"Test",\n "Foo":123,\n "bar": [ "baz", "baa", "boo"]\n }');
            expect(out).toBe('{"Data":"Test","Foo":123,"bar":["baz","baa","boo"]}');
        });


        it('should pretty print json', function () {
            var out = WebCodeBeauty.json('{"Data":"Test", "Foo":123, "bar": [ "baz", "baa", "boo"] }');
            expect(out).toBe('{\n    "Data": "Test",\n    "Foo": 123,\n    "bar": [\n        "baz",\n        "baa",\n        "boo"\n    ]\n}');
        });
    });

    describe('SQL', function () {
        it('should minify SELECT', function () {
            var out = WebCodeBeauty.sqlmin("SELECT * FROM CLUE\n LEFT JOIN NONE on CLUE.id = NONE.clue_id\n WHERE clue.name like '%has none%';");
            expect(out).toBe("SELECT * FROM CLUE LEFT JOIN NONE on CLUE.id = NONE.clue_id WHERE clue.name like '%has none%';");
        });

        it('should pretty print SELECT', function () {
            var out = WebCodeBeauty.sql("SELECT * FROM CLUE LEFT JOIN NONE on CLUE.id = NONE.clue_id WHERE clue.name like '%has none%';");
            expect(out).toBe('SELECT *\nFROM CLUE\nLEFT JOIN NONE\n    ON CLUE.id = NONE.clue_id\nWHERE clue.name LIKE \'%has none%\';');
        });

        it('should pretty print UPDATE', function () {
            var out = WebCodeBeauty.sql("UPDATE foo set baz='bar' where id=7;");
            expect(out).toBe('UPDATE foo SET baz=\'bar\'\nWHERE id=7;');
        });

        it('should pretty print INSERT', function () {
            var out = WebCodeBeauty.sql("INSERT INTO foo (id,baz) VALUES('7', 'bar');");
            expect(out).toBe('INSERT INTO foo (id,baz) VALUES(\'7\', \'bar\');');
        });
    });

});
