# hwtest

A quick benchmark to show that gpu-acceleration via css property `translate3d(x,y,z)` can sometimes be slower than non-accelerated version if a lot of objects are being moved.

# Start demo

Just open index.html

Enable checkbox "GPU Acceleration" and choose enough boxes to make the animation stutter heavily. Now turn off GPU acceleration. The animation should now be improved.
