$nodeDir = Join-Path $PSScriptRoot ".tools\node-v24.21.0-win-x64"
if (-not (Test-Path $nodeDir)) {
    Write-Error "Portable Node not found at $nodeDir"
    exit 1
}
$env:PATH = "$nodeDir;$env:PATH"
Write-Host "Using node: $(& "$nodeDir\node.exe" -v)"
Set-Location $PSScriptRoot
& "$nodeDir\npm.cmd" start
