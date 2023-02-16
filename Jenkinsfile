pipeline {
    agent {
        docker {
            image 'node:12.22.0'
            args '-p 3000:3000'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        
    }
}
