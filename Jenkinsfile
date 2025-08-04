pipeline {
    agent {
        kubernetes {
          yamlFile 'deploy/kubernetes-pod.yaml'
        }
    }
    stages {
        stage('Build Image') {
            steps {
                container('docker') {
                    sh 'docker build -t registry.bn.co.th/socleantissue-website:latest .'
                }
            }
        }
        stage('Push Image') {
            steps {
                container('docker') {
                     sh 'docker push registry.bn.co.th/socleantissue-website:latest'
                }
            }
        }
        stage('Deployment') {
            steps {
                container('kubectl') {
                     sh 'kubectl delete -f deploy/deployment.yaml -n socleantissue --ignore-not-found=true'
                     sh 'kubectl apply -f deploy/deployment.yaml -n socleantissue'
                }
            }
        }
    }
}
