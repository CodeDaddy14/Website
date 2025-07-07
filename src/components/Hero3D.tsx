import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text3D, OrbitControls, Sphere, MeshDistortMaterial, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Code, Palette, Brain } from 'lucide-react';
import * as THREE from 'three';

const FloatingGeometry: React.FC<{ position: [number, number, number]; color: string }> = ({ position, color }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3;
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime) * 0.2;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={[0.3, 0]} />
        <meshStandardMaterial color={color} wireframe />
      </mesh>
    </Float>
  );
};

const AnimatedSphere: React.FC = () => {
  const sphereRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      sphereRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Sphere ref={sphereRef} args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#4F46E5"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0}
        transparent
        opacity={0.8}
      />
    </Sphere>
  );
};

const ParticleField: React.FC = () => {
  const points = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.x = state.clock.elapsedTime * 0.05;
      points.current.rotation.y = state.clock.elapsedTime * 0.075;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.015} color="#60A5FA" transparent opacity={0.6} />
    </points>
  );
};

const Hero3D: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Environment preset="night" />
          
          <ParticleField />
          <AnimatedSphere />
          
          <FloatingGeometry position={[-3, 2, -2]} color="#10B981" />
          <FloatingGeometry position={[3, -1, -1]} color="#F59E0B" />
          <FloatingGeometry position={[-2, -2, 1]} color="#EF4444" />
          <FloatingGeometry position={[2, 2, 0]} color="#8B5CF6" />
          
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Floating Interactive Elements */}
      <motion.div 
        className="absolute top-20 left-10"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-400/30 hover:scale-110 transition-transform cursor-pointer">
          <Code className="w-8 h-8 text-blue-400" />
        </div>
      </motion.div>

      <motion.div 
        className="absolute top-40 right-20"
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -5, 5, 0]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-emerald-400/30 hover:scale-110 transition-transform cursor-pointer">
          <Palette className="w-6 h-6 text-emerald-400" />
        </div>
      </motion.div>

      <motion.div 
        className="absolute bottom-40 left-20"
        animate={{ 
          y: [0, -10, 0],
          x: [0, 10, 0]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <div className="w-14 h-14 bg-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-purple-400/30 hover:scale-110 transition-transform cursor-pointer">
          <Brain className="w-7 h-7 text-purple-400" />
        </div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Animated Badge */}
          <motion.div 
            className="inline-flex items-center px-6 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-blue-400 mr-2" />
            {/* <span className="text-blue-300 text-sm font-medium">Digital Innovation Studio</span> */}
          </motion.div>

          {/* Main Heading with 3D Text Effect */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              <motion.span
                className="block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                We Create
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: "200% 200%"
                }}
                whileHover={{ scale: 1.1 }}
              >
                Digital Magic
              </motion.span>
            </h1>
          </motion.div>

          {/* Animated Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A boutique team of 4 creative minds specializing in branding, UI/UX design, 
            full-stack development, and cutting-edge AI solutions
          </motion.p>

          {/* Interactive CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button 
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold rounded-full relative overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">View Our Work</span>
              <ArrowRight className="ml-2 w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button 
              className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full backdrop-blur-sm relative overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Meet the Team
            </motion.button>
          </motion.div>

          {/* Animated Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { number: "50+", label: "Projects Delivered" },
              { number: "4", label: "Expert Team Members" },
              { number: "3", label: "Years Experience" },
              { number: "100%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center group cursor-pointer"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="text-3xl md:text-4xl font-bold text-white mb-2"
                  animate={{ 
                    textShadow: [
                      "0 0 0px rgba(59, 130, 246, 0)",
                      "0 0 20px rgba(59, 130, 246, 0.5)",
                      "0 0 0px rgba(59, 130, 246, 0)"
                    ]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-slate-400 group-hover:text-blue-300 transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Interactive Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.2 }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center relative overflow-hidden">
          <motion.div 
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
            animate={{ 
              y: [0, 16, 0],
              opacity: [1, 0, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>

      {/* Interactive Cursor Trail Effect */}
      <div className="pointer-events-none fixed inset-0 z-30">
        <div className="absolute w-4 h-4 bg-blue-400 rounded-full opacity-50 animate-ping" style={{ 
          left: 'var(--mouse-x, 50%)', 
          top: 'var(--mouse-y, 50%)',
          transform: 'translate(-50%, -50%)'
        }} />
      </div>
    </section>
  );
};

export default Hero3D;