import os
import shutil
import subprocess
from datetime import datetime

# Define source and destination directories
source_dir = 'dist'
destination_dir = '../salnad.github.io/'

if not os.path.exists(source_dir):
    print("make sure to build the project first! run `npm run build`")
    exit(1)

if not os.path.exists(destination_dir):
    print("make sure github pages repo exists in the same directory as this project!")
    exit(1)

# Copy contents from dist to ../salnad.github.io/
shutil.copytree(source_dir, destination_dir, dirs_exist_ok=True)

# Prepare the commit message
commit_message = f"Push for {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}"

# Execute git commands
subprocess.run(['git', 'add', '.'], cwd=destination_dir)
subprocess.run(['git', 'commit', '-m', commit_message], cwd=destination_dir)
subprocess.run(['git', 'push'], cwd=destination_dir)

print("Deployment completed successfully.")