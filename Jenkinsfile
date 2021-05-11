
pipeline {
    agent {
        docker {
            image 'node:lts-buster-slim'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true'
        emailToNotify = 'mr.bonilla51@gmail.com'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
        stage('Deploy') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'digitalocean', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                        def remote = [:]
                        remote.name = 'otto-server'
                        remote.host = '128.199.43.48'
                        remote.user = USERNAME
                        remote.password = PASSWORD
                        remote.allowAnyHosts = true
                        sshPut remote: remote, from: './dist/', into: '/var/www/reactchallenge'
                    }
                }
            }
        }
    }

    post {
        success {
            emailext body: 'Job successfully completed!', recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']], subject: 'Job notification', to: emailToNotify
        }
        failure {
            emailext body: 'Job execution failed!', recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']], subject: 'Job notification', to: emailToNotify
        }
    }
}
