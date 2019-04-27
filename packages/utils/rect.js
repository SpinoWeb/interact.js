import { closest, getElementRect, parentNode } from './domUtils';
import extend from './extend';
import * as is from './is';
export function getStringOptionResult(value, interactable, element) {
    if (!is.string(value)) {
        return null;
    }
    if (value === 'parent') {
        value = parentNode(element);
    }
    else if (value === 'self') {
        value = interactable.getRect(element);
    }
    else {
        value = closest(element, value);
    }
    return value;
}
export function resolveRectLike(value, interactable, element, functionArgs) {
    value = getStringOptionResult(value, interactable, element) || value;
    if (is.func(value)) {
        value = value.apply(null, functionArgs);
    }
    if (is.element(value)) {
        value = getElementRect(value);
    }
    return value;
}
export function rectToXY(rect) {
    return rect && {
        x: 'x' in rect ? rect.x : rect.left,
        y: 'y' in rect ? rect.y : rect.top,
    };
}
export function xywhToTlbr(rect) {
    if (rect && !('left' in rect && 'top' in rect)) {
        rect = extend({}, rect);
        rect.left = rect.x || 0;
        rect.top = rect.y || 0;
        rect.right = rect.right || (rect.left + rect.width);
        rect.bottom = rect.bottom || (rect.top + rect.height);
    }
    return rect;
}
export function tlbrToXywh(rect) {
    if (rect && !('x' in rect && 'y' in rect)) {
        rect = extend({}, rect);
        rect.x = rect.left || 0;
        rect.y = rect.top || 0;
        rect.width = rect.width || (rect.right - rect.x);
        rect.height = rect.height || (rect.bottom - rect.y);
    }
    return rect;
}
export default {
    getStringOptionResult,
    resolveRectLike,
    rectToXY,
    xywhToTlbr,
    tlbrToXywh,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFFLE1BQU0sWUFBWSxDQUFBO0FBQ2hFLE9BQU8sTUFBTSxNQUFNLFVBQVUsQ0FBQTtBQUM3QixPQUFPLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQTtBQUUxQixNQUFNLFVBQVUscUJBQXFCLENBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxPQUFPO0lBQ2pFLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3JCLE9BQU8sSUFBSSxDQUFBO0tBQ1o7SUFFRCxJQUFJLEtBQUssS0FBSyxRQUFRLEVBQUU7UUFDdEIsS0FBSyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtLQUM1QjtTQUNJLElBQUksS0FBSyxLQUFLLE1BQU0sRUFBRTtRQUN6QixLQUFLLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTtLQUN0QztTQUNJO1FBQ0gsS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUE7S0FDaEM7SUFFRCxPQUFPLEtBQUssQ0FBQTtBQUNkLENBQUM7QUFFRCxNQUFNLFVBQVUsZUFBZSxDQUFFLEtBQUssRUFBRSxZQUFhLEVBQUUsT0FBUSxFQUFFLFlBQWE7SUFDNUUsS0FBSyxHQUFHLHFCQUFxQixDQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsT0FBTyxDQUFDLElBQUksS0FBSyxDQUFBO0lBRXBFLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNsQixLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUE7S0FDeEM7SUFFRCxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDckIsS0FBSyxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtLQUM5QjtJQUVELE9BQU8sS0FBSyxDQUFBO0FBQ2QsQ0FBQztBQUVELE1BQU0sVUFBVSxRQUFRLENBQUUsSUFBSTtJQUM1QixPQUFRLElBQUksSUFBSTtRQUNkLENBQUMsRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSTtRQUNuQyxDQUFDLEVBQUUsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUc7S0FDbkMsQ0FBQTtBQUNILENBQUM7QUFFRCxNQUFNLFVBQVUsVUFBVSxDQUFFLElBQUk7SUFDOUIsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLE1BQU0sSUFBSSxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxFQUFFO1FBQzlDLElBQUksR0FBRyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBRXZCLElBQUksQ0FBQyxJQUFJLEdBQUssSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDekIsSUFBSSxDQUFDLEdBQUcsR0FBTSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFJLElBQUksQ0FBQyxLQUFLLElBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUN0RCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtLQUN2RDtJQUVELE9BQU8sSUFBSSxDQUFBO0FBQ2IsQ0FBQztBQUVELE1BQU0sVUFBVSxVQUFVLENBQUUsSUFBSTtJQUM5QixJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLEVBQUU7UUFDekMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFFdkIsSUFBSSxDQUFDLENBQUMsR0FBUSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQTtRQUM1QixJQUFJLENBQUMsQ0FBQyxHQUFRLElBQUksQ0FBQyxHQUFHLElBQUssQ0FBQyxDQUFBO1FBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUksSUFBSSxDQUFDLEtBQUssSUFBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ25ELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQ3BEO0lBRUQsT0FBTyxJQUFJLENBQUE7QUFDYixDQUFDO0FBRUQsZUFBZTtJQUNiLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsUUFBUTtJQUNSLFVBQVU7SUFDVixVQUFVO0NBQ1gsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNsb3Nlc3QsIGdldEVsZW1lbnRSZWN0LCBwYXJlbnROb2RlIH0gZnJvbSAnLi9kb21VdGlscydcbmltcG9ydCBleHRlbmQgZnJvbSAnLi9leHRlbmQnXG5pbXBvcnQgKiBhcyBpcyBmcm9tICcuL2lzJ1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RyaW5nT3B0aW9uUmVzdWx0ICh2YWx1ZSwgaW50ZXJhY3RhYmxlLCBlbGVtZW50KSB7XG4gIGlmICghaXMuc3RyaW5nKHZhbHVlKSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBpZiAodmFsdWUgPT09ICdwYXJlbnQnKSB7XG4gICAgdmFsdWUgPSBwYXJlbnROb2RlKGVsZW1lbnQpXG4gIH1cbiAgZWxzZSBpZiAodmFsdWUgPT09ICdzZWxmJykge1xuICAgIHZhbHVlID0gaW50ZXJhY3RhYmxlLmdldFJlY3QoZWxlbWVudClcbiAgfVxuICBlbHNlIHtcbiAgICB2YWx1ZSA9IGNsb3Nlc3QoZWxlbWVudCwgdmFsdWUpXG4gIH1cblxuICByZXR1cm4gdmFsdWVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVSZWN0TGlrZSAodmFsdWUsIGludGVyYWN0YWJsZT8sIGVsZW1lbnQ/LCBmdW5jdGlvbkFyZ3M/KSB7XG4gIHZhbHVlID0gZ2V0U3RyaW5nT3B0aW9uUmVzdWx0KHZhbHVlLCBpbnRlcmFjdGFibGUsIGVsZW1lbnQpIHx8IHZhbHVlXG5cbiAgaWYgKGlzLmZ1bmModmFsdWUpKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5hcHBseShudWxsLCBmdW5jdGlvbkFyZ3MpXG4gIH1cblxuICBpZiAoaXMuZWxlbWVudCh2YWx1ZSkpIHtcbiAgICB2YWx1ZSA9IGdldEVsZW1lbnRSZWN0KHZhbHVlKVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWN0VG9YWSAocmVjdCkge1xuICByZXR1cm4gIHJlY3QgJiYge1xuICAgIHg6ICd4JyBpbiByZWN0ID8gcmVjdC54IDogcmVjdC5sZWZ0LFxuICAgIHk6ICd5JyBpbiByZWN0ID8gcmVjdC55IDogcmVjdC50b3AsXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHh5d2hUb1RsYnIgKHJlY3QpIHtcbiAgaWYgKHJlY3QgJiYgISgnbGVmdCcgaW4gcmVjdCAmJiAndG9wJyBpbiByZWN0KSkge1xuICAgIHJlY3QgPSBleHRlbmQoe30sIHJlY3QpXG5cbiAgICByZWN0LmxlZnQgICA9IHJlY3QueCB8fCAwXG4gICAgcmVjdC50b3AgICAgPSByZWN0LnkgfHwgMFxuICAgIHJlY3QucmlnaHQgID0gcmVjdC5yaWdodCAgIHx8IChyZWN0LmxlZnQgKyByZWN0LndpZHRoKVxuICAgIHJlY3QuYm90dG9tID0gcmVjdC5ib3R0b20gIHx8IChyZWN0LnRvcCArIHJlY3QuaGVpZ2h0KVxuICB9XG5cbiAgcmV0dXJuIHJlY3Rcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRsYnJUb1h5d2ggKHJlY3QpIHtcbiAgaWYgKHJlY3QgJiYgISgneCcgaW4gcmVjdCAmJiAneScgaW4gcmVjdCkpIHtcbiAgICByZWN0ID0gZXh0ZW5kKHt9LCByZWN0KVxuXG4gICAgcmVjdC54ICAgICAgPSByZWN0LmxlZnQgfHwgMFxuICAgIHJlY3QueSAgICAgID0gcmVjdC50b3AgIHx8IDBcbiAgICByZWN0LndpZHRoICA9IHJlY3Qud2lkdGggIHx8IChyZWN0LnJpZ2h0ICAtIHJlY3QueClcbiAgICByZWN0LmhlaWdodCA9IHJlY3QuaGVpZ2h0IHx8IChyZWN0LmJvdHRvbSAtIHJlY3QueSlcbiAgfVxuXG4gIHJldHVybiByZWN0XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0U3RyaW5nT3B0aW9uUmVzdWx0LFxuICByZXNvbHZlUmVjdExpa2UsXG4gIHJlY3RUb1hZLFxuICB4eXdoVG9UbGJyLFxuICB0bGJyVG9YeXdoLFxufVxuIl19