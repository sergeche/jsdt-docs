/**
 * @author Sergey Chikuyonok (sc@design.ru)
 * @copyright Art.Lebedev Studio (http://www.artlebedev.ru)
 */

/**
 * Элемент &lt;canvas&gt;
 * 
 * @class
 */
function HTMLCanvasElement() {
}
HTMLCanvasElement.prototype = new HTMLElement();

/**
 * Ширина холста
 * 
 * @type {Number}
 */
HTMLCanvasElement.prototype.width = 0;

/**
 * Высота холста
 * 
 * @type {Number}
 */
HTMLCanvasElement.prototype.height = 0;

/**
 * Returns a <b>data:</b> URL containing a representation of the image as a PNG
 * file
 * 
 * @return {String}
 */
HTMLCanvasElement.prototype.toDataURL = function() {
}

/**
 * Returns a reference to drawing context
 * 
 * @param {String}
 *            contextId ID of context (only "2d" is supported)
 * @return {CanvasRenderingContext2D}
 */
HTMLCanvasElement.prototype.getContext = function(contextId) {
}

/**
 * The 2D context, representing a flat Cartesian surface whose origin (0,0) is
 * at the top left corner, with the coordinate space having x values increasing
 * when going right, and y values increasing when going down.
 */
function CanvasRenderingContext2D() {
}

CanvasRenderingContext2D.prototype = {
	/**
	 * Back-reference to the canvas
	 * 
	 * @type {HTMLCanvasElement}
	 */
	canvas : {},

	/**
	 * Push current state on state stack
	 */
	save : function() {
	},

	/**
	 * Pop state stack and restore state
	 */
	restore : function() {
	},

	/**
	 * Add the scaling transformation described by the arguments to the
	 * transformation matrix. The <code>x</code> argument represents the scale
	 * factor in the horizontal direction and the <code>y</code> argument
	 * represents the scale factor in the vertical direction. The factors are
	 * multiples.
	 * 
	 * @param {Number}
	 *            x
	 * @param {Number}
	 *            y
	 */
	scale : function(x, y) {
	},

	/**
	 * Add the rotation transformation described by the argument to the
	 * transformation matrix. The <code>angle</code> argument represents a
	 * clockwise rotation angle expressed in radians.
	 * 
	 * @param {Number}
	 *            angle Angle in radians
	 */
	rotate : function(angle) {
	},

	/**
	 * Add the translation transformation described by the arguments to the
	 * transformation matrix. The <code>x</code> argument represents the
	 * translation distance in the horizontal direction and the <code>y</code>
	 * argument represents the translation distance in the vertical direction.
	 * The arguments are in coordinate space units.
	 * 
	 * @param {Number}
	 *            x
	 * @param {Number}
	 *            y
	 */
	translate : function(x, y) {
	},

	/**
	 * Multiply the current transformation matrix with the matrix described by:<br>
	 * m11 m21 dx<br>
	 * m12 m22 dy<br>
	 * 0 0 1
	 * 
	 * @param {Number}
	 *            m11
	 * @param {Number}
	 *            m12
	 * @param {Number}
	 *            m21
	 * @param {Number}
	 *            m22
	 * @param {Number}
	 *            dx
	 * @param {Number}
	 *            dy
	 */
	transform : function(m11, m12, m21, m22, dx, dy) {
	},

	/**
	 * Reset the current transform to the identity matrix, and then invoke the
	 * <code>transform(m11, m12, m21, m22, dx, dy)</code> method with the same
	 * arguments.
	 * 
	 * @see CanvasRenderingContext2D#transform
	 * @param {Number}
	 *            m11
	 * @param {Number}
	 *            m12
	 * @param {Number}
	 *            m21
	 * @param {Number}
	 *            m22
	 * @param {Number}
	 *            dx
	 * @param {Number}
	 *            dy
	 */
	setTransform : function(m11, m12, m21, m22, dx, dy) {
	},

	/**
	 * The <code>globalAlpha</code> attribute gives an alpha value that is
	 * applied to shapes and images before they are composited onto the canvas.
	 * The value must be in the range from 0.0 (fully transparent) to 1.0 (no
	 * additional transparency). If an attempt is made to set the attribute to a
	 * value outside this range, the attribute must retain its previous value.
	 * When the context is created, the <code>globalAlpha</code> attribute
	 * must initially have the value 1.0.
	 * 
	 * @type {Number}
	 */
	globalAlpha : 1.0,

	/**
	 * The globalCompositeOperation attribute sets how shapes and images are
	 * drawn onto the existing bitmap, once they have had
	 * <code>globalAlpha</code> and the current transformation matrix applied.
	 * It must be set to a value from the following list. In the descriptions
	 * below, the source image, A, is the shape or image being rendered, and the
	 * destination image, B, is the current state of the bitmap.<br>
	 * <br>
	 * <b>source-atop</b> : A atop B. Display the source image wherever both
	 * images are opaque. Display the destination image wherever the destination
	 * image is opaque but the source image is transparent. Display transparency
	 * elsewhere.<br>
	 * <b>source-in</b> : A in B. Display the source image wherever both the
	 * source image and destination image are opaque. Display transparency
	 * elsewhere.<br>
	 * <b>source-out</b> : A out B. Display the source image wherever the
	 * source image is opaque and the destination image is transparent. Display
	 * transparency elsewhere.<br>
	 * <b>source-over</b> (default) : A over B. Display the source image
	 * wherever the source image is opaque. Display the destination image
	 * elsewhere.<br>
	 * <b>destination-atop</b> : B atop A. Same as <i>source-atop</i> but
	 * using the destination image instead of the source image and vice versa.<br>
	 * <b>destination-in</b> : B in A. Same as source-in but using the
	 * destination image instead of the source image and vice versa.<br>
	 * <b>destination-out</b> : B out A. Same as <i>source-out</i>, but using
	 * the destination image instead of the source image and vice versa.<br>
	 * <b>destination-over</b> : B over A. Same as <i>source-over</i> but
	 * using the destination image instead of the source image and vice versa.
	 * <br>
	 * <b>lighter</b> A plus B. Display the sum of the source image and
	 * destination image, with color values approaching 1 as a limit.<br>
	 * <b>copy</b> : A (B is ignored). Display the source image instead of the
	 * destination image.<br>
	 * <b>xor</b> : A xor B. Exclusive OR of the source image and destination
	 * image.
	 * 
	 * 
	 * @type {String}
	 */
	globalCompositeOperation : 'source-over',

	/**
	 * Represents the color or style to use for the lines around shapes. Can be
	 * either string (CSS <i>color</i> value), <code>CanvasGradient</code>,
	 * or <code>CanvasPattern</code>.
	 * 
	 * @type {String}
	 */
	strokeStyle : '#000000',

	/**
	 * Represents the color or style to use inside the shapes. Can be either
	 * string (CSS <i>color</i> value), <code>CanvasGradients</code>, or
	 * <code>CanvasPatterns</code>.
	 * 
	 * @type {String}
	 */
	fillStyle : '#ffffff',

	/**
	 * Takes four arguments that represent the start point (<code>x0</code>,
	 * <code>y0</code>) and end point (<code>x1</code>, <code>y1</code>)
	 * and creates linear gradient
	 * 
	 * @param {Number}
	 *            x0 Start point X
	 * @param {Number}
	 *            y0 Start point Y
	 * @param {Number}
	 *            x1 End point X
	 * @param {Number}
	 *            y1 End point Y
	 * @return {CanvasGradient}
	 */
	createLinearGradient : function(x0, y0, x1, y1) {
	},

	/**
	 * Takes six arguments, the first three representing the start circle with
	 * origin (<code>x0</code>, <code>y0</code>) and radius
	 * <code>r0</code>, and the last three representing the end circle with
	 * origin (<code>x1</code>, <code>y1</code>) and radius
	 * <code>r1</code> and creates radial gradient
	 * 
	 * @param {Number}
	 *            x0 Start circle origin X
	 * @param {Number}
	 *            y0 Start circle origin Y
	 * @param {Number}
	 *            r0 Start circle radius
	 * @param {Number}
	 *            x1 End circle origin X
	 * @param {Number}
	 *            y1 End circle origin Y
	 * @param {Number}
	 *            r1 End circle radius
	 * @return {CanvasGradient}
	 */
	createRadialGradient : function(x0, y0, r0, x1, y1, r1) {
	},

	/**
	 * Creates image pattern
	 * 
	 * @param {Image}
	 *            image
	 * @param {String}
	 *            repetition Pattern repetition: 'repeat' (default), 'repeat-x',
	 *            'repeat-y', 'no-repeat'
	 * @return {CanvasPattern}
	 */
	createPattern : function(image, repetition) {
	},

	/**
	 * Width of shape lines, in coordinate space units
	 * 
	 * @type {Number}
	 */
	lineWidth : 1,

	/**
	 * Defines the type of endings on the end of lines. The three valid values
	 * are:<br>
	 * <br>
	 * <b>butt</b> : the end of each line has a flat edge perpendicular to the
	 * direction of the line (no additional line cap is added)<br>
	 * <b>round</b> : a semi-circle with the diameter equal to the width of the
	 * line added on to the end of the line.<br>
	 * <b>square</b> : a rectangle with the length of the line width and the
	 * width of half the line width, placed flat against the edge perpendicular
	 * to the direction of the line, added at the end of each line.
	 * 
	 * @type {String}
	 */
	lineCap : 'butt',

	/**
	 * Defines the type of corners that will be placed where two lines meet. The
	 * three valid values are 'bevel', 'round', and 'miter' (default).
	 * 
	 * @type {String}
	 */
	lineJoin : 'miter',

	/**
	 * The miter limit ratio
	 * 
	 * @type {Number}
	 */
	miterLimit : 10,

	/**
	 * Sets the color of the shadow in CSS <i>color</i> notation
	 * 
	 * @type {String}
	 */
	shadowColor : '#000000',

	/**
	 * The distance that the shadow will be offset in the positive horizontal
	 * direction
	 * 
	 * @type {Number}
	 */
	shadowOffsetX : 0,

	/**
	 * The distance that the shadow will be offset in the positive vertical
	 * direction
	 * 
	 * @type {Number}
	 */
	shadowOffsetY : 0,

	/**
	 * Size of the blurring effect
	 * 
	 * @type {Number}
	 */
	shadowBlur : 0,

	/**
	 * Clear the pixels in the specified rectangle that also intersect the
	 * current clipping region to a fully transparent black, erasing any
	 * previous image. If either height or width are zero, this method has no
	 * effect.
	 * 
	 * @param {Number}
	 *            x X-coordinate of rectangle
	 * @param {Number}
	 *            y Y-coordinate of rectangle
	 * @param {Number}
	 *            w Width of rectangle
	 * @param {Number}
	 *            h Height of rectangle
	 */
	clearRect : function(x, y, w, h) {
	},

	/**
	 * Paint the specified rectangular area using the <code>fillStyle</code>
	 * 
	 * @param {Number}
	 *            x X-coordinate of rectangle
	 * @param {Number}
	 *            y Y-coordinate of rectangle
	 * @param {Number}
	 *            w Width of rectangle
	 * @param {Number}
	 *            h Height of rectangle
	 */
	fillRect : function(x, y, w, h) {
	},

	/**
	 * Stroke the specified rectangle's path using the <code>strokeStyle</code>,
	 * <code>lineWidth</code>, <code>lineJoin</code>, and (if appropriate)
	 * <code>miterLimit</code> attributes
	 * 
	 * @param {Number}
	 *            x X-coordinate of rectangle
	 * @param {Number}
	 *            y Y-coordinate of rectangle
	 * @param {Number}
	 *            w Width of rectangle
	 * @param {Number}
	 *            h Height of rectangle
	 */
	strokeRect : function(x, y, w, h) {
	},

	/**
	 * Empty the list of subpaths so that the context once again has zero
	 * subpaths.
	 */
	beginPath : function() {
	},

	/**
	 * Create a new subpath with the specified point as its first (and only)
	 * point.
	 * 
	 * @param {Number}
	 *            x
	 * @param {Number}
	 *            y
	 */
	moveTo : function(x, y) {
	},

	/**
	 * Mark the last subpath as closed, create a new subpath whose first point
	 * is the same as the previous subpath's first point, and finally add this
	 * new subpath to the path.
	 */
	closePath : function() {
	},

	/**
	 * Connect the last point in the subpath to the given point using a straight
	 * line, and must then add the given point to the subpath.
	 * 
	 * @param {Number}
	 *            x
	 * @param {Number}
	 *            y
	 */
	lineTo : function(x, y) {
	},

	/**
	 * Connect the last point in the subpath to the given point (x, y) using a
	 * quadratic Bézier curve with control point (cpx, cpy), and must then add
	 * the given point (x, y) to the subpath
	 * 
	 * @param {Number}
	 *            cpx
	 * @param {Number}
	 *            cpy
	 * @param {Number}
	 *            x
	 * @param {Number}
	 *            y
	 */
	quadraticCurveTo : function(cpx, cpy, x, y) {
	},
	
	/**
	 * Connect the last point in the subpath to the given point (x, y) using a cubic Bézier curve with control points (cp1x, cp1y) and (cp2x, cp2y). Then, it must add the point (x, y) to the subpath.
	 * @param {Number} cp1x
	 * @param {Number} cp1y
	 * @param {Number} cp2x
	 * @param {Number} cp2y
	 * @param {Number} x
	 * @param {Number} y
	 */
	bezierCurveTo: function(cp1x, cp1y, cp2x, cp2y, x, y){},
	
	/**
	 * Draw arc of <code>radius</code> at point (<code>x</code>, <code>y</code>), starting from angle <code>startAngle</code>
	 * and ending in <code>endAngle</code>
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} radius
	 * @param {Number} startAngle Start angle in radians
	 * @param {Number} endAngle End angle in radians
	 * @param {Boolean} anticlockwise Drawing direction
	 */
	arc: function(x, y, radius, startAngle, endAngle, anticlockwise){},
	
	/**
	 * Creates four closed subpaths as rectangle
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} w
	 * @param {Number} h
	 */
	rect: function(x, y, w, h){},
	
	/**
	 * Fill all the subpaths of the current path using <code>fillStyle</code>
	 */
	fill: function(){},
	
	/**
	 * Strokes all the subpaths with <code>strokeStyle</code>
	 */
	stroke: function(){},
	
	/**
	 * Create a new clipping region by calculating the intersection of the current clipping region and the area described by the current path
	 */
	clip: function(){},
	
	/**
	 * Check if the point given by the x and y coordinates  is inside the current path
	 * @param {Number} x
	 * @param {Number} y
	 */
	isPointInPath: function(x, y){},
	
	/**
	 * Draw image on canvas<br><br>
	 * <b>Alternative:</b><br>
	 * drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)
	 * @param {HTMLImageElement} image Image to draw
	 * @param {Number} dx Destination X
	 * @param {Number} dy Destination Y
	 * @param {Number} [dw] Destination width
	 * @param {Number} [dh] Destination height
	 */
	drawImage: function(image, dx, dy, dw, dh){}
};

/**
 * @class
 */
function CanvasGradient(){};

CanvasGradient.prototype = {
	/**
	 * Adds a new stop to a gradient
	 * @param {Number} offset Color stop offset (from 0 to 1)
	 * @param {String} color Color in CSS <i>color</i> notation
	 */
	addColorStop: function(offset, color){}
};

/**
 * @class
 */
function CanvasPattern(){}