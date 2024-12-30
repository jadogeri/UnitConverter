
# **System Design Document (SDD)**  
## **Unit Converter System**  
**Version:** 1.1
**Date:** December 30, 2024

---

## Description
This is a REST API ,which stores user seesion in an embedded database (lowdb)


## Authors

- [@jadogeri](https://www.github.com/jadogeri)


## Table of Contents

   <ul>
      <li><a href="#1-introduction">1. Introduction</a>
        <ul>
          <li><a href="#11-purpose">1.1 Purpose</a> </li>
          <li><a href="#12-scope">1.2 Scope</a> </li>
          <li><a href="#13-intended-audience">1.3 Intended Audience</a> </li>
        </ul>
      </li>
    </ul>
    <ul>
      <li><a href="#2-system-overview">2. System Overview</a>
        <ul>
          <li><a href="#21-system-objectives">2.1 System Objectives</a> </li>
          <li><a href="#22-user-types">2.2 User Typres</a> </li>
          <li><a href="#23-assumptions-and-constraints">2.3 Assumptions and Constraints</a> </li>
          <li><a href="#24-system-context-diagram">2.4 System Context Diagram</a> </li>
        </ul>
      </li>
    </ul>
    <ul>
      <li><a href="#3-system-architecture">3. System Architecture</a>
        <ul>
          <li><a href="#31-high-level-architecture">3.1 High Level Architecture</a> </li>
          <li><a href="#32-technology-stack">3.2 Technology Stack</a> </li>
          <li><a href="#33-deployment-artifacts">3.3 Deployment Artifacts</a> </li>
        </ul>
      </li>
    </ul>
    <ul>
      <li><a href="#4-data-design">4. Data Design</a>
        <ul>
          <li><a href="#41-data-entities-and-relationships">4.1 Entities and Relationships</a> </li>
          <li><a href="#42-database-conceptual-schema">4.2 Database Conceptual Schema</a> </li>
          <li><a href="#33-deployment-artifacts">3.3 Deployment Artifacts</a> </li>
        </ul>
      </li>
    </ul> 
    <ul>
      <li><a href="#4-data-design">5. Installation</a>
        <ul>
          <li><a href="#41-data-entities-and-relationships">4.1 Entities and Relationships</a> </li>
          <li><a href="#42-database-conceptual-schema">4.2 Database Conceptual Schema</a> </li>
          <li><a href="#33-deployment-artifacts">3.3 Deployment Artifacts</a> </li>
        </ul>
      </li>
    </ul> 
    


- [Installation](#installation)
- [Usage](#usage)
    -[Run Locally](#run-locally)
- [API Documentation](api-documentation)
- [Tests](#tests)
- [License](#license)
- [Acknowledgements](#acknowledgements)



## **1. Introduction**  
### **1.1 Purpose**  
This document outlines the system architecture, components, and design considerations for Unit Converter System. The goal is to provide a robust platform for individuals and businesses to calculate and convert to preferred units.

### **1.2 Scope**  
The system will allow users to:  
- Submit personal property declarations online.  
- Integrate seamlessly with the parish tax collection system for calculations and payments.  

### **1.3 Intended Audience**  
- System Developers and Administrators  
- End Users (Individuals and Businesses)  

---

## **2. System Overview**  
### **2.1 System Objectives**  
- Simplify unit conversion for end users.  

### **2.2 User Types**
Unit Converter supports the following types of users.

|User Type|Description|
|-|-|
|Casual Users|End users can access api hits statistics and make calculations.|

### **2.3 Assumptions and Constraints**  
- Users must have internet access to report online.  
- Development will be completed by Feburary 20, 2025.

### **2.4 System Context Diagram**  
![Unit Converter Context Diagram](<designs/systemdiagram.png>)
---

## **3. System Architecture**  
### **3.1 High-Level Architecture**  
The system follows a **three-tier architecture**:  
1. **Presentation Layer**: A responsive web interface accessible on desktop devices.  
2. **Application Layer**: Implements business logic that manages the reading and writing of user input to the **Data Layer**.
3. **Data Layer**: Handles storage and retrieval of user data.

![OPOPPR Tiers](<diagrams/OPOPPR - Tiers.jpg>)

### **3.2 Technology Stack**  
- **Programming Languages**: Python, JavaScript, HTML, CSS and SQL
- **IDE**: Visual Studio Code (VSCode)
- **Frontend Frameworks**: ReactJS 
- **Backend Frameworks**: Flask
- **Database**: SQLite3
- **Hosting**: Render.com and Vercel.com
- **Source Control**: Git and GitHub
- **CI/CD**: GitHub Actions

### **3.3 Deployment Artifacts**
- **Database**: Collection of SQL scripts that are executed on a Sqlite3 database instance.
- **Backend Application**: build and run Flask application instance on Render.com
- **Frontend Application**: build and run ReactJS application instance on Vercel.com

---

## **4. Data Design**  
### **4.1 Data Entities and Relationships**
|Entity|Description|
|-|-|
|SERVICE|User account information used to authenticate users.|
|DAILYSPAN|General information about a form that was submitted using OPOPPR.|
|LIFESPAN|Lookup table of form types. Currently only LAT5 is supported.|

### **4.2 Database Conceptual Schema**  
![Unit Converter Conceptual Diagram](<designs/conceptualdiagram.png>)

---

- [Installation](#installation)
- [Usage](#usage)
    -[Run Locally](#run-locally)
- [API Documentation](api-documentation)
- [Tests](#tests)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## **5. Installation**  

---

## **6. Usage**  

---
## **7. API Documentation**  

---

## **7. References**

* Core JavaServer Faces 3rd Edition - *David Geary & Cay Hortsmann* - Pretince Hall
* Java EE 7 Essentials - *Arun Gupta* - O'Reilly
* Docker Deep Dive: Zero to Docker in a single book - *Nigel Poulton*
* Maven: The Definitive Guide - *Sonatype* - O'Reilly
* [Prime Faces - Ultimate UI Framework](https://www.primefaces.org/)