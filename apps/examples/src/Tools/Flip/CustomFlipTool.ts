// flipShapes(shapes: TLShapeId[] | TLShape[], operation: 'horizontal' | 'vertical'): this {
//         const ids =
//             typeof shapes[0] === 'string'
//                 ? (shapes as TLShapeId[])
//                 : (shapes as TLShape[]).map((s) => s.id)

//         if (this.getIsReadonly()) return this

//         let shapesToFlip = compact(ids.map((id) => this.getShape(id)))

//         if (!shapesToFlip.length) return this

//         shapesToFlip = compact(
//             shapesToFlip
//                 .map((shape) => {
//                     if (this.isShapeOfType<TLGroupShape>(shape, 'group')) {
//                         return this.getSortedChildIdsForParent(shape.id).map((id) => this.getShape(id))
//                     }

//                     return shape
//                 })
//                 .flat()
//         )

//         const scaleOriginPage = Box.Common(
//             compact(shapesToFlip.map((id) => this.getShapePageBounds(id)))
//         ).center

//         this.run(() => {
//             for (const shape of shapesToFlip) {
//                 const bounds = this.getShapeGeometry(shape).bounds
//                 const initialPageTransform = this.getShapePageTransform(shape.id)
//                 if (!initialPageTransform) continue
//                 this.resizeShape(
//                     shape.id,
//                     { x: operation === 'horizontal' ? -1 : 1, y: operation === 'vertical' ? -1 : 1 },
//                     {
//                         initialBounds: bounds,
//                         initialPageTransform,
//                         initialShape: shape,
//                         mode: 'scale_shape',
//                         isAspectRatioLocked: this.getShapeUtil(shape).isAspectRatioLocked(shape),
//                         scaleOrigin: scaleOriginPage,
//                         scaleAxisRotation: 0,
//                     }
//                 )
//             }
//         })

//         return this
//     }
