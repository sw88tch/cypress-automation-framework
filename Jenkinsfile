pipeline {
    agent any

    tools {nodejs "node"}

    stages {
        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave Node1') {
                    agent {
                        label "Remote_node1"
                    }
                    steps {
                       git url: 'https://github.com/sw88tch/cypress-automation-framework.git'
                       bat 'npm install'
                       bat 'npm update'
                       bat 'npm run triggerAllTests-autostore-dashboard'
                    }
                }
            }
        }
    }
}