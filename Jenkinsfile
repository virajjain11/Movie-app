pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/virajjain11/Movie-app.git'
      }
    }

    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Run tests') {
      steps {
        sh 'npm run test'
      }
    }

    stage('SonarQube analysis') {
      steps {
        withSonarQubeEnv('SonarQube') {
          sh 'sonar-scanner'
        }
      }
    }
  }
}