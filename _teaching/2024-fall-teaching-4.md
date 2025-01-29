---
title: "Course of Technology and Innovation in Sports"
collection: teaching
type: "Master's Degree in Physical Education and Sport, Academic Year 2024-25"
permalink: /teaching/2024-fall-teaching-4
venue: "University of Trento & University of Verona"
date: 2024-11-01
location: "In person, Rovereto (Trento), Italy"
---

**Technology and innovation in sport**,  
**Mechatronics in Sport**,  
1st semester LM68  
from Sep 30th, 2024 to Jan 17th, 2025, Rovereto, Trento, Italy

**Instructor**: Andrea Zignoli  
**Mail to**: [andrea.zignoli@unitn.it](mailto:andrea.zignoli@unitn.it)

---

## Overview of the course

Models are essential tools for understanding and interpreting the world around us. We rely on models in every aspect of life, and sports is no exception.

Mathematical models are a particular subset of models, and they describe the world using the language of mathematics. In the act of writing the equations for these models, we refine our understanding of reality. Whether we're exploring trends in record-breaking achievements or analyzing the biomechanics of a leg-extension exercise, models help us formulate hypotheses, sharpen research questions, and challenge our assumptions.

In my experience developing models for sports performance, I've observed that many sports scientists use these tools without fully understanding the principles behind their design. Worse still, they often dismiss a model as being “too complex” or “inaccurate.” Such judgments are often not based on solid reasoning, with tradition or reputation frequently influencing model selection more than a careful assessment of a model's strengths and limitations.

Given the immense value of modelling in sports science, I believe that you can greatly benefit from a course on this subject. While it's not necessary to dive deeply into advanced mathematical theory, it's important to provide an overview of the language, basic concepts, and the practical functionality of mathematical modelling. Although some foundational definitions and concepts may require effort to grasp, mastering them will unlock a world of opportunities.

I hope this course will enhance your understanding of mathematical models and equip you with the skills to apply these tools effectively in your daily practice. By adding these capabilities to your toolkit, you'll gain a critical asset for advancing your career as a sports scientist.

---

## Learning Goals

By the end of this course, you will have developed a comprehensive understanding of the fundamental principles and practical applications of mathematical models in sports science. You will be able to define and construct models to describe various aspects of sports performance, from biomechanics to physiological responses. You will learn how to differentiate between linear and non-linear models, as well as static and dynamic models, applying these concepts to real-world scenarios such as oxygen consumption, critical power, and lactate metabolism. Additionally, you will be able to critically assess the accuracy and relevance of different models, perform sensitivity analyses, and balance the trade-offs between model complexity and practical functionality. Ultimately, you will be equipped with the skills to effectively use modelling as a tool for hypothesis formulation, data interpretation, and performance optimization in the field of sports science.

---

## Modules

The entire course spans 18 academic hours, with the content divided into distinct topics. The material is delivered through two formats: frontal classes, where the instructor presents slides to the class, and hands-on sessions, where both the instructor and participants work together on shared screens and spreadsheets.
 
🧑‍🏫 : frontal class  |  💻 : hands-on  |  ⌚: Expected duration

1. 🧑‍🏫 **What is mathematical modelling?** ⌚ 45-60'
    - Overview of the definition of model
    - Simple examples and applications
        - HRmax versus age
        - Olympic record progression versus year
        - Knee angle versus isometric leg extension torque
    - Definition of the building blocks of a model y=f(x,P): 
        - Inputs versus outputs 
        - Independent versus dependent variables
    - In experimental design: controlled versus observed variables
    - In control systems: input versus output
    - Parameters versus variables
    - Linear versus non-linear models
    - Domain
    - Interpolation versus extrapolation
    - Static versus dynamic models
    - Black-box versus analytical versus statistical versus first-principles (and everything in between)

2. 🧑‍🏫 **The process of creating a model** ⌚ 45-60'
    - Calibration versus validation (train/test)
    - Training versus test dataset
    - Overfitting
    - What do I need a model for
    - Post-processing
    - The fitting process (optimisation principles)
    - Domain of applicability of a model
    - Ranges of the independent and dependent variable (also connected to Linear versus non-linear models)
    - Prediction
    - Interpolation versus extrapolation
    - Sensitivity analysis
    - Trade-off between accuracy, complexity, flexibility, and physical/physiological meaning

3. 🧑‍🏫 **Static models** ⌚ 35-45'
    - Linear versus non-linear models
    - Polynomials (examples: leg-extension)
    - Exponential (example: lactate production and clearance)
    - Hyperbolic (example: critical power)
    - Power-law (example: power-law)
    - Possible misunderstanding: time as independent variable
    - Possible misunderstanding: association versus linear regression
    - Correlation coefficient
    - Variance explained

4. 🧑‍🏫 **Dynamic models** ⌚ 45-60'
    - First-order linear differential equations
        - Examples (bird-view)
        - Oxygen consumption response (will have a dedicated class)
        - Bannister model (will have a dedicated class)
        - Exponentially weighted moving average (will have a dedicated class)
    - Second-order linear differential equations
        - Examples (bird-view)
        - Equations of dynamics
        - Locomotion (will have a dedicated class)
        - Mass-spring-damper system (will have a dedicated class)

5. 🧑‍🏫 **AI principles (required: what is mathematical modelling?)** ⌚ 45-60'
    - Examples
    - Basic principles behind neural networks
    - Neural network for time series
    - Supervised learning versus unsupervised learning

---

## Examples and Real-World Applications (Excel or Google Sheet spreadsheets)

### 🧑‍🏫 **Tools**: ⌚ 10-15'
- Why Excel
- The Excel spreadsheet
- The Excel trendline functionality (required: Possible misunderstanding: association versus linear regression)
- The Excel solver add-on
- The Google Sheet spreadsheet
- The Google Sheet solver add-on

### 💻 **Leg extension (required: non-linear models)** ⌚ 20-25'
- Overview
- Non-linear static model for optimal force/torque and knee angle 
- Similarities with the cadence/power relationship in cycling

### 💻 **Bi-exponential model for lactate production and clearance (required: non-linear models)** ⌚ 20-30'
- Overview
- Non-linear models (exponential) for the components of lactate metabolism
- The all-out test

### 💻 **Bannister model (required: first order differential equation)** ⌚ 20-30'
- Overview
- First order differential equations for CTL and ATL 

### 💻 **Anaerobic power/speed reserve (required: non-linear models)** ⌚ 15-20'
- Overview
- Fitting the anaerobic power/speed reserve model

### 💻 **Critical power** ⌚ 35-45'
- Overview
- The static nature of critical power (required: non-linear models)
- The dynamic nature of the W' (required: first-order differential equation)

### 💻 **Oxygen consumption (required: first-order differential equation)** ⌚ 45-60'
- Overview
- Static model for oxygen consumption (required: static models)
- Dynamic model for oxygen consumption
- Integrating the equations
- Step response
- Ramp response
- HIIT training

### 💻 **Locomotion in endurance sports (cycling and XC-ski examples) (required: second-order differential equation)** ⌚ 45-60'
- Overview
- Writing the equations (e.g. based on power for cycling, or based on speed for XC-ski)
- Integrating the equations
- Sensitivity analysis

### 💻 **MTB suspension (required: second-order differential equation)** ⌚ 45-60'
- Overview
- Writing the equations
- Integrating the equations
- The principle of resonance

