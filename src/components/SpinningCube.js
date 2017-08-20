import React, { Component } from "react"
import *  as THREE from "three"
class SpinningCube extends Component {
  componentDidMount() {
    const { width, height } = this.props
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );
    this.refs.anchor.appendChild(renderer.domElement);
    const geometry = new THREE.BoxGeometry(1,1,1)
    const material = new THREE.MeshBasicMaterial({ color: 0xeeffff})
    const cube = new THREE.Mesh(geometry,  material)
    scene.add(cube)
    camera.position.z = 5
    function animate() {
      requestAnimationFrame(animate)
      cube.rotation.x += 0.1;
      cube.rotation.y += 1.1;
      renderer.render(scene, camera);
    }
    animate()
  }
  render() {
    const { width, height } = this.props
    return (
      <div ref="anchor" style={{ width, height }}></div>
    )
  }
}

export default SpinningCube;
