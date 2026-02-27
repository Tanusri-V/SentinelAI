🔐 SentinelAI

Intelligent Identity Theft Detection & Login Anomaly Monitoring

SentinelAI is an AI-powered cybersecurity platform designed to detect identity theft and account takeover attempts by analyzing user login behavior. Instead of relying only on passwords or OTPs, SentinelAI continuously monitors behavioral patterns and flags suspicious activity in real time.

🚀 Project Overview

Modern digital systems face increasing threats from credential theft and unauthorized access. Attackers often log in using valid credentials, making traditional authentication insufficient.

SentinelAI solves this problem by learning normal login behavior and detecting anomalies based on:

Location changes

Device changes

Login timing

Login frequency patterns

The system assigns a risk score to each login and generates actionable alerts for security teams.

🎯 Key Objectives

Detect suspicious login behavior proactively

Identify identity theft attempts before damage occurs

Provide explainable risk-based alerts

Enable fast and informed security responses

🧠 How SentinelAI Works

Login Data Ingestion
Login activity data is uploaded in CSV format.

Feature Engineering
Behavioral features are extracted, including:

New device detection

New location detection

Impossible travel detection

Odd login hour analysis

Login frequency spikes

Anomaly Detection
An unsupervised machine learning model learns normal login behavior and flags deviations.

Risk Scoring
Each login is assigned a risk score based on weighted behavioral indicators.

Alert Generation & Visualization
High-risk events trigger alerts and appear on a real-time security dashboard.

📊 Core Metrics Tracked

Total login attempts

Unique active users

Anomalies detected

High-risk alerts

Average risk score

New device logins

New location logins

Impossible travel events

⚠️ Risk Scoring Logic

Each login is evaluated using behavioral rules:

Risk Factor	Description
New Device	Login from previously unseen device
New Location	Login from new country or city
Odd Hour	Login outside usual user time window
Frequency Spike	Abnormal number of logins in short time

Risk Levels:

Low (0–30) – Normal activity

Medium (31–60) – Suspicious

High (61–100) – Potential identity theft

🖥️ Application Features
Dashboard

Security overview with real-time metrics

Live alerts feed

Login behavior visualizations

Dataset Upload

CSV upload with validation

Dataset preview and summary

Model execution trigger

Alerts Management

Filter alerts by risk level, user, or date

Detailed alert analysis with risk breakdown

Response actions (OTP trigger, account lock, email alert)

User Behavior Analytics

Individual user login timelines

Risk score trends

Location and time-based heatmaps

Model Insights

Model configuration overview

Feature influence explanation

Normal vs anomalous login distribution

🛠️ Technology Stack

Frontend

Web-based dashboard (SOC-style UI)

Responsive dark-theme interface

Backend

Python

Flask / FastAPI

Machine Learning

Scikit-learn

Isolation Forest (unsupervised anomaly detection)

Database

SQLite / PostgreSQL

Visualization

Chart-based analytics for behavioral insights

🔒 Why SentinelAI Is Needed

Stolen credentials bypass traditional security

Identity theft causes financial and reputational damage

Manual monitoring is not scalable

Behavioral anomalies are early indicators of attacks

SentinelAI shifts security from static authentication to intelligent behavioral defense.

🔮 Future Enhancements

Real-time streaming login detection

Email and SMS alert integration

Automatic account lock after repeated high-risk attempts

AI-generated explanations for flagged logins

Integration with SIEM tools

🏆 Hackathon Relevance

SentinelAI demonstrates:

Practical application of machine learning in cybersecurity

Real-world fraud detection logic

Explainable AI through risk scoring

Enterprise-grade dashboard design

📌 Conclusion

SentinelAI provides a proactive, scalable, and explainable solution to identity theft detection by continuously monitoring login behavior and responding to anomalies in real time.

Securing digital identities with intelligence.
