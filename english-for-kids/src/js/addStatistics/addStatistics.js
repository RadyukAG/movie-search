export default function addStatistics (list, statistics) { 
    const obj = list[list.length - 1];
    statistics.push(obj);
    list.pop();
    if (list.length > 0) {
        addStatistics(list, statistics);
    } 
}