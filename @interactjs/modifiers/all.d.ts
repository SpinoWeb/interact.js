declare const _default: {
    aspectRatio: {
        (_options?: Partial<import("./aspectRatio").AspectRatioOptions>): import("./base").Modifier<import("./aspectRatio").AspectRatioOptions, import("./base").ModifierState<import("./aspectRatio").AspectRatioOptions, {
            startCoords: import("../types").Point;
            startRect: import("../types").Rect;
            linkedEdges: import("../types").EdgeOptions;
            ratio: number;
            equalDelta: boolean;
            xIsPrimaryAxis: boolean;
            edgeSign: 1 | -1;
            subModification: import("./Modification").default;
        }, any>, "aspectRatio">;
        _defaults: import("./aspectRatio").AspectRatioOptions;
        _methods: {
            start: (arg: import("./base").ModifierArg<import("./base").ModifierState<import("./aspectRatio").AspectRatioOptions, {
                startCoords: import("../types").Point;
                startRect: import("../types").Rect;
                linkedEdges: import("../types").EdgeOptions;
                ratio: number;
                equalDelta: boolean;
                xIsPrimaryAxis: boolean;
                edgeSign: 1 | -1;
                subModification: import("./Modification").default;
            }, any>>) => void;
            set: (arg: import("./base").ModifierArg<import("./base").ModifierState<import("./aspectRatio").AspectRatioOptions, {
                startCoords: import("../types").Point;
                startRect: import("../types").Rect;
                linkedEdges: import("../types").EdgeOptions;
                ratio: number;
                equalDelta: boolean;
                xIsPrimaryAxis: boolean;
                edgeSign: 1 | -1;
                subModification: import("./Modification").default;
            }, any>>) => any;
            beforeEnd: (arg: import("./base").ModifierArg<import("./base").ModifierState<import("./aspectRatio").AspectRatioOptions, {
                startCoords: import("../types").Point;
                startRect: import("../types").Rect;
                linkedEdges: import("../types").EdgeOptions;
                ratio: number;
                equalDelta: boolean;
                xIsPrimaryAxis: boolean;
                edgeSign: 1 | -1;
                subModification: import("./Modification").default;
            }, any>>) => void | import("../types").Point;
            stop: (arg: import("./base").ModifierArg<import("./base").ModifierState<import("./aspectRatio").AspectRatioOptions, {
                startCoords: import("../types").Point;
                startRect: import("../types").Rect;
                linkedEdges: import("../types").EdgeOptions;
                ratio: number;
                equalDelta: boolean;
                xIsPrimaryAxis: boolean;
                edgeSign: 1 | -1;
                subModification: import("./Modification").default;
            }, any>>) => void;
        };
    };
    restrictEdges: {
        (_options?: Partial<import("./restrict/edges").RestrictEdgesOptions>): import("./base").Modifier<import("./restrict/edges").RestrictEdgesOptions, import("./base").ModifierState<import("./restrict/edges").RestrictEdgesOptions, {
            inner: import("../types").Rect;
            outer: import("../types").Rect;
            offset: import("../types").Rect;
        }, any>, "restrictEdges">;
        _defaults: import("./restrict/edges").RestrictEdgesOptions;
        _methods: {
            start: (arg: import("./base").ModifierArg<import("./base").ModifierState<import("./restrict/edges").RestrictEdgesOptions, {
                inner: import("../types").Rect;
                outer: import("../types").Rect;
                offset: import("../types").Rect;
            }, any>>) => void;
            set: (arg: import("./base").ModifierArg<import("./base").ModifierState<import("./restrict/edges").RestrictEdgesOptions, {
                inner: import("../types").Rect;
                outer: import("../types").Rect;
                offset: import("../types").Rect;
            }, any>>) => any;
            beforeEnd: (arg: import("./base").ModifierArg<import("./base").ModifierState<import("./restrict/edges").RestrictEdgesOptions, {
                inner: import("../types").Rect;
                outer: import("../types").Rect;
                offset: import("../types").Rect;
            }, any>>) => void | import("../types").Point;
            stop: (arg: import("./base").ModifierArg<import("./base").ModifierState<import("./restrict/edges").RestrictEdgesOptions, {
                inner: import("../types").Rect;
                outer: import("../types").Rect;
                offset: import("../types").Rect;
            }, any>>) => void;
        };
    };
    restrict: {
        (_options?: Partial<import("./restrict/pointer").RestrictOptions>): import("./base").Modifier<import("./restrict/pointer").RestrictOptions, import("./base").ModifierState<import("./restrict/pointer").RestrictOptions, {
            offset: import("../types").Rect;
        }, any>, "restrict">;
        _defaults: import("./restrict/pointer").RestrictOptions;
        _methods: {
            start: (arg: import("./base").ModifierArg<import("./base").ModifierState<import("./restrict/pointer").RestrictOptions, {
                offset: import("../types").Rect;
            }, any>>) => void;
            set: (arg: import("./base").ModifierArg<import("./base").ModifierState<import("./restrict/pointer").RestrictOptions, {
                offset: import("../types").Rect;
            }, any>>) => any;
            beforeEnd: (arg: import("./base").ModifierArg<import("./base").ModifierState<import("./restrict/pointer").RestrictOptions, {
                offset: import("../types").Rect;
            }, any>>) => void | import("../types").Point;
            stop: (arg: import("./base").ModifierArg<import("./base").ModifierState<import("./restrict/pointer").RestrictOptions, {
                offset: import("../types").Rect;
            }, any>>) => void;
        };
    };
    restrictRect: {
        (_options?: Partial<import("./restrict/pointer").RestrictOptions & {
            elementRect: {
                top: number;
                left: number;
                bottom: number;
                right: number;
            };
        }>): import("./base").Modifier<import("./restrict/pointer").RestrictOptions & {
            elementRect: {
                top: number;
                left: number;
                bottom: number;
                right: number;
            };
        }, import("./base").ModifierState<import("./restrict/pointer").RestrictOptions, {
            offset: import("../types").Rect;
        }, any>, "restrictRect">;
        _defaults: import("./restrict/pointer").RestrictOptions & {
            elementRect: {
                top: number;
                left: number;
                bottom: number;
                right: number;
            };
        };
        _methods: {
            start: (arg: import("./base").ModifierArg<import("./base").ModifierState<import("./restrict/pointer").RestrictOptions, {
                offset: import("../types").Rect;
            }, any>>) => void;
            set: (arg: import("./base").ModifierArg<import("./base").ModifierState<import("./restrict/pointer").RestrictOptions, {
                offset: import("../types").Rect;
            }, any>>) => any;
            beforeEnd: (arg: import("./base").ModifierArg<import("./base").ModifierState<import("./restrict/pointer").RestrictOptions, {
                offset: import("../types").Rect;
            }, any>>) => void | import("../types").Point;
            stop: (arg: import("./base").ModifierArg<import("./base").ModifierState<import("./restrict/pointer").RestrictOptions, {
                offset: import("../types").Rect;
            }, any>>) => void;
        };
    };
    restrictSize: {
        (_options?: Partial<import("./restrict/size").RestrictSizeOptions>): import("./base").Modifier<import("./restrict/size").RestrictSizeOptions, import("./base").ModifierState<import("./restrict/edges").RestrictEdgesOptions, {
            inner: import("../types").Rect;
            outer: import("../types").Rect;
            offset: import("../types").Rect;
        }, any>, "restrictSize">;
        _defaults: import("./restrict/size").RestrictSizeOptions;
        _methods: {
            start: (arg: import("./base").ModifierArg<import("./base").ModifierState<import("./restrict/edges").RestrictEdgesOptions, {
                inner: import("../types").Rect;
                outer: import("../types").Rect;
                offset: import("../types").Rect;
            }, any>>) => void;
            set: (arg: import("./base").ModifierArg<import("./base").ModifierState<import("./restrict/edges").RestrictEdgesOptions, {
                inner: import("../types").Rect;
                outer: import("../types").Rect;
                offset: import("../types").Rect;
            }, any>>) => any;
            beforeEnd: (arg: import("./base").ModifierArg<import("./base").ModifierState<import("./restrict/edges").RestrictEdgesOptions, {
                inner: import("../types").Rect;
                outer: import("../types").Rect;
                offset: import("../types").Rect;
            }, any>>) => void | import("../types").Point;
            stop: (arg: import("./base").ModifierArg<import("./base").ModifierState<import("./restrict/edges").RestrictEdgesOptions, {
                inner: import("../types").Rect;
                outer: import("../types").Rect;
                offset: import("../types").Rect;
            }, any>>) => void;
        };
    };
    snapEdges: {
        (_options?: Partial<Pick<import("./snap/pointer").SnapOptions, "enabled" | "offset" | "range" | "endOnly" | "targets">>): import("./base").Modifier<Pick<import("./snap/pointer").SnapOptions, "enabled" | "offset" | "range" | "endOnly" | "targets">, import("./base").ModifierState<import("./snap/pointer").SnapOptions, {
            offsets?: import("./snap/pointer").Offset[];
            closest?: any;
            targetFields?: string[][];
        }, any>, "snapEdges">;
        _defaults: Pick<import("./snap/pointer").SnapOptions, "enabled" | "offset" | "range" | "endOnly" | "targets">;
        _methods: {
            start: (arg: import("./base").ModifierArg<import("./base").ModifierState<import("./snap/pointer").SnapOptions, {
                offsets?: import("./snap/pointer").Offset[];
                closest?: any;
                targetFields?: string[][];
            }, any>>) => void;
            set: (arg: import("./base").ModifierArg<import("./base").ModifierState<import("./snap/pointer").SnapOptions, {
                offsets?: import("./snap/pointer").Offset[];
                closest?: any;
                targetFields?: string[][];
            }, any>>) => any;
            beforeEnd: (arg: import("./base").ModifierArg<import("./base").ModifierState<import("./snap/pointer").SnapOptions, {
                offsets?: import("./snap/pointer").Offset[];
                closest?: any;
                targetFields?: string[][];
            }, any>>) => void | import("../types").Point;
            stop: (arg: import("./base").ModifierArg<import("./base").ModifierState<import("./snap/pointer").SnapOptions, {
                offsets?: import("./snap/pointer").Offset[];
                closest?: any;
                targetFields?: string[][];
            }, any>>) => void;
        };
    };
    snap: {
        (_options?: Partial<import("./snap/pointer").SnapOptions>): import("./base").Modifier<import("./snap/pointer").SnapOptions, import("./base").ModifierState<import("./snap/pointer").SnapOptions, {
            offsets?: import("./snap/pointer").Offset[];
            closest?: any;
            targetFields?: string[][];
        }, any>, "snap">;
        _defaults: import("./snap/pointer").SnapOptions;
        _methods: {
            start: (arg: import("./base").ModifierArg<import("./base").ModifierState<import("./snap/pointer").SnapOptions, {
                offsets?: import("./snap/pointer").Offset[];
                closest?: any;
                targetFields?: string[][];
            }, any>>) => void;
            set: (arg: import("./base").ModifierArg<import("./base").ModifierState<import("./snap/pointer").SnapOptions, {
                offsets?: import("./snap/pointer").Offset[];
                closest?: any;
                targetFields?: string[][];
            }, any>>) => any;
            beforeEnd: (arg: import("./base").ModifierArg<import("./base").ModifierState<import("./snap/pointer").SnapOptions, {
                offsets?: import("./snap/pointer").Offset[];
                closest?: any;
                targetFields?: string[][];
            }, any>>) => void | import("../types").Point;
            stop: (arg: import("./base").ModifierArg<import("./base").ModifierState<import("./snap/pointer").SnapOptions, {
                offsets?: import("./snap/pointer").Offset[];
                closest?: any;
                targetFields?: string[][];
            }, any>>) => void;
        };
    };
    snapSize: {
        (_options?: Partial<Pick<import("./snap/pointer").SnapOptions, "enabled" | "offset" | "range" | "endOnly" | "targets">>): import("./base").Modifier<Pick<import("./snap/pointer").SnapOptions, "enabled" | "offset" | "range" | "endOnly" | "targets">, import("./base").ModifierState<import("./snap/pointer").SnapOptions, {
            offsets?: import("./snap/pointer").Offset[];
            closest?: any;
            targetFields?: string[][];
        }, any>, "snapSize">;
        _defaults: Pick<import("./snap/pointer").SnapOptions, "enabled" | "offset" | "range" | "endOnly" | "targets">;
        _methods: {
            start: (arg: import("./base").ModifierArg<import("./base").ModifierState<import("./snap/pointer").SnapOptions, {
                offsets?: import("./snap/pointer").Offset[];
                closest?: any;
                targetFields?: string[][];
            }, any>>) => void;
            set: (arg: import("./base").ModifierArg<import("./base").ModifierState<import("./snap/pointer").SnapOptions, {
                offsets?: import("./snap/pointer").Offset[];
                closest?: any;
                targetFields?: string[][];
            }, any>>) => any;
            beforeEnd: (arg: import("./base").ModifierArg<import("./base").ModifierState<import("./snap/pointer").SnapOptions, {
                offsets?: import("./snap/pointer").Offset[];
                closest?: any;
                targetFields?: string[][];
            }, any>>) => void | import("../types").Point;
            stop: (arg: import("./base").ModifierArg<import("./base").ModifierState<import("./snap/pointer").SnapOptions, {
                offsets?: import("./snap/pointer").Offset[];
                closest?: any;
                targetFields?: string[][];
            }, any>>) => void;
        };
    };
    spring: import("./base").ModifierFunction<any, any, "noop">;
    avoid: import("./base").ModifierFunction<any, any, "noop">;
    transform: import("./base").ModifierFunction<any, any, "noop">;
    rubberband: import("./base").ModifierFunction<any, any, "noop">;
};
export default _default;