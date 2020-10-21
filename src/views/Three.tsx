import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { Canvas, useFrame } from 'react-three-fiber'
import { softShadows, MeshWobbleMaterial, OrbitControls, Html } from 'drei'
interface Props {}
interface meshProps {
	size: [number, number, number]
	position: [number, number, number]
	color: string
}

/* softShadows({
	frustrum: 3.75, // Frustrum width (default: 3.75)
	size: 0.005, // World size (default: 0.005)
	near: 9.5, // Near plane (default: 9.5)
	samples: 17, // Samples (default: 17)
	rings: 11, // Rings (default: 11)
}) */

const CanvasWrapper = styled.div`
	height: 100vh;
	/* pointer-events: none; */
`

const Shape: React.FC<meshProps> = ({
	size,
	position: defaultPosition,
	color: defaultColor,
}) => {
	const mesh = useRef<any>(null)
	const [hovered, setHover] = useState<boolean>(false)
	const tooltipPosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
	const [color, setColor] = useState<string>(defaultColor)

	useFrame(() => {
		/* mesh.current.rotation.x += 0.001
		mesh.current.rotation.y += 0.002 */
	})

	const handleOver = (e: React.SyntheticEvent) => {
		setHover(true)
		mesh.current.rotation.x += 15
		setColor('red')
	}

	const handleOut = (e: React.SyntheticEvent) => {
		setHover(false)
		tooltipPosition.current.x = 20
		setColor(defaultColor)
	}

	const handleWheel = (e: React.SyntheticEvent) => {
		if (hovered) {
			e.preventDefault()
			console.log(e)
		}
	}

	return (
		<mesh
			onWheel={handleWheel}
			onPointerOver={handleOver}
			onPointerOut={handleOut}
			castShadow
			ref={mesh}
			position={defaultPosition}>
			<boxBufferGeometry attach='geometry' args={size} />
			<meshStandardMaterial attach='material' color={color} />
		</mesh>
	)
}
const Three: React.FC<Props> = ({}) => {
	return (
		<>
			<CanvasWrapper>
				<Canvas
					shadowMap
					colorManagement
					camera={{ position: [0, 10, -15], fov: 90 }}>
					<pointLight position={[-10, 0, 5]} intensity={0.3} />
					<ambientLight intensity={0.2} />
					<spotLight position={[0, 20, -3]} intensity={0.5} castShadow />
					<directionalLight
						position={[0, 10, 0]}
						intensity={2}
						shadow-mapSize-height={1024}
						shadow-mapSize-width={1024}
						shadow-camera-far={50}
						shadow-camera-top={10}
						shadow-camera-bottom={10}
						shadow-camera-left={10}
						shadow-camera-right={10}
						castShadow
					/>
					<fog attach='fog' args={['white', 10, 30]} />
					<Html position={[0, 10, -20]}>
						<p>Welcome to the app!</p>
					</Html>
					<Html position={[0, 10, 0]}>
						<p>This is some wonderful HTML</p>
					</Html>
					<Shape size={[1, 1, 1]} position={[2, 5, -3]} color={'lightblue'} />
					<Shape size={[2, 2, 1]} position={[-5, 7, -2]} color={'violet'} />
					<Shape size={[2, 2, 1]} position={[5, 2, 3]} color={'hotpink'} />

					<group>
						<mesh
							receiveShadow
							rotation={[-Math.PI / 2, 0, 0]}
							position={[0, 1, 0]}>
							<planeBufferGeometry attach='geometry' args={[100, 100]} />
							{/* <meshStandardMaterial attach='material' color={'lightgreen'} /> */}
							{/* <shadowMaterial attach='material' opacity={0.9} /> */}
							<meshPhysicalMaterial attach='material' color='green' />
						</mesh>
					</group>

					<OrbitControls />
				</Canvas>
			</CanvasWrapper>
		</>
	)
}

export default Three
