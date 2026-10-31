/**
 * ARKENOR LABS — Hero Abstract Digital Architecture Canvas
 * Renders an enterprise-grade interactive topology network:
 * Connected geometric nodes, pulsing data packets, and subtle telemetry conduits.
 */

(function () {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let animationFrameId;
  let width = 0;
  let height = 0;
  let dpr = 1;

  // Mouse interaction state
  const mouse = {
    x: -1000,
    y: -1000,
    radius: 140
  };

  // Node & Packet model
  const NODES_COUNT = 42;
  const nodes = [];
  const packets = [];

  class Node {
    constructor(x, y, isNexus = false) {
      this.baseX = x;
      this.baseY = y;
      this.x = x;
      this.y = y;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.radius = isNexus ? 4.5 : Math.random() * 2 + 1.8;
      this.isNexus = isNexus;
      this.pulse = Math.random() * Math.PI;
      this.pulseSpeed = 0.02 + Math.random() * 0.02;
    }

    update() {
      this.pulse += this.pulseSpeed;

      // Gentle floating drift
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 30 || this.x > width - 30) this.vx *= -1;
      if (this.y < 30 || this.y > height - 30) this.vy *= -1;

      // Interactive mouse deflection
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < mouse.radius && dist > 0) {
        const force = (1 - dist / mouse.radius) * 1.5;
        this.x -= (dx / dist) * force;
        this.y -= (dy / dist) * force;
      }
    }

    draw() {
      ctx.save();
      const currentRadius = this.radius + Math.sin(this.pulse) * 0.8;

      if (this.isNexus) {
        // Subtle glow halo
        ctx.beginPath();
        ctx.arc(this.x, this.y, currentRadius * 3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 191, 165, 0.08)';
        ctx.fill();

        // Outer hexagon ring
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (Math.PI / 3) * i + this.pulse * 0.2;
          const hx = this.x + Math.cos(angle) * (currentRadius * 2);
          const hy = this.y + Math.sin(angle) * (currentRadius * 2);
          if (i === 0) ctx.moveTo(hx, hy);
          else ctx.lineTo(hx, hy);
        }
        ctx.closePath();
        ctx.strokeStyle = 'rgba(0, 191, 165, 0.4)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Core dot
        ctx.beginPath();
        ctx.arc(this.x, this.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = '#00BFA5';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(this.x, this.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();
      } else {
        // Standard technical node
        ctx.beginPath();
        ctx.arc(this.x, this.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(132, 147, 155, 0.7)';
        ctx.fill();
      }
      ctx.restore();
    }
  }

  class DataPacket {
    constructor(nodeA, nodeB) {
      this.nodeA = nodeA;
      this.nodeB = nodeB;
      this.progress = 0;
      this.speed = 0.007 + Math.random() * 0.008;
    }

    update() {
      this.progress += this.speed;
      return this.progress < 1;
    }

    draw() {
      const px = this.nodeA.x + (this.nodeB.x - this.nodeA.x) * this.progress;
      const py = this.nodeA.y + (this.nodeB.y - this.nodeA.y) * this.progress;

      ctx.save();
      ctx.beginPath();
      ctx.arc(px, py, 2.2, 0, Math.PI * 2);
      ctx.fillStyle = '#00BFA5';
      ctx.shadowColor = '#00BFA5';
      ctx.shadowBlur = 6;
      ctx.fill();
      ctx.restore();
    }
  }

  function resize() {
    const rect = canvas.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    initNodes();
  }

  function initNodes() {
    nodes.length = 0;
    packets.length = 0;
    const count = Math.min(NODES_COUNT, Math.floor((width * height) / 16000));

    for (let i = 0; i < count; i++) {
      const x = Math.random() * (width - 80) + 40;
      const y = Math.random() * (height - 80) + 40;
      const isNexus = i % 5 === 0;
      nodes.push(new Node(x, y, isNexus));
    }
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Draw connection conduits between nearby nodes
    const maxDist = 135;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * 0.22;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);

          if (nodes[i].isNexus || nodes[j].isNexus) {
            ctx.strokeStyle = `rgba(0, 191, 165, ${alpha * 1.5})`;
            ctx.lineWidth = 1.2;
          } else {
            ctx.strokeStyle = `rgba(29, 48, 59, ${alpha * 2.5})`;
            ctx.lineWidth = 0.8;
          }
          ctx.stroke();

          // Spontaneously spawn telemetry packets
          if (Math.random() < 0.0015 && packets.length < 12) {
            packets.push(new DataPacket(nodes[i], nodes[j]));
          }
        }
      }
    }

    // Update and draw packets
    for (let p = packets.length - 1; p >= 0; p--) {
      const packet = packets[p];
      if (packet.update()) {
        packet.draw();
      } else {
        packets.splice(p, 1);
      }
    }

    // Update and draw nodes
    nodes.forEach(node => {
      node.update();
      node.draw();
    });

    animationFrameId = requestAnimationFrame(render);
  }

  // Event Listeners
  window.addEventListener('resize', () => {
    cancelAnimationFrame(animationFrameId);
    resize();
    render();
  });

  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  canvas.addEventListener('mouseleave', () => {
    mouse.x = -1000;
    mouse.y = -1000;
  });

  // Touch support for mobile devices
  canvas.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches[0]) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.touches[0].clientX - rect.left;
      mouse.y = e.touches[0].clientY - rect.top;
    }
  }, { passive: true });

  canvas.addEventListener('touchend', () => {
    mouse.x = -1000;
    mouse.y = -1000;
  });

  // Initialize
  resize();
  render();
})();

