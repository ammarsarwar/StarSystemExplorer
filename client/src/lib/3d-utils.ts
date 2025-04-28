import * as THREE from "three";

// Create a star field to use as a background in Three.js scenes
export function createStarField(count = 10000) {
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const sizes = new Float32Array(count);

  for (let i = 0; i < count; i++) {
    // Random positions for stars in a sphere
    const radius = Math.random() * 1000 + 500;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    
    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = radius * Math.cos(phi);
    
    // Random sizes
    sizes[i] = Math.random() * 2 + 0.5;
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

  // Star material
  const material = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 2,
    transparent: true,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true,
  });

  return new THREE.Points(geometry, material);
}

// Create a pulsating effect for planet atmospheres
export function createPulsatingLight(color: string, intensity = 1, distance = 100) {
  const light = new THREE.PointLight(color, intensity, distance);
  light.position.set(0, 0, 0);
  
  return {
    light,
    update: (time: number) => {
      // Pulsating intensity based on time
      light.intensity = intensity * (0.9 + 0.2 * Math.sin(time * 0.5));
    }
  };
}

// Load a texture for a planet
export async function loadPlanetTexture(textureUrl: string) {
  const textureLoader = new THREE.TextureLoader();
  return new Promise<THREE.Texture>((resolve) => {
    textureLoader.load(
      textureUrl,
      (texture) => {
        resolve(texture);
      }
    );
  });
}

// Create a basic planet with texture
export function createPlanet(radius: number, textureUrl: string) {
  const geometry = new THREE.SphereGeometry(radius, 64, 64);
  const material = new THREE.MeshStandardMaterial({
    roughness: 1,
    metalness: 0,
  });
  
  const mesh = new THREE.Mesh(geometry, material);
  
  // Load and apply texture
  const textureLoader = new THREE.TextureLoader();
  textureLoader.load(textureUrl, (texture) => {
    material.map = texture;
    material.needsUpdate = true;
  });
  
  return mesh;
}

// Create geometric overlay lines for planets (No Man's Sky style)
export function createGeometricOverlay(radius: number) {
  const group = new THREE.Group();
  
  // Create polygons and lines
  const polygonGeometry = new THREE.RingGeometry(radius * 0.9, radius * 0.9 + 0.1, 6);
  const lineMaterial = new THREE.LineBasicMaterial({ 
    color: 0xffffff, 
    transparent: true,
    opacity: 0.3
  });
  
  const polygon = new THREE.LineLoop(polygonGeometry, lineMaterial);
  group.add(polygon);
  
  // Inner polygon
  const innerPolygonGeometry = new THREE.RingGeometry(radius * 0.6, radius * 0.6 + 0.1, 6);
  const innerPolygon = new THREE.LineLoop(innerPolygonGeometry, lineMaterial);
  group.add(innerPolygon);
  
  // Connecting lines
  for (let i = 0; i < 6; i++) {
    const lineGeometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(
        radius * 0.9 * Math.cos(i * Math.PI / 3),
        radius * 0.9 * Math.sin(i * Math.PI / 3),
        0
      ),
      new THREE.Vector3(
        radius * 0.6 * Math.cos(i * Math.PI / 3),
        radius * 0.6 * Math.sin(i * Math.PI / 3),
        0
      )
    ]);
    
    const line = new THREE.Line(lineGeometry, lineMaterial);
    group.add(line);
  }
  
  return group;
}
