function watchAttention(window) {
    window.demandsAttentionChanged.connect(() => {
        if (window.demandsAttention) {
            workspace.activeWindow = window;
        }
    });
}

for (const window of workspace.windowList()) {
    watchAttention(window);
}

workspace.windowAdded.connect(watchAttention)
