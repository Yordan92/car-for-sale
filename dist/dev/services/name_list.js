var NameList = (function () {
    function NameList() {
        this.names = ['Dijkstra', 'Knuth', 'Turing', 'Hopper'];
    }
    NameList.prototype.get = function () {
        return this.names;
    };
    NameList.prototype.add = function (value) {
        this.names.push(value);
    };
    NameList.prototype.remove = function (index) {
        this.names.splice(index, 1);
    };
    return NameList;
})();
exports.NameList = NameList;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL25hbWVfbGlzdC50cyJdLCJuYW1lcyI6WyJOYW1lTGlzdCIsIk5hbWVMaXN0LmNvbnN0cnVjdG9yIiwiTmFtZUxpc3QuZ2V0IiwiTmFtZUxpc3QuYWRkIiwiTmFtZUxpc3QucmVtb3ZlIl0sIm1hcHBpbmdzIjoiQUFBQTtJQUFBQTtRQUNFQyxVQUFLQSxHQUFHQSxDQUFDQSxVQUFVQSxFQUFFQSxPQUFPQSxFQUFFQSxRQUFRQSxFQUFFQSxRQUFRQSxDQUFDQSxDQUFDQTtJQVdwREEsQ0FBQ0E7SUFUQ0Qsc0JBQUdBLEdBQUhBO1FBQ0VFLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBO0lBQ3BCQSxDQUFDQTtJQUNERixzQkFBR0EsR0FBSEEsVUFBSUEsS0FBYUE7UUFDZkcsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7SUFDekJBLENBQUNBO0lBQ0RILHlCQUFNQSxHQUFOQSxVQUFPQSxLQUFhQTtRQUNsQkksSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDOUJBLENBQUNBO0lBQ0hKLGVBQUNBO0FBQURBLENBWkEsQUFZQ0EsSUFBQTtBQVpZLGdCQUFRLFdBWXBCLENBQUEiLCJmaWxlIjoic2VydmljZXMvbmFtZV9saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE5hbWVMaXN0IHtcbiAgbmFtZXMgPSBbJ0RpamtzdHJhJywgJ0tudXRoJywgJ1R1cmluZycsICdIb3BwZXInXTtcblxuICBnZXQoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLm5hbWVzO1xuICB9XG4gIGFkZCh2YWx1ZTogc3RyaW5nKTp2b2lkIHtcbiAgICB0aGlzLm5hbWVzLnB1c2godmFsdWUpO1xuICB9XG4gIHJlbW92ZShpbmRleDogbnVtYmVyKTp2b2lkIHtcbiAgICB0aGlzLm5hbWVzLnNwbGljZShpbmRleCwgMSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==