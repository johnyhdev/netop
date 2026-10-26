---
isIndex: false
draft: false
date: 2026-10-25T22:26:00.000+07:00
title: Hybrid Infrastructure Lab (Terraform, Azure, Ansible, GitHub OIDC & Tailscale)
slug: hybrid-infrastructure-lab-terraform-azure-ansible-github-oidc-tailscale
description: A production-grade automated hybrid infrastructure lab blueprint
  demonstrating secure zero-trust networking, GitOps workflows, and
  infrastructure as code.
image:
  src: /images/uploads/002-03-netop-hybrid-infrastructure-lab-856x481.svg
  alt: Hybrid Infrastructure Lab architectural diagram overview
hero:
  video:
    controls: true
    autoplay: false
    loop: false
  surtitle: AUTOMATED HYBRID INFRASTRUCTURE AND ZERO TRUST ARCHITECTURE
  title: Hybrid Infrastructure Lab Blueprint
  text: Explore my production-aligned reference architecture bridging public cloud
    resources with automated configuration management and zero-trust identity
    controls.
  image:
    src: /images/uploads/002-03-netop-hybrid-infrastructure-lab-856x481.svg
    alt: Hero image showing hybrid cloud and on-premise connection topology
    background: true
    darken: true
blocks:
  - type: informations
    heading:
      surtitle: Core Business & Engineering Value
      title: 6 Key Benefits Solved By This Solution
      text: Designed to eliminate traditional operational bottlenecks and establish
        robust automation standards for modern infrastructure environments.
    column: 3
    items:
      - icon: lightning-charge
        title: Rapid Automated Deployment
        text: Provision complete multi-node infrastructure and baseline configurations
          in minutes through automated pipelines.
      - icon: shield-lock
        title: Zero Trust Access Model
        text: Zero public IPs on virtual machines; all management traffic is secured via
          encrypted Tailscale mesh tunnels.
      - icon: check-circle
        title: Reduced Human Error
        text: Declarative Infrastructure as Code ensures consistency and eliminates
          manual portal misconfigurations.
      - icon: sliders
        title: High Configurability
        text: Easily adjust network topologies, security rules, and server parameters
          through modular HCL and YAML code.
      - icon: arrows-angle-expand
        title: Scalable Architecture
        text: Modular design allows seamless scaling of workload nodes and subnets as
          enterprise demands grow.
      - icon: cash-coin
        title: Cost Control & Lifecycle
        text: Integrated destroy workflows and lean resource sizing keep development and
          testing expenses extremely low.
  - type: editorial
    direction: ltr
    surtitle: Open Source Proof Of Work
    title: Why You Should Experience This Solution
    text: This [*]lab serves as my personal engineering showcase demonstrating
      real-world NetDevOps capability. It bridges traditional network
      administration with modern cloud automation, providing a reliable
      reference for secure infrastructure.
    notes:
      - text: Explore the complete open-source codebase, HCL modules, Ansible playbooks,
          and automated CI/CD pipelines directly on my GitHub repository.
    ctas:
      - text: View GitHub Repository
        url: https://github.com/johnyhdev/hybrid-infrastructure-lab
        blank: true
    image:
      src: /images/uploads/003-001-001-hybrid-infrastructure-lab-IaC.svg
      alt: GitHub repository workflow and GitOps pipeline diagram
      legend: GitOps Automated Pipeline
      credit: Designed by An Huynh (Netop Lab)
  - type: informations
    heading:
      surtitle: Technology Stack Overview
      title: Core Technologies & Purpose
      text: Every tool in this lab is selected to fulfill specific enterprise
        requirements for security, automation, and maintainability.
    column: 3
    items:
      - icon: code-slash
        title: Terraform
        text: Used for declarative cloud resource provisioning (Azure VNets, VMs, NSGs)
          to ensure repeatable and version-controlled infrastructure.
      - icon: gear-wide-connected
        title: Ansible
        text: Automates server configuration baselines, package installations, and
          service management without storing long-lived SSH keys.
      - icon: cloud
        title: Azure Cloud
        text: Provides enterprise-grade cloud compute and virtual networking foundations
          with flexible resource management.
      - icon: github
        title: GitHub Actions & OIDC
        text: Enables keyless, secure authentication between CI/CD pipelines and Azure
          cloud resources using short-lived tokens.
      - icon: diagram-3
        title: Tailscale Mesh VPN
        text: Establishes secure, encrypted private connectivity and policy-as-code
          access across distributed nodes without public exposure.
  - type: editorial
    direction: rtl
    surtitle: Key Lab Features & Capabilities
    title: Built For Modern NetDevOps Operations
    text: Discover how my lab [*]architecture empowers engineers to maintain
      absolute control over complex multi-site environments with minimal
      friction.
    notes:
      - text: Enforces strict security isolation, declarative infrastructure governance,
          write-once-run-anywhere automation, and seamless remote management
          from anywhere via Tailscale.
    image:
      src: /images/uploads/003-001-002-lab-features-and-remote-management-topology-diagram.svg
      alt: Lab features and remote management topology diagram
      legend: NetDevOps Operational Flow
  - type: informations
    heading:
      surtitle: Security & Networking Standards
      title: Production-Grade Security Components
      text: Incorporating industry best practices as standard building blocks for
        high-security, scalable IaC projects.
    column: 3
    items:
      - icon: key
        title: WIF / OIDC Authentication
        text: Eliminates long-lived secrets in CI/CD by using Workload Identity
          Federation.
      - icon: terminal
        title: Tailscale SSH & ACLs
        text: Enforces fine-grained access policies and identity-based SSH connections.
      - icon: person-badge
        title: Entra ID & RBAC
        text: Applies least-privilege role-based access control across cloud resources.
      - icon: shield-shaded
        title: NSGs & VNET Isolation
        text: Restricts lateral movement with strict network security group rule
          boundaries.
      - icon: slash-circle
        title: No Public IP Footprint
        text: Completely removes public IP exposure on virtual machines to minimize
          attack surfaces.
  - type: editorial
    direction: ltr
    surtitle: Scope, Limitations & Threat Model
    title: Understanding Architectural Boundaries
    text: This project is a streamlined open-source\[\*] showcase. It intentionally
      defers advanced\[\*] enterprise features like multi-region HA, automated
      backup/restore, and centralized SIEM log aggregation.
    notes:
      - text: Adapting this code for internal enterprise use requires custom hardening.
          External ingress modules (such as Cloudflare Tunnels or Load Balancers
          requiring public endpoints) must be implemented based on specific
          operational requirements.
      - text: While removing public IPs successfully neutralizes perimeter scanning and
          external direct attacks, it does not eliminate internal risks stemming
          from OS or application vulnerabilities, memory leaks, or privilege
          escalation.
    image:
      src: /images/uploads/003-001-003-understanding-architectural-boundaries.svg
      alt: Visual image Understanding Architectural Boundaries
  - type: editorial
    direction: rtl
    surtitle: Engineering Disclaimer
    title: Production Validation & Expert Review
    text: The repository provides a secure outer shell and robust automation
      baseline. However, core application security and compliance configurations
      must be thoroughly audited and certified by qualified security experts
      before running in mission-critical production environments.
    image:
      src: /images/uploads/003-001-004-profesional-reviewer-security.svg
      alt: Visual image Production Validation & Expert Review
  - type: embed
    background: false
    heading:
      surtitle: Repository Walkthrough & Architecture Overview
      title: Hybrid Infrastructure Lab Codebase Tour
      text: Watch a complete repository overview explaining how the architecture
        operates, how the core automation components interact, and how to
        navigate the open-source codebase.
    embed: <iframe width="1059" height="595"
      src="https://www.youtube.com/embed/hILw7lFx_c8" title="#01 Zero Trust
      Hybrid Infrastructure Lab Architecture (Terraform, Azure, Tailscale,
      Github ci/cd)" frameborder="0" allow="accelerometer; autoplay;
      clipboard-write; encrypted-media; gyroscope; picture-in-picture;
      web-share" referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen></iframe>
  - type: faq
    heading:
      surtitle: Frequently Asked Questions
      title: Everything You Need To Know About The Solution
      text: Clear answers regarding security posture, operational costs, production
        readiness, and licensing terms.
    items:
      - open: true
        summary: Is this solution secure and what are its limitations?
        title: Security Posture And Inherent Limitations
        text: The lab implements strong zero-trust perimeter controls (no public IPs,
          OIDC authentication, Tailscale mesh). However, its primary limitation
          is the absence of built-in enterprise resilience (HA, disaster
          recovery) and internal application-layer defense, which require
          downstream hardening.
      - open: false
        summary: Does it incur high costs? How can expenses be managed?
        title: Cost Management And Resource Cleanup
        text: Cloud resources (VMs, disks, egress bandwidth if applicable) incur
          standard provider charges while running. Fortunately, the repository
          includes a fully automated destroy mechanism to tear down all
          infrastructure immediately after testing, though users must actively
          monitor their Azure subscriptions.
      - open: false
        summary: Can this solution be deployed directly into real production?
        title: Production Readiness And Extension Requirements
        text: While designed with production-grade patterns, it currently represents a
          foundational implementation. Deploying it for live enterprise traffic
          requires adding public ingress handling, high availability,
          comprehensive audit logging, and observability stacks.
      - open: false
        summary: Is it free and can it be commercialized?
        title: Licensing Terms And Commercial Guidance
        text: The source code is released under the MIT License, excluding third-party
          modules, tool binaries (like Terraform), and proprietary software
          licenses. Always consult legal and technical experts before packaging
          this lab as a commercial product.
    background: false
---
