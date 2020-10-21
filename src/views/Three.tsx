import React, { useRef } from 'react'
import styled from 'styled-components'
import { Canvas, useFrame } from 'react-three-fiber'
import { softShadows, MeshWobbleMaterial, OrbitControls, Box } from 'drei'
interface Props {}

softShadows({})

const CanvasWrapper = styled.div`
	height: 100vh;

	& canvas {
		height: 100%;
		width: 100%;
	}
`

const Three: React.FC<Props> = ({}) => {
	const mesh = useRef<any>(null)
	useFrame(() => {
		mesh.current.rotation.x += 2
	})
	return (
		<>
			<CanvasWrapper>
				<Canvas>
					<mesh ref={mesh}>
						<boxBufferGeometry attach='geometry' args={[2, 2, 1]} />
						<meshStandardMaterial attach='material' />
					</mesh>

					<OrbitControls />
				</Canvas>
			</CanvasWrapper>
		</>
	)
}

export default Three
