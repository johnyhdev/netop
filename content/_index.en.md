---
isIndex: true
draft: false
title: Netop Lab
description: Explore my open-source infrastructure labs, zero-trust hybrid networking blueprints, and plug-and-play AI inference pipelines optimized for edge hardware.
image:
  src: /images/uploads/002-01-netop-hero-hybrid-lab-1600x900.svg
  alt: Netop Lab architectural overview showing hybrid cloud and edge AI integration 1600x900
hero:
  surtitle: OPEN-SOURCE INFRASTRUCTURE LABS & PLUG-AND-PLAY AI DEVOPS
  title: Engineering Secure Hybrid Systems And Edge AI Workflows
  text: I built Netop Lab as my personal engineering portfolio - sharing production-aligned IaC blueprints, zero-trust mesh networking, and lightweight AI inference tools for modern systems.
  ctas:
    - text: Explore GitHub Labs
      url: https://github.com/johnyhdev/hybrid-infrastructure-lab
      blank: true
    - text: View Open Source Solutions
      url: /solutions/
      blank: false
  align: null
  image:
    src: /images/uploads/002-01-netop-hero-hybrid-lab-1600x900.svg
    alt: Hero visualization of Netop Lab architecture 1600x900
    background: true
    darken: true
blocks:
  # 1. EDITORIAL BLOCK: BUILDING TRUST & POSITIONING
  - type: editorial
    direction: ltr
    surtitle: Pragmatic Engineering & Proof Of Competency
    title: Bridging Traditional Systems With Modern NetDevOps
    text: As an infrastructure professional transitioning into hybrid systems and cloud automation, Netop Lab is where I publish rigorous, [*]battle-tested reference architectures instead of theoretical guides.
    notes:
      - text: Every blueprint—from secure Azure OIDC pipelines to zero-trust Tailscale meshes - is designed to eliminate operational toil and provide reproducible patterns you can adapt immediately.
    ctas:
      - text: Read About My Background
        url: /about-me/
        blank: false
    image:
      src: /images/uploads/002-02-netop-connection-model-856x481.svg
      alt: Technical diagram illustrating netop lab core philosophy 856x481
      legend: Netop Lab Core Philosophy
      credit: Designed by An Huynh (Netop Lab)

  # 2. INFORMATIONS BLOCK: CORE ECOSYSTEM & VALUE PROPOSITION (6 CARDS)
    heading:
      surtitle: Ecosystem Capabilities And Benefits
      title: What Netop Lab Delivers For Engineers
      text: Practical, modular, and secure solutions built to handle real-world infrastructure challenges without vendor lock-in.
    column: 3
    items:
      - icon: cpu
        title: Automated IaC Blueprints
        text: Declarative Terraform and Ansible configurations to provision multi-node infrastructure safely in minutes.
      - icon: shield-lock
        title: Zero-Trust Security First
        text: Zero public IPs on workloads; management traffic is strictly secured via Tailscale mesh and short-lived OIDC tokens.
      - icon: camera-video
        title: Edge AI Plug-and-Play
        text: Ready-to-run YOLO26n inference pipelines optimized for low-power Intel iGPUs via simple RTSP configuration.
      - icon: layers
        title: Enterprise Scalability Path
        text: Modular designs ready to integrate Cloudflare Tunnels, load balancers, and full observability stacks.
      - icon: sliders
        title: Production-Grade Patterns
        text: Mirroring big-tech methodologies to enforce configuration drift control and automated remediation.
      - icon: heart-pulse
        title: Community & Open Source
        text: Freely accessible MIT-licensed codebases designed for transparency, learning, and self-hosting.

  # 3. PUSHES BLOCK: HIGHLIGHTING FEATURED PROJECTS (INFRA & AI EDGE)
  - type: pushes
    heading:
      surtitle: Featured Open Source Projects
      title: Production-Ready Labs & Edge Tooling
      text: Dive into my core open-source repositories designed for instant deployment and customization.
    column: 2
    items:
      - title: Hybrid Infrastructure Lab
        text: A complete zero-trust lab bridging Azure cloud with automated configuration, GitHub OIDC, and Tailscale mesh VPN.
        cta:
          text: View Lab Repository
          url: https://github.com/johnyhdev/hybrid-infrastructure-lab
          blank: true
        image:
          src: /images/uploads/002-03-netop-hybrid-infrastructure-lab-856x481.svg
          alt: Hybrid Infrastructure Lab preview 856x481
        darken: true
        card: false
        color: "#ffffff"
      - title: Edge AI YOLO26n Inference Pipeline
        text: Plug-and-play computer vision pipeline optimized for Intel iGPUs. Drop in your RTSP stream and start running inference instantly.
        cta:
          text: Explore AI Tooling
          url: /solutions/
          blank: false
        image:
          src: /images/uploads/002-04-netop-yolo26n-inference-pipeline-856x481.svg
          alt: Edge AI YOLO inference preview 856x481
        darken: true
        card: false
        color: "#ffffff"

  # 4. EDITORIAL BLOCK: ROADMAP TO ENTERPRISE & ECOSYSTEM VISION
  - type: editorial
    direction: rtl
    surtitle: Evolution Roadmap
    title: From Closed Lab Base To Enterprise Ecosystem
    text: Netop Lab starts with a secure, isolated core base (Control Manager and Workload nodes). From there, it evolves smoothly into advanced[*] enterprise requirements.
    notes:
      - text: You can extend the base lab with Cloudflare Tunnels/Load Balancers, native Azure balancers, high availability (HA), backup/recovery workflows, and centralized Prometheus/Grafana observability. Future iterations will leverage Cloudflare Workers and free edge databases to render real-time system status dashboards directly from your tunnels.
    ctas:
      - text: Explore Solutions Hub
        url: /solutions/
        blank: false
    image:
      src: /images/uploads/002-05-netop-github-workflow-856x481.svg
      alt: Roadmap and ecosystem architecture diagram 856x481
      legend: Enterprise Evolution Roadmap
      credit: Netop Lab

  # 5. INFORMATIONS BLOCK: STANDARDS & SECURITY PILLARS
    heading:
      surtitle: Architectural Standards
      title: Built-In Enterprise Security Standards
      text: High-security IaC projects require strict compliance building blocks right out of the box.
    column: 3
    items:
      - icon: key
        title: WIF & GitHub OIDC
        text: Keyless authentication eliminating long-lived secrets between GitHub Actions and cloud control planes.
      - icon: terminal
        title: Tailscale Mesh & SSH
        text: Encrypted tailnets and identity-based access control replacing traditional bastion hosts.
      - icon: shield-shaded
        title: Least Privilege RBAC & NSGs
        text: Scoped permissions and rigorous network security group boundaries to prevent lateral movement.

  # 6. EDITORIAL BLOCK: DISCLAIMER & PRAGMATIC REALITY
  - type: editorial
    direction: ltr
    surtitle: Pragmatic Engineering Disclaimer
    title: Open Source Transparency & Production Hardening
    text: These repositories provide robust automation baselines and secure perimeters (No Public IPs). However, eliminating public exposure does not remove [*]internal risks from app vulnerabilities or privilege escalation.
    notes:
      - text: Enterprise deployments require specialized internal auditing, HA configuration, and tailored redundancy. Use these open-source tools as accelerators, and always perform security reviews before production rollout.

  # 7. FAQ BLOCK: ADDRESSING COMMON QUESTIONS
  - type: faq
    heading:
      surtitle: Frequently Asked Questions
      title: Common Queries About Netop Lab Projects
      text: Clear answers regarding usage, licensing, operational costs, and extension capabilities.
    items:
      - open: true
        summary: Are these projects free to use and commercialize?
        title: Open Source Licensing (MIT)
        text: Most codebases are released under the MIT License, allowing you to adapt them freely. However, you should review third-party tool binaries (like Terraform) and software dependencies, and consult legal experts before commercial packaging.
      - open: false
        summary: How can I manage and minimize cloud costs during testing?
        title: Automated Destroy Mechanism
        text: While running VMs, disks, or egress bandwidth incur provider costs, the labs include automated destroy workflows to tear down infrastructure completely after testing, keeping expenses minimal when controlled tightly.
      - open: false
        summary: How can I support Netop Lab or contribute?
        title: Support & Sponsorship
        text: If these labs save you time or help your team, you can support my independent engineering work via GitHub Sponsors, Buy Me a Coffee, or by utilizing recommended infrastructure affiliate links on the site. Thank you.
    background: false

  # 8. LATEST POSTS / BLOG STYLE SECTION FOR INSIGHTS
  - type: latest
    heading:
      surtitle: Engineering Insights & Tech Notes
      title: Latest From My Blog
      text: Read my deep-dives into NetDevOps troubleshooting, automation scripts, and architecture trade-offs.
    section: posts
    layout: grid
    count: 3
    show_more: true
    background: false
---